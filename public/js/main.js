/**
 * BuildSphere Infra & Engineering
 * Main Application Frontend Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggler
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close on nav click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // 2. Sticky Navbar & Active Link Highlight
  const navbar = document.getElementById('main-navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active Section Link Highlight
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navItem) navItem.classList.add('active');
      } else {
        if (navItem) navItem.classList.remove('active');
      }
    });
  });

  // 3. Project Filtering & Dynamic Rendering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Project Details Modal
  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('project-modal-body');
  const projectModalClose = document.getElementById('project-modal-close');
  const viewProjectBtns = document.querySelectorAll('.btn-view-project');

  const projectDetailsMap = {
    'proj-1': {
      title: 'BuildSphere Royal Villa',
      category: 'Residential Luxury Villa',
      location: 'Poranki, Vijayawada',
      area: '4,200 Sq.Ft',
      year: '2024',
      status: 'Completed',
      image: '/images/residential.jpg',
      description: 'A triplex contemporary luxury villa designed with double-height ceiling living spaces, natural cross-ventilation, energy-efficient glazing, landscaped terrace garden, and customized Teak woodwork.',
      services: ['Architectural Planning', 'Structural Engineering', 'Civil Construction', 'Turnkey Interiors'],
      highlights: ['15-Year Structural Warranty', '100% Vasthu Compliant', 'German Hardware Fittings', 'Rainwater Harvesting']
    },
    'proj-2': {
      title: 'Vertex Corporate Arcade',
      category: 'Commercial Complex',
      location: 'Ramavarapadu Ring Road, Vijayawada',
      area: '18,500 Sq.Ft',
      year: '2024',
      status: 'Ongoing (80% Complete)',
      image: '/images/commercial.jpg',
      description: 'A landmark G+4 commercial complex with modern glass curtain walls, ground-floor retail showrooms, executive corporate floors, and basement parking.',
      services: ['Structural Design', 'Commercial Civil Construction', 'Facade Glazing', 'MEP Engineering'],
      highlights: ['High Load Bearing Capacity', 'Earthquake Resistant IS-1893', 'Escrow Milestone Payments', 'Fire Safety Compliant']
    },
    'proj-3': {
      title: 'Amaravati Lakeview Residences',
      category: 'Residential Development',
      location: 'Tadepalli, Amaravati Capital Region',
      area: '7,800 Sq.Ft',
      year: '2023',
      status: 'Completed',
      image: '/images/hero-bg.jpg',
      description: 'Premium multi-family residential development designed with modern cantilevers, wooden finish louvers, and spacious balconies overlooking scenic greenery.',
      services: ['Complete Architecture', 'Structural Design', 'Turnkey Construction'],
      highlights: ['Seismic Zone III Proofing', 'Rainwater Harvesting', '15-Year Structural Guarantee']
    },
    'proj-4': {
      title: 'Modern Studio Architectural Elevation',
      category: 'Architectural Design',
      location: 'Benz Circle, Vijayawada',
      area: '3,400 Sq.Ft',
      year: '2024',
      status: 'Completed',
      image: '/images/architecture.jpg',
      description: 'A modern architectural study featuring optimized natural daylight penetration, cross-ventilation corridors, and 3D geometric exterior elevation.',
      services: ['2D & 3D Architectural Drawings', 'Elevation Modeling', 'Vasthu Verification'],
      highlights: ['Government Sanction Approved', 'Zero Space Wastage', 'Modern Aesthetic']
    },
    'proj-5': {
      title: 'BuildSphere Multi-Tier Framework',
      category: 'Structural Engineering',
      location: 'Gannavaram Highway, Krishna District',
      area: '12,000 Sq.Ft',
      year: '2024',
      status: 'Ongoing',
      image: '/images/structural.jpg',
      description: 'Heavy industrial and warehouse reinforced concrete framing engineered by BuildSphere Engineering with deep pile foundations and vibration damping.',
      services: ['Soil Investigation Analysis', 'Structural Detailing', 'Quality Audit'],
      highlights: ['Grade Fe-550D TMT Steel', 'NABL Tested Concrete M-30', 'Safety Audited']
    },
    'proj-6': {
      title: 'The Royal Haven Living Hall & Interiors',
      category: 'Interior Design',
      location: 'Mogalrajpuram, Vijayawada',
      area: '2,800 Sq.Ft',
      year: '2024',
      status: 'Completed',
      image: '/images/interior.jpg',
      description: 'Ultra-luxury modern interior makeover featuring Italian Botticino marble flooring, automated cove ceiling lighting, and custom acrylic kitchen cabinetry.',
      services: ['Interior Space Planning', 'Modular Kitchen', 'False Ceiling & Lighting', 'Carpentry'],
      highlights: ['Marine Grade Plywood', 'Hafele Hardware', 'Smart Automation']
    }
  };

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const p = projectDetailsMap[projId] || projectDetailsMap['proj-1'];

      if (projectModalBody) {
        projectModalBody.innerHTML = `
          <div style="margin-bottom:20px; border-radius:12px; overflow:hidden; max-height:360px;">
            <img src="${p.image}" alt="${p.title}" style="width:100%; height:320px; object-fit:cover;">
          </div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; flex-wrap:wrap; gap:10px;">
            <div>
              <span style="color:var(--accent-gold); font-size:0.8rem; font-weight:700; text-transform:uppercase;">${p.category}</span>
              <h3 style="font-size:1.6rem; color:var(--primary-navy); margin-top:4px;">${p.title}</h3>
              <p style="color:var(--text-muted); font-size:0.9rem;"><i class="fa fa-map-marker-alt" style="color:#ef4444;"></i> ${p.location}</p>
            </div>
            <span style="background:rgba(16,185,129,0.15); color:#065f46; font-weight:700; font-size:0.8rem; padding:6px 14px; border-radius:99px;">
              ${p.status}
            </span>
          </div>
          <p style="color:#475569; font-size:0.95rem; line-height:1.6; margin-bottom:20px;">${p.description}</p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">
            <div style="background:#f8fafc; padding:16px; border-radius:8px; border:1px solid #e2e8f0;">
              <h5 style="margin-bottom:8px; color:var(--primary-navy); font-size:0.9rem;">Services Provided</h5>
              <ul style="list-style:none; font-size:0.85rem; color:#475569;">
                ${p.services.map(s => `<li style="margin-bottom:4px;"><i class="fa fa-check" style="color:#10b981; margin-right:6px;"></i>${s}</li>`).join('')}
              </ul>
            </div>
            <div style="background:#f8fafc; padding:16px; border-radius:8px; border:1px solid #e2e8f0;">
              <h5 style="margin-bottom:8px; color:var(--primary-navy); font-size:0.9rem;">Key Engineering Highlights</h5>
              <ul style="list-style:none; font-size:0.85rem; color:#475569;">
                ${p.highlights.map(h => `<li style="margin-bottom:4px;"><i class="fa fa-star" style="color:var(--accent-gold); margin-right:6px;"></i>${h}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div style="text-align:center;">
            <button class="btn btn-primary btn-block" onclick="openConsultationFor('${p.title}')">
              <i class="fa fa-calendar-check"></i> DISCUSS A SIMILAR PROJECT
            </button>
          </div>
        `;
      }

      if (projectModal) projectModal.classList.add('open');
    });
  });

  if (projectModalClose) {
    projectModalClose.addEventListener('click', () => {
      if (projectModal) projectModal.classList.remove('open');
    });
  }

  // 5. Consultation Modal Controls
  const consultationModal = document.getElementById('consultation-modal');
  const consultationClose = document.getElementById('consultation-modal-close');
  const openConsultationBtns = document.querySelectorAll('.open-consultation-btn');

  openConsultationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || 'General Construction';
      openConsultationFor(serviceName);
    });
  });

  window.openConsultationFor = function(serviceOrProject) {
    if (projectModal) projectModal.classList.remove('open');
    const typeSelect = document.getElementById('consult-project-type');
    const msgInput = document.getElementById('consult-message');

    if (typeSelect) {
      if (serviceOrProject.toLowerCase().includes('residential') || serviceOrProject.toLowerCase().includes('villa')) {
        typeSelect.value = 'Residential Construction';
      } else if (serviceOrProject.toLowerCase().includes('commercial')) {
        typeSelect.value = 'Commercial Construction';
      } else if (serviceOrProject.toLowerCase().includes('architect')) {
        typeSelect.value = 'Architectural Design';
      } else if (serviceOrProject.toLowerCase().includes('structural')) {
        typeSelect.value = 'Structural Design';
      } else if (serviceOrProject.toLowerCase().includes('interior')) {
        typeSelect.value = 'Interior Design';
      } else if (serviceOrProject.toLowerCase().includes('renovation')) {
        typeSelect.value = 'Building Renovation';
      }
    }

    if (msgInput && serviceOrProject) {
      msgInput.value = `I would like to discuss requirements regarding: ${serviceOrProject}`;
    }

    if (consultationModal) consultationModal.classList.add('open');
  };

  if (consultationClose) {
    consultationClose.addEventListener('click', () => {
      if (consultationModal) consultationModal.classList.remove('open');
    });
  }

  // Close modals on backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) projectModal.classList.remove('open');
    if (e.target === consultationModal) consultationModal.classList.remove('open');
  });

  // 6. Gallery Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');

  let currentGalleryIndex = 0;
  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.getAttribute('data-src') || (item.querySelector('img') ? item.querySelector('img').src : ''),
    caption: item.getAttribute('data-caption') || (item.querySelector('h5') ? item.querySelector('h5').textContent : '')
  }));

  function showLightbox(index) {
    if (!galleryData.length || index < 0 || index >= galleryData.length) return;
    currentGalleryIndex = index;
    if (lightboxImg) lightboxImg.src = galleryData[currentGalleryIndex].src;
    if (lightboxCaption) lightboxCaption.textContent = galleryData[currentGalleryIndex].caption;
    if (lightboxModal) lightboxModal.classList.add('open');
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => showLightbox(idx));
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      if (lightboxModal) lightboxModal.classList.remove('open');
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
      showLightbox(currentGalleryIndex);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
      showLightbox(currentGalleryIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') lightboxModal.classList.remove('open');
      if (e.key === 'ArrowLeft') lightboxPrev.click();
      if (e.key === 'ArrowRight') lightboxNext.click();
    }
  });

  // 7. Testimonials Carousel
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevTestimonialBtn = document.getElementById('prev-testimonial');
  const nextTestimonialBtn = document.getElementById('next-testimonial');
  let currentTestimonial = 0;

  function showTestimonial(idx) {
    testimonials.forEach((card, i) => {
      card.style.display = i === idx ? 'block' : 'none';
    });
  }

  if (testimonials.length) {
    showTestimonial(currentTestimonial);

    if (prevTestimonialBtn) {
      prevTestimonialBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
      });
    }

    if (nextTestimonialBtn) {
      nextTestimonialBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
      });
    }

    // Auto rotate every 7 seconds
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 7000);
  }

  // 8. Contact & Consultation Form Submissions
  const formsToHandle = [
    { formId: 'main-contact-form', feedbackId: 'contact-form-feedback' },
    { formId: 'consultation-form', feedbackId: 'consultation-form-feedback' }
  ];

  formsToHandle.forEach(({ formId, feedbackId }) => {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...';

      const formData = new FormData(form);
      const payload = {
        name: formData.get('name') || '',
        phone: formData.get('phone') || '',
        email: formData.get('email') || '',
        projectType: formData.get('projectType') || 'General Consultation',
        location: formData.get('location') || '',
        approxArea: formData.get('approxArea') || '',
        message: formData.get('message') || ''
      };

      fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(r => r.json())
        .then(data => {
          if (submitBtn) submitBtn.innerHTML = originalBtnText;
          if (data.success) {
            form.reset();
            if (feedback) {
              feedback.className = 'form-feedback success';
              feedback.textContent = data.message || 'Thank you! Your enquiry has been received. Our team will contact you soon.';
              feedback.style.display = 'block';
              setTimeout(() => { feedback.style.display = 'none'; }, 8000);
            }
          } else {
            if (feedback) {
              feedback.className = 'form-feedback error';
              feedback.textContent = data.message || 'Please check your inputs and try again.';
              feedback.style.display = 'block';
            }
          }
        })
        .catch(() => {
          if (submitBtn) submitBtn.innerHTML = originalBtnText;
          if (feedback) {
            feedback.className = 'form-feedback error';
            feedback.textContent = 'Server temporarily unavailable. Please call us directly at +91 81795 17373.';
            feedback.style.display = 'block';
          }
        });
    });
  });
});
