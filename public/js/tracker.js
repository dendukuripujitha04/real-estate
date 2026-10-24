/**
 * BuildSphere - Customer Live Project Progress Tracker
 */

document.addEventListener('DOMContentLoaded', () => {
  const trackerInput = document.getElementById('tracker-input');
  const trackerBtn = document.getElementById('btn-track-project');
  const trackerResultBox = document.getElementById('tracker-result-box');
  const samplePills = document.querySelectorAll('.sample-pill-btn');

  function renderProject(project) {
    if (!trackerResultBox) return;

    let stagesHtml = '';
    (project.stages || []).forEach(stage => {
      let badgeClass = 'badge-pending';
      let cardClass = 'pending';
      if (stage.percent === 100) {
        badgeClass = 'badge-completed';
        cardClass = 'completed';
      } else if (stage.percent > 0) {
        badgeClass = 'badge-inprogress';
        cardClass = 'inprogress';
      }

      stagesHtml += `
        <div class="stage-card ${cardClass}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="stage-status-badge ${badgeClass}">${stage.status || (stage.percent === 100 ? 'Completed' : (stage.percent > 0 ? stage.percent + '% Active' : 'Pending'))}</span>
            <strong style="color:var(--primary-navy); font-size:0.85rem;">${stage.percent}%</strong>
          </div>
          <div class="stage-name">${stage.name}</div>
          <div class="progress-track" style="height:6px; margin-top:8px;">
            <div class="progress-fill" style="width:${stage.percent}%;"></div>
          </div>
        </div>
      `;
    });

    trackerResultBox.innerHTML = `
      <div class="tracker-header-info">
        <div>
          <span style="background:rgba(245,158,11,0.15); color:var(--accent-gold-hover); padding:4px 10px; border-radius:99px; font-size:0.75rem; font-weight:700;">
            PROJECT CODE: ${project.code}
          </span>
          <h3 style="margin-top:8px; font-size:1.6rem; color:var(--primary-navy);">${project.projectTitle}</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-top:4px;">
            <i class="fa fa-map-marker-alt" style="color:#ef4444;"></i> ${project.location} &nbsp;|&nbsp; 
            <i class="fa fa-home" style="color:var(--primary-blue);"></i> ${project.type} (${project.totalSqFt})
          </p>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.8rem; color:var(--text-muted);">CLIENT RECORD</div>
          <div style="font-size:1.1rem; font-weight:700; color:var(--primary-navy);">${project.clientName}</div>
          <div style="font-size:0.75rem; color:#64748b; margin-top:2px;">Audited: ${project.lastUpdated || 'Recent'}</div>
        </div>
      </div>

      <div class="overall-progress-bar-wrapper">
        <div class="progress-label-row">
          <span>Overall Construction Milestone Completion</span>
          <span style="color:var(--accent-gold); font-size:1.3rem;">${project.overallProgress}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${project.overallProgress}%;"></div>
        </div>
      </div>

      <h4 style="margin-bottom:16px; font-size:1.1rem; color:var(--primary-navy);">Milestone Execution Breakdown</h4>
      <div class="tracker-stages-grid">
        ${stagesHtml}
      </div>

      <div style="margin-top:24px; padding:14px; background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <span style="font-size:0.85rem; color:var(--text-muted);">
          <i class="fa fa-shield-alt" style="color:#10b981;"></i> 15-Year Structural Warranty &amp; 5-Year Leakage Guarantee Active
        </span>
        <button class="btn btn-sm btn-outline-gold" onclick="alert('Progress audit report for ' + '${project.code}' + ' is officially verified by BuildSphere Engineering.')">
          <i class="fa fa-file-pdf"></i> View Inspection Certificate
        </button>
      </div>
    `;
    trackerResultBox.style.display = 'block';
  }

  function fetchProject(code) {
    if (!code || !code.trim()) {
      alert('Please enter a valid Project Code (e.g. BSP-2024-01)');
      return;
    }

    if (trackerBtn) {
      trackerBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Tracking...';
    }

    fetch(`/api/project-progress/${encodeURIComponent(code.trim())}`)
      .then(res => res.json())
      .then(data => {
        if (trackerBtn) trackerBtn.innerHTML = '<i class="fa fa-search"></i> Track Status';
        if (data.success && data.project) {
          renderProject(data.project);
        } else {
          if (trackerResultBox) {
            trackerResultBox.innerHTML = `
              <div style="text-align:center; padding:30px; color:#ef4444;">
                <i class="fa fa-exclamation-circle" style="font-size:2rem; margin-bottom:10px;"></i>
                <h4>${data.message || 'Project code not found.'}</h4>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-top:6px;">Try demo tracking codes: BSP-2024-01, BSP-2024-02, or BSP-2024-03</p>
              </div>
            `;
            trackerResultBox.style.display = 'block';
          }
        }
      })
      .catch(err => {
        if (trackerBtn) trackerBtn.innerHTML = '<i class="fa fa-search"></i> Track Status';
        console.error(err);
      });
  }

  if (trackerBtn) {
    trackerBtn.addEventListener('click', () => {
      if (trackerInput) fetchProject(trackerInput.value);
    });
  }

  if (trackerInput) {
    trackerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        fetchProject(trackerInput.value);
      }
    });
  }

  samplePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.getAttribute('data-code');
      if (trackerInput) trackerInput.value = code;
      fetchProject(code);
    });
  });

  // Load default demo project
  fetchProject('BSP-2024-01');
});
