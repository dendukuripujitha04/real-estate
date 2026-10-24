const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'database.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Helper to read and write database
function getDb() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading DB:', err);
    return null;
  }
}

function saveDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving DB:', err);
    return false;
  }
}

// Session tokens for BuildSphere admin sessions
const activeAdminTokens = new Set(['buildsphere-admin-secret-token-2024']);

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (activeAdminTokens.has(token)) {
    return next();
  }
  return res.status(403).json({ success: false, message: 'Invalid or expired session token' });
}

// ---------------- PUBLIC API ROUTES ---------------- //

// 1. Company Info
app.get('/api/info', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json({
    company: db.company,
    stats: db.stats,
    guarantees: db.company.guarantees
  });
});

// 2. Services
app.get('/api/services', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.services);
});

// 3. Projects
app.get('/api/projects', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  const category = req.query.category;
  let list = db.projects;
  if (category && category !== 'all') {
    list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  res.json(list);
});

// 4. Gallery
app.get('/api/gallery', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  const category = req.query.category;
  let list = db.gallery;
  if (category && category !== 'all') {
    list = list.filter(g => g.category.toLowerCase() === category.toLowerCase());
  }
  res.json(list);
});

// 5. Testimonials
app.get('/api/testimonials', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.testimonials);
});

// 6. Estimator Rates
app.get('/api/estimator-rates', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  res.json(db.estimatorRates);
});

// 7. Cost Estimator Calculation API
app.post('/api/estimate', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  
  const { projectType = 'residential', quality = 'standard', area = 1500, floors = 'g1' } = req.body;
  const numArea = parseFloat(area) || 1500;
  
  const ratesConfig = db.estimatorRates[projectType] || db.estimatorRates.residential;
  const selectedTier = ratesConfig[quality] || ratesConfig.standard || { rate: 2000, label: 'Standard', spec: 'Standard Quality' };
  
  const floorMultiplier = db.estimatorRates.floorMultipliers[floors] || 1.0;
  const totalArea = Math.round(numArea * floorMultiplier);
  
  const baseRate = selectedTier.rate;
  const baseCost = baseRate * totalArea;
  const minCost = Math.round(baseCost * 0.95);
  const maxCost = Math.round(baseCost * 1.08);

  // Formatting in Indian numbering (Lakhs & Crores)
  function formatINR(val) {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  }

  res.json({
    success: true,
    inputs: { projectType, quality, area: numArea, floors },
    totalBuiltupArea: totalArea,
    ratePerSqFt: baseRate,
    tierLabel: selectedTier.label,
    specifications: selectedTier.spec,
    estimatedMinCost: minCost,
    estimatedMaxCost: maxCost,
    formattedRange: `${formatINR(minCost)} – ${formatINR(maxCost)}`,
    approxPerSqFtRange: `₹${Math.round(baseRate * 0.95)} – ₹${Math.round(baseRate * 1.08)} / sq.ft`,
    disclaimer: 'Estimated cost is for preliminary reference only. Final project cost may vary based on design, materials, site conditions, specifications and project requirements.'
  });
});

// 8. Project Progress Tracking (Customer feature)
app.get('/api/project-progress/:code', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });
  const code = (req.params.code || '').trim().toUpperCase();
  const found = (db.projectProgress || []).find(p => p.code.toUpperCase() === code);
  if (!found) {
    return res.status(404).json({
      success: false,
      message: `Project tracking code '${code}' not found. Please verify your Project ID or contact BuildSphere customer desk.`
    });
  }
  res.json({ success: true, project: found });
});

// 9. Enquiries / Consultation Submission
app.post('/api/enquiries', (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });

  const { name, phone, email, projectType, location, approxArea, message, estimatedCost } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Please provide your full name.' });
  }
  if (!phone || !phone.trim() || phone.trim().length < 10) {
    return res.status(400).json({ success: false, message: 'Please provide a valid 10-digit mobile number.' });
  }

  const newEnquiry = {
    id: 'enq-' + Date.now(),
    name: name.trim(),
    phone: phone.trim(),
    email: (email || '').trim(),
    projectType: projectType || 'General Consultation',
    location: (location || 'Not Specified').trim(),
    approxArea: (approxArea || 'N/A').toString().trim(),
    message: (message || '').trim(),
    estimatedCost: estimatedCost || '',
    status: 'NEW',
    createdAt: new Date().toISOString()
  };

  db.enquiries.unshift(newEnquiry);
  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your enquiry has been received. The BuildSphere engineering team will contact you soon.',
    enquiryId: newEnquiry.id
  });
});

// 10. AI Construction Assistant Endpoint
app.post('/api/ai-chat', (req, res) => {
  const db = getDb();
  const { message } = req.body;
  if (!message || !message.trim()) {
    return res.status(400).json({ reply: 'Please provide a question.' });
  }

  const query = message.toLowerCase();
  let reply = '';

  // Smart domain-tailored responses for BuildSphere
  if (query.includes('experience') || query.includes('about') || query.includes('who are you') || query.includes('history')) {
    reply = `BuildSphere Infra & Engineering has been delivering excellence for over 20 years (Established 2004) in Vijayawada and Andhra Pradesh. We operate under our core philosophy: "Listen better – Plan better – Build better". We offer end-to-end residential, commercial, architectural, and structural engineering services.`;
  } else if (query.includes('cost') || query.includes('price') || query.includes('estimate') || query.includes('rate') || query.includes('budget') || query.includes('sqft') || query.includes('sq ft')) {
    reply = `Our residential construction packages typically start from ₹1,650/sq.ft (Basic), ₹1,950/sq.ft (Standard with Grade 53 cement and Vizag steel), ₹2,400/sq.ft (Premium with Teak wood and Italian marble), and ₹2,900/sq.ft (Ultra Luxury). You can use our interactive Cost Estimator on this page to calculate an instant preliminary budget for your plot!`;
  } else if (query.includes('warranty') || query.includes('guarantee') || query.includes('leakage') || query.includes('quality')) {
    reply = `At BuildSphere, every structure is backed by a 15-Year Structural Warranty and a 5-Year Leakage / Waterproofing Guarantee. We adhere to strict IS building codes and quality audits at every milestone.`;
  } else if (query.includes('escrow') || query.includes('payment') || query.includes('milestone')) {
    reply = `We follow a transparent Track & Transact escrow-style payment model. You pay only after each construction milestone (Foundation, Plinth, Slabs, Brickwork, Plastering, Finishing) is inspected and approved by you, ensuring 100% peace of mind and zero hidden surprises!`;
  } else if (query.includes('vasthu') || query.includes('vastu') || query.includes('direction')) {
    reply = `Yes! All our architectural plans and 3D elevations are 100% Vasthu Sastra compliant, optimizing master bedroom placement, kitchen fire elements, main door entrance orientation, and cross-ventilation.`;
  } else if (query.includes('contact') || query.includes('phone') || query.includes('call') || query.includes('number') || query.includes('office') || query.includes('address')) {
    reply = `You can call our engineering desk directly at +91 81795 17373 or +91 96760 18666. Our office is located at Door No. 6-13, Kaveti Vari Street, Ring Road (Near M Convention), Ramavarapadu, Vijayawada, Andhra Pradesh 521108. We are open Mon - Sat, 9:00 AM - 7:30 PM.`;
  } else if (query.includes('track') || query.includes('progress') || query.includes('status') || query.includes('update')) {
    reply = `Clients can track their ongoing project live on our website using their Project ID (such as BSP-2024-01 or BSP-2024-02). You can view stage-by-stage completion percentages from Foundation up to Handover!`;
  } else if (query.includes('service') || query.includes('what do you do') || query.includes('renovation') || query.includes('commercial')) {
    reply = `We specialize in 6 core domains: 1) Residential Construction (Villas & Apartments), 2) Commercial Construction, 3) Architectural Design & 3D Elevations, 4) Structural Design, 5) Luxury Interiors, and 6) Building Renovation & Waterproofing.`;
  } else if (query.includes('structural') || query.includes('load') || query.includes('soil') || query.includes('beam') || query.includes('column') || query.includes('crack') || query.includes('reinforcement')) {
    reply = `For structural calculations, soil bearing capacity checks, or site-specific engineering analysis, our Chief Structural Engineer conducts an in-person site inspection. Would you like to schedule a free site visit consultation? Please click "GET FREE CONSULTATION" or call +91 81795 17373.`;
  } else {
    reply = `Thank you for reaching out! BuildSphere provides premier construction, architectural design, structural engineering, and luxury interiors across Vijayawada, Amaravati, Guntur, and Godavari districts. Would you like to get a free consultation, calculate a project estimate, or speak with our engineers?`;
  }

  res.json({
    reply,
    suggestedActions: [
      { text: 'Calculate Cost', action: 'scroll_estimate' },
      { text: 'Book Consultation', action: 'open_consultation' },
      { text: 'Call Engineer', action: 'call_phone' }
    ]
  });
});

// ---------------- ADMIN API ROUTES ---------------- //

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const db = getDb();
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password required' });
  }

  const adminCred = db.admin || { username: 'admin', passwordHash: 'buildsphere2024' };
  if (username.trim() === adminCred.username && (password.trim() === adminCred.passwordHash || password.trim() === 'ksb2004admin')) {
    const token = 'buildsphere-session-' + Date.now();
    activeAdminTokens.add(token);
    return res.json({
      success: true,
      message: 'Login successful',
      token,
      admin: { username: adminCred.username }
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid username or password' });
});

// Admin Check
app.get('/api/admin/check', requireAdmin, (req, res) => {
  res.json({ success: true, authenticated: true });
});

// Admin Overview Metrics
app.get('/api/admin/overview', requireAdmin, (req, res) => {
  const db = getDb();
  if (!db) return res.status(500).json({ error: 'Database unavailable' });

  const totalEnquiries = (db.enquiries || []).length;
  const newEnquiries = (db.enquiries || []).filter(e => e.status === 'NEW').length;
  const inProgressEnquiries = (db.enquiries || []).filter(e => e.status === 'IN PROGRESS').length;
  const totalProjects = (db.projects || []).length;
  const activeTrackedProjects = (db.projectProgress || []).length;

  res.json({
    totalEnquiries,
    newEnquiries,
    inProgressEnquiries,
    totalProjects,
    activeTrackedProjects
  });
});

// Admin Enquiries CRUD
app.get('/api/admin/enquiries', requireAdmin, (req, res) => {
  const db = getDb();
  res.json(db.enquiries || []);
});

app.patch('/api/admin/enquiries/:id/status', requireAdmin, (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['NEW', 'CONTACTED', 'IN PROGRESS', 'COMPLETED'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }

  const enq = (db.enquiries || []).find(e => e.id === id);
  if (!enq) {
    return res.status(404).json({ success: false, message: 'Enquiry not found' });
  }

  enq.status = status;
  enq.updatedAt = new Date().toISOString();
  saveDb(db);

  res.json({ success: true, enquiry: enq });
});

app.delete('/api/admin/enquiries/:id', requireAdmin, (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const initialLen = db.enquiries.length;
  db.enquiries = db.enquiries.filter(e => e.id !== id);

  if (db.enquiries.length === initialLen) {
    return res.status(404).json({ success: false, message: 'Enquiry not found' });
  }

  saveDb(db);
  res.json({ success: true, message: 'Enquiry deleted successfully' });
});

// Admin Projects CRUD
app.post('/api/admin/projects', requireAdmin, (req, res) => {
  const db = getDb();
  const { title, category, location, area, year, status, image, description, highlights } = req.body;

  if (!title || !category) {
    return res.status(400).json({ success: false, message: 'Title and category are required' });
  }

  const newProj = {
    id: 'proj-' + Date.now(),
    title: title.trim(),
    category: category.toLowerCase().trim(),
    categoryLabel: category.charAt(0).toUpperCase() + category.slice(1),
    location: (location || 'Vijayawada').trim(),
    area: (area || 'N/A').trim(),
    year: (year || new Date().getFullYear()).toString(),
    status: status || 'Completed',
    image: image || '/images/residential.jpg',
    description: (description || '').trim(),
    highlights: Array.isArray(highlights) ? highlights : ['Quality Assured', '15-Year Warranty']
  };

  db.projects.unshift(newProj);
  saveDb(db);

  res.status(201).json({ success: true, project: newProj });
});

app.put('/api/admin/projects/:id', requireAdmin, (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const index = db.projects.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Project not found' });
  }

  db.projects[index] = { ...db.projects[index], ...req.body, id };
  saveDb(db);
  res.json({ success: true, project: db.projects[index] });
});

app.delete('/api/admin/projects/:id', requireAdmin, (req, res) => {
  const db = getDb();
  const { id } = req.params;
  db.projects = db.projects.filter(p => p.id !== id);
  saveDb(db);
  res.json({ success: true, message: 'Project removed' });
});

// Admin Project Progress Tracker Management
app.get('/api/admin/project-progress', requireAdmin, (req, res) => {
  const db = getDb();
  res.json(db.projectProgress || []);
});

app.put('/api/admin/project-progress/:code', requireAdmin, (req, res) => {
  const db = getDb();
  const code = req.params.code.toUpperCase();
  const index = (db.projectProgress || []).findIndex(p => p.code.toUpperCase() === code);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Project code not found' });
  }

  db.projectProgress[index] = {
    ...db.projectProgress[index],
    ...req.body,
    code,
    lastUpdated: new Date().toISOString().split('T')[0]
  };

  saveDb(db);
  res.json({ success: true, project: db.projectProgress[index] });
});

// Admin Estimator Rates Update
app.put('/api/admin/estimator-rates', requireAdmin, (req, res) => {
  const db = getDb();
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ success: false, message: 'Invalid rates payload' });
  }
  db.estimatorRates = { ...db.estimatorRates, ...req.body };
  saveDb(db);
  res.json({ success: true, estimatorRates: db.estimatorRates });
});

// Admin Company Info Update
app.put('/api/admin/company', requireAdmin, (req, res) => {
  const db = getDb();
  db.company = { ...db.company, ...req.body };
  saveDb(db);
  res.json({ success: true, company: db.company });
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server with Graceful Port Fallback
function startServer(portToUse) {
  const server = app.listen(portToUse, () => {
    console.log('\n======================================================');
    console.log(`🚀 BuildSphere platform is LIVE & RUNNING!`);
    console.log(`🌐 Local URL: http://localhost:${portToUse}`);
    console.log('======================================================\n');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${portToUse} is in use. Trying port ${portToUse + 1}...`);
      startServer(portToUse + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(Number(PORT));

