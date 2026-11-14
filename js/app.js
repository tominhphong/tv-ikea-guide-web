/**
 * ============================================================================
 * IKEA SMART TV GUIDE INTERACTIVE APPLICATION CONTROLLER (js/app.js)
 * Platform Tab Switcher, Step Progress Tracking, Copy Toast, LocalStorage
 * ============================================================================
 */

class IkeaGuideApp {
  constructor() {
    this.currentPlatform = 'android';
    this.currentStepIndex = 0;
    this.completedSteps = this.loadCompletedSteps();
    this.theme = localStorage.getItem('ikea_theme') || 'light';

    // DOM Elements
    this.tabButtons = document.querySelectorAll('.nav-tab');
    this.platformTitleEl = document.getElementById('platform-title');
    this.platformSubtitleEl = document.getElementById('platform-subtitle');
    this.platformBadgeEl = document.getElementById('platform-badge');
    this.toolsListEl = document.getElementById('tools-list');
    this.stepsTocEl = document.getElementById('steps-toc-list');
    this.stageContainerEl = document.getElementById('booklet-stage-container');
    this.progressBarFill = document.getElementById('progress-bar-fill');
    this.stepperStatusText = document.getElementById('stepper-status-text');
    this.stepPillsContainer = document.getElementById('step-pills-container');
    this.btnPrevStep = document.getElementById('btn-prev-step');
    this.btnNextStep = document.getElementById('btn-next-step');
    this.btnThemeToggle = document.getElementById('btn-theme-toggle');
    this.toastContainer = document.getElementById('toast-container');

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.bindEvents();
    this.handleUrlHash();
    this.renderPlatform(this.currentPlatform);
  }

  bindEvents() {
    // Tab switching clicks
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const platform = e.currentTarget.getAttribute('data-platform');
        if (platform && platform !== this.currentPlatform) {
          window.location.hash = `#${platform}`;
        }
      });
    });

    // Hash change event for browser history & direct links
    window.addEventListener('hashchange', () => this.handleUrlHash());

    // Navigation buttons (Prev / Next)
    if (this.btnPrevStep) {
      this.btnPrevStep.addEventListener('click', () => this.navigateStep(-1));
    }
    if (this.btnNextStep) {
      this.btnNextStep.addEventListener('click', () => this.navigateStep(1));
    }

    // Theme toggle
    if (this.btnThemeToggle) {
      this.btnThemeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Global delegation for copy buttons & zoom frames
    document.addEventListener('click', (e) => {
      // Copy button click
      const copyBtn = e.target.closest('.code-copy-btn');
      if (copyBtn) {
        const textToCopy = copyBtn.getAttribute('data-copy');
        if (textToCopy) {
          this.copyToClipboard(textToCopy, copyBtn);
        }
        return;
      }

      // Step completion toggle
      const compToggle = e.target.closest('.completion-toggle');
      if (compToggle) {
        const stepId = compToggle.getAttribute('data-step-id');
        this.toggleStepCompleted(stepId);
        return;
      }

      // Illustration frame click to zoom
      const frame = e.target.closest('.illustration-frame');
      if (frame && window.svgModal) {
        const svgEl = frame.querySelector('svg');
        const title = frame.getAttribute('data-title') || 'IKEA Assembly Diagram';
        if (svgEl) {
          window.svgModal.open(svgEl.outerHTML, title);
        }
      }
    });
  }

  handleUrlHash() {
    const rawHash = window.location.hash.replace('#', '').trim().toLowerCase();
    const validPlatforms = ['android', 'samsung', 'lg', 'troubleshooting'];
    if (validPlatforms.includes(rawHash)) {
      if (this.currentPlatform !== rawHash) {
        this.currentPlatform = rawHash;
        this.currentStepIndex = 0;
        this.renderPlatform(this.currentPlatform);
      }
    } else {
      window.location.hash = `#${this.currentPlatform}`;
    }
  }

  renderPlatform(platformKey) {
    const data = GUIDE_DATA[platformKey];
    if (!data) return;

    // Update active tab buttons
    this.tabButtons.forEach(btn => {
      if (btn.getAttribute('data-platform') === platformKey) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Update headers
    if (this.platformTitleEl) this.platformTitleEl.textContent = data.title;
    if (this.platformSubtitleEl) this.platformSubtitleEl.textContent = data.subtitle;
    if (this.platformBadgeEl) {
      this.platformBadgeEl.textContent = data.badge;
      this.platformBadgeEl.style.backgroundColor = data.themeColor || 'var(--ikea-blue)';
    }

    // Render Tools Checklist
    this.renderTools(data.tools);

    // Render Steps in main stage
    this.renderSteps(data.steps);

    // Render TOC in sidebar
    this.renderToc(data.steps);

    // Render Stepper Pills & Progress Bar
    this.updateProgress();

    // Scroll to top of stage
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderTools(tools) {
    if (!this.toolsListEl) return;
    this.toolsListEl.innerHTML = (tools || []).map(tool => `
      <li class="tool-item">
        <span class="tool-icon">${tool.icon}</span>
        <span>${this.escapeHtml(tool.name)}</span>
      </li>
    `).join('');
  }

  renderSteps(steps) {
    if (!this.stageContainerEl) return;

    const stepsHtml = (steps || []).map((step, idx) => {
      const isDone = this.isStepCompleted(step.id);
      return `
        <article class="step-card" id="${step.id}" data-index="${idx}">
          <!-- Step Card Header -->
          <div class="step-card-header">
            <div class="step-card-header-left">
              <span class="step-badge ${isDone ? 'completed' : ''}" id="badge-${step.id}">
                ${isDone ? '✓' : step.stepNumber}
              </span>
              <div>
                <h3 class="step-card-title">${this.escapeHtml(step.title)}</h3>
                <span class="manual-model-no">${step.actionGlyph || ''}</span>
              </div>
            </div>
            <button type="button" class="completion-toggle ${isDone ? 'checked' : ''}" data-step-id="${step.id}" aria-label="Đánh dấu đã hoàn thành bước">
              <span class="custom-checkbox">${isDone ? '✓' : ''}</span>
              <span>${isDone ? 'Đã hoàn thành' : 'Đánh dấu xong bước này'}</span>
            </button>
          </div>

          <!-- Step Card Body -->
          <div class="step-card-body">
            <!-- IKEA Illustration Frame -->
            <div class="illustration-frame" data-title="Bước ${step.stepNumber}: ${this.escapeHtml(step.title)}" title="Chạm hoặc bấm để phóng to sơ đồ IKEA">
              ${step.svg || ''}
              <div class="zoom-hint-badge">
                <span>🔍 Phóng to sơ đồ</span>
              </div>
            </div>

            <!-- Instructions & Steps -->
            <div class="step-instructions">
              <p class="step-desc"><strong>Thao tác:</strong> ${this.escapeHtml(step.desc)}</p>

              ${step.details && step.details.length ? `
                <ul class="tools-list" style="padding-left: 0.5rem; gap: 0.5rem;">
                  ${step.details.map(d => `
                    <li style="font-size: 0.925rem; line-height: 1.5; color: var(--ikea-ink);">
                      • ${this.escapeHtml(d)}
                    </li>
                  `).join('')}
                </ul>
              ` : ''}

              <!-- Code Snippet Box with 1-Click Copy -->
              ${step.command ? `
                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-label">📋 LỆNH / MÃ SỐ CHÍNH THỨC</span>
                    <button type="button" class="code-copy-btn" data-copy="${this.escapeHtml(step.command)}">
                      <span>Sao chép</span>
                    </button>
                  </div>
                  <pre class="code-pre"><code>${this.escapeHtml(step.command)}</code></pre>
                </div>
              ` : ''}

              <!-- Warning Callout if present -->
              ${step.warning ? `
                <div class="callout callout-warning">
                  <span class="callout-icon">⚠️</span>
                  <div class="callout-content">
                    <div class="callout-title">LƯU Ý QUAN TRỌNG:</div>
                    <div class="callout-text">${this.escapeHtml(step.warning)}</div>
                  </div>
                </div>
              ` : ''}

              <!-- Tip Callout if present -->
              ${step.tip ? `
                <div class="callout callout-tip">
                  <span class="callout-icon">💡</span>
                  <div class="callout-content">
                    <div class="callout-title">MẸO THAO TÁC IKEA:</div>
                    <div class="callout-text">${this.escapeHtml(step.tip)}</div>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

    this.stageContainerEl.innerHTML = stepsHtml;
  }

  renderToc(steps) {
    if (!this.stepsTocEl) return;
    this.stepsTocEl.innerHTML = (steps || []).map((step, idx) => {
      const isDone = this.isStepCompleted(step.id);
      return `
        <li>
          <a href="#${step.id}" class="toc-item-link ${idx === this.currentStepIndex ? 'active' : ''}" data-step-id="${step.id}" data-index="${idx}">
            <span>${step.stepNumber}. ${this.escapeHtml(step.title.split(':')[0])}</span>
            <span>${isDone ? '✓' : ''}</span>
          </a>
        </li>
      `;
    }).join('');

    // Smooth scroll when clicking TOC links
    this.stepsTocEl.querySelectorAll('.toc-item-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('data-step-id');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  updateProgress() {
    const data = GUIDE_DATA[this.currentPlatform];
    if (!data || !data.steps) return;

    const totalSteps = data.steps.length;
    let completedCount = 0;

    data.steps.forEach(s => {
      if (this.isStepCompleted(s.id)) completedCount++;
    });

    const percent = Math.round((completedCount / totalSteps) * 100);

    // Update Progress Bar
    if (this.progressBarFill) {
      this.progressBarFill.style.width = `${percent}%`;
    }

    // Update Text
    if (this.stepperStatusText) {
      this.stepperStatusText.innerHTML = `
        <span>Tiến trình hoàn thành: <strong>${completedCount} / ${totalSteps} bước (${percent}%)</strong></span>
      `;
    }

    // Render Pills
    if (this.stepPillsContainer) {
      this.stepPillsContainer.innerHTML = data.steps.map((step, idx) => {
        const isDone = this.isStepCompleted(step.id);
        const isActive = idx === this.currentStepIndex;
        return `
          <button type="button" class="step-pill ${isDone ? 'completed' : ''} ${isActive ? 'active' : ''}" data-index="${idx}" data-step-id="${step.id}">
            <span>Bước ${step.stepNumber}</span>
            <span>${isDone ? '✓' : ''}</span>
          </button>
        `;
      }).join('');

      this.stepPillsContainer.querySelectorAll('.step-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          const stepId = e.currentTarget.getAttribute('data-step-id');
          const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
          this.currentStepIndex = idx;
          const targetEl = document.getElementById(stepId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          this.updateProgress();
        });
      });
    }

    // Update Next/Prev Button state
    if (this.btnPrevStep) {
      this.btnPrevStep.disabled = this.currentStepIndex <= 0;
    }
    if (this.btnNextStep) {
      this.btnNextStep.disabled = this.currentStepIndex >= totalSteps - 1;
    }
  }

  navigateStep(delta) {
    const data = GUIDE_DATA[this.currentPlatform];
    if (!data || !data.steps) return;

    const newIndex = Math.min(Math.max(this.currentStepIndex + delta, 0), data.steps.length - 1);
    this.currentStepIndex = newIndex;
    const targetStep = data.steps[newIndex];
    if (targetStep) {
      const targetEl = document.getElementById(targetStep.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    this.updateProgress();
  }

  isStepCompleted(stepId) {
    if (!this.completedSteps || typeof this.completedSteps !== 'object' || Array.isArray(this.completedSteps)) {
      this.completedSteps = {};
    }
    return !!this.completedSteps[stepId];
  }

  toggleStepCompleted(stepId) {
    if (!this.completedSteps || typeof this.completedSteps !== 'object' || Array.isArray(this.completedSteps)) {
      this.completedSteps = {};
    }
    if (this.completedSteps[stepId]) {
      delete this.completedSteps[stepId];
    } else {
      this.completedSteps[stepId] = true;
      this.showToast('✓ Đã đánh dấu hoàn thành bước này!');
    }
    this.saveCompletedSteps();

    // Update DOM card button & badge directly
    const card = document.getElementById(stepId);
    if (card) {
      const btn = card.querySelector('.completion-toggle');
      const badge = card.querySelector('.step-badge');
      const isDone = this.isStepCompleted(stepId);
      const stepNumber = badge.textContent.replace('✓', '').trim() || '1';

      if (btn) {
        btn.classList.toggle('checked', isDone);
        btn.querySelector('span:last-child').textContent = isDone ? 'Đã hoàn thành' : 'Đánh dấu xong bước này';
        btn.querySelector('.custom-checkbox').textContent = isDone ? '✓' : '';
      }
      if (badge) {
        badge.classList.toggle('completed', isDone);
        badge.textContent = isDone ? '✓' : stepNumber;
      }
    }

    this.updateProgress();
  }

  loadCompletedSteps() {
    try {
      const stored = localStorage.getItem('ikea_guide_completed_steps');
      if (!stored) return {};
      const parsed = JSON.parse(stored);
      return (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) ? parsed : {};
    } catch {
      return {};
    }
  }

  saveCompletedSteps(data) {
    try {
      const target = data !== undefined ? data : this.completedSteps;
      const toSave = (target && typeof target === 'object' && !Array.isArray(target)) ? target : {};
      this.completedSteps = toSave;
      localStorage.setItem('ikea_guide_completed_steps', JSON.stringify(toSave));
    } catch (e) {
      console.warn('Failed to save progress to localStorage', e);
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.theme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ikea_theme', theme);
    if (this.btnThemeToggle) {
      this.btnThemeToggle.innerHTML = theme === 'dark' ? '☀️ Chế độ Classic' : '🌙 Chế độ Blueprint CAD';
    }
  }

  copyToClipboard(text, btnElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.handleCopySuccess(btnElement);
      }).catch(() => {
        this.fallbackCopy(text, btnElement);
      });
    } else {
      this.fallbackCopy(text, btnElement);
    }
  }

  fallbackCopy(text, btnElement) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.handleCopySuccess(btnElement);
    } catch (err) {
      this.showToast('Không thể sao chép, vui lòng bôi đen thủ công.');
    }
    document.body.removeChild(textArea);
  }

  handleCopySuccess(btnElement) {
    this.showToast('✓ Đã sao chép vào bộ nhớ tạm!');
    if (btnElement) {
      const originalText = btnElement.innerHTML;
      btnElement.classList.add('copied');
      btnElement.innerHTML = '<span>✓ Đã sao chép</span>';
      setTimeout(() => {
        btnElement.classList.remove('copied');
        btnElement.innerHTML = originalText;
      }, 2000);
    }
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${this.escapeHtml(message)}</span>`;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.ikeaGuideApp = new IkeaGuideApp();
});
