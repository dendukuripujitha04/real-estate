/**
 * BuildSphere - Secure Admin Dashboard Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const adminModal = document.getElementById('admin-modal');
  const adminOpenTrigger = document.getElementById('admin-portal-trigger');
  const adminCloseBtn = document.getElementById('admin-close-btn');

  const loginView = document.getElementById('admin-login-view');
  const dashboardView = document.getElementById('admin-dashboard-view');
  const loginForm = document.getElementById('admin-login-form');
  const loginFeedback = document.getElementById('admin-login-feedback');
  const logoutBtn = document.getElementById('admin-logout-btn');

  const tabButtons = document.querySelectorAll('.admin-tab-btn');
  const tabPanes = document.querySelectorAll('.admin-tab-pane');

  let adminToken = localStorage.getItem('buildsphere_admin_token') || localStorage.getItem('ksb_admin_token') || '';

  function checkAdminSession() {
    if (!adminToken) {
      showLogin();
      return;
    }
    fetch('/api/admin/check', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    })
      .then(r => r.json())
      .then(data => {
        if (data.authenticated) {
          showDashboard();
          loadDashboardData();
        } else {
          showLogin();
        }
      })
      .catch(() => showLogin());
  }

  function showLogin() {
    if (loginView) loginView.style.display = 'block';
    if (dashboardView) dashboardView.style.display = 'none';
  }

  function showDashboard() {
    if (loginView) loginView.style.display = 'none';
    if (dashboardView) dashboardView.style.display = 'block';
  }

  if (adminOpenTrigger) {
    adminOpenTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (adminModal) {
        adminModal.classList.add('open');
        checkAdminSession();
      }
    });
  }

  if (adminCloseBtn) {
    adminCloseBtn.addEventListener('click', () => {
      if (adminModal) adminModal.classList.remove('open');
    });
  }

  // Login handler
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('admin-user').value;
      const password = document.getElementById('admin-pass').value;

      fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
        .then(r => r.json())
        .then(data => {
          if (data.success && data.token) {
            adminToken = data.token;
            localStorage.setItem('buildsphere_admin_token', adminToken);
            showDashboard();
            loadDashboardData();
          } else {
            if (loginFeedback) {
              loginFeedback.textContent = data.message || 'Invalid credentials';
              loginFeedback.style.display = 'block';
            }
          }
        })
        .catch(err => console.error(err));
    });
  }

  // Logout handler
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      adminToken = '';
      localStorage.removeItem('buildsphere_admin_token');
      localStorage.removeItem('ksb_admin_token');
      showLogin();
    });
  }

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.style.display = 'none');
      btn.classList.add('active');
      const targetPane = document.getElementById(btn.getAttribute('data-tab'));
      if (targetPane) targetPane.style.display = 'block';
    });
  });

  // Load Dashboard Data
  function loadDashboardData() {
    // 1. Overview Metrics
    fetch('/api/admin/overview', { headers: { 'Authorization': `Bearer ${adminToken}` } })
      .then(r => r.json())
      .then(data => {
        document.getElementById('metric-total-enq').textContent = data.totalEnquiries || 0;
        document.getElementById('metric-new-enq').textContent = data.newEnquiries || 0;
        document.getElementById('metric-inprog-enq').textContent = data.inProgressEnquiries || 0;
        document.getElementById('metric-projects').textContent = data.totalProjects || 0;
      });

    // 2. Enquiries List
    loadEnquiriesTable();

    // 3. Estimator Rates
    loadRatesSettings();
  }

  function loadEnquiriesTable() {
    const tableBody = document.getElementById('admin-enquiries-tbody');
    if (!tableBody) return;

    fetch('/api/admin/enquiries', { headers: { 'Authorization': `Bearer ${adminToken}` } })
      .then(r => r.json())
      .then(enquiries => {
        if (!enquiries.length) {
          tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px;">No enquiries yet.</td></tr>';
          return;
        }

        tableBody.innerHTML = enquiries.map(e => `
          <tr>
            <td><strong>${e.name}</strong><br><small style="color:#64748b;">${new Date(e.createdAt).toLocaleDateString()}</small></td>
            <td><a href="tel:${e.phone}" style="color:var(--primary-blue); font-weight:600;">${e.phone}</a><br><small>${e.email || 'N/A'}</small></td>
            <td>${e.projectType}<br><small style="color:#64748b;">${e.location} (${e.approxArea || 'N/A'})</small></td>
            <td style="max-width:200px; font-size:0.8rem; color:#475569;">${e.message || 'Consultation enquiry'}</td>
            <td>
              <select onchange="updateEnquiryStatus('${e.id}', this.value)" style="padding:4px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">
                <option value="NEW" ${e.status === 'NEW' ? 'selected' : ''}>NEW</option>
                <option value="CONTACTED" ${e.status === 'CONTACTED' ? 'selected' : ''}>CONTACTED</option>
                <option value="IN PROGRESS" ${e.status === 'IN PROGRESS' ? 'selected' : ''}>IN PROGRESS</option>
                <option value="COMPLETED" ${e.status === 'COMPLETED' ? 'selected' : ''}>COMPLETED</option>
              </select>
            </td>
            <td>
              <button onclick="deleteEnquiry('${e.id}')" style="background:#ef4444; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        `).join('');
      });
  }

  window.updateEnquiryStatus = function(id, status) {
    fetch(`/api/admin/enquiries/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify({ status })
    })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          loadDashboardData();
        }
      });
  };

  window.deleteEnquiry = function(id) {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    fetch(`/api/admin/enquiries/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${adminToken}` }
    })
      .then(r => r.json())
      .then(() => loadEnquiriesTable());
  };

  function loadRatesSettings() {
    fetch('/api/estimator-rates')
      .then(r => r.json())
      .then(rates => {
        if (!rates) return;
        const resBasic = document.getElementById('rate-res-basic');
        const resStd = document.getElementById('rate-res-standard');
        const resPrem = document.getElementById('rate-res-premium');
        const comStd = document.getElementById('rate-com-standard');
        const renStd = document.getElementById('rate-ren-standard');

        if (resBasic && rates.residential.basic) resBasic.value = rates.residential.basic.rate;
        if (resStd && rates.residential.standard) resStd.value = rates.residential.standard.rate;
        if (resPrem && rates.residential.premium) resPrem.value = rates.residential.premium.rate;
        if (comStd && rates.commercial.standard) comStd.value = rates.commercial.standard.rate;
        if (renStd && rates.renovation.standard) renStd.value = rates.renovation.standard.rate;
      });
  }

  const saveRatesBtn = document.getElementById('btn-save-rates');
  if (saveRatesBtn) {
    saveRatesBtn.addEventListener('click', () => {
      const updatedRates = {
        residential: {
          basic: { rate: parseInt(document.getElementById('rate-res-basic').value) },
          standard: { rate: parseInt(document.getElementById('rate-res-standard').value) },
          premium: { rate: parseInt(document.getElementById('rate-res-premium').value) }
        },
        commercial: {
          standard: { rate: parseInt(document.getElementById('rate-com-standard').value) }
        },
        renovation: {
          standard: { rate: parseInt(document.getElementById('rate-ren-standard').value) }
        }
      };

      fetch('/api/admin/estimator-rates', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(updatedRates)
      })
        .then(r => r.json())
        .then(data => {
          if (data.success) {
            alert('BuildSphere estimator rates updated successfully! Changes are live on the customer calculator.');
          }
        });
    });
  }
});
