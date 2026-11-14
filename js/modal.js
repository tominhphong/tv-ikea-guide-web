/**
 * ============================================================================
 * IKEA SVG LIGHTBOX MODAL & PAN-ZOOM CONTROLLER (js/modal.js)
 * Smooth Vector Inspection on Mobile & Desktop Devices
 * ============================================================================
 */

class SvgModalManager {
  constructor() {
    this.modal = document.getElementById('svg-modal');
    this.modalTitle = document.getElementById('modal-title');
    this.modalViewport = document.getElementById('modal-viewport');
    this.closeBtn = document.getElementById('modal-close-btn');
    this.zoomInBtn = document.getElementById('modal-zoom-in');
    this.zoomOutBtn = document.getElementById('modal-zoom-out');
    this.zoomResetBtn = document.getElementById('modal-zoom-reset');
    this.scaleDisplay = document.getElementById('modal-scale-display');

    this.currentScale = 1;
    this.minScale = 0.5;
    this.maxScale = 4.0;
    this.stepScale = 0.25;

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.translateX = 0;
    this.translateY = 0;

    this.initEvents();
  }

  initEvents() {
    if (!this.modal) return;

    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Keyboard ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });

    // Zoom Buttons
    if (this.zoomInBtn) {
      this.zoomInBtn.addEventListener('click', () => this.zoom(this.stepScale));
    }
    if (this.zoomOutBtn) {
      this.zoomOutBtn.addEventListener('click', () => this.zoom(-this.stepScale));
    }
    if (this.zoomResetBtn) {
      this.zoomResetBtn.addEventListener('click', () => this.resetTransform());
    }

    // Mouse Wheel Zoom
    if (this.modalViewport) {
      this.modalViewport.parentElement.addEventListener('wheel', (e) => {
        if (!this.isOpen()) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? this.stepScale : -this.stepScale;
        this.zoom(delta);
      }, { passive: false });

      // Drag Pan Events
      const container = this.modalViewport.parentElement;
      container.addEventListener('mousedown', (e) => {
        if (!this.isOpen()) return;
        this.isDragging = true;
        this.startX = e.clientX - this.translateX;
        this.startY = e.clientY - this.translateY;
        container.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        this.translateX = e.clientX - this.startX;
        this.translateY = e.clientY - this.startY;
        this.applyTransform();
      });

      window.addEventListener('mouseup', () => {
        if (this.isDragging) {
          this.isDragging = false;
          container.style.cursor = 'grab';
        }
      });

      // Mobile Touch Drag & Pinch Support
      let initialPinchDist = null;
      let initialScale = 1;

      container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          this.isDragging = true;
          this.startX = e.touches[0].clientX - this.translateX;
          this.startY = e.touches[0].clientY - this.translateY;
        } else if (e.touches.length === 2) {
          this.isDragging = false;
          initialPinchDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          initialScale = this.currentScale;
        }
      }, { passive: true });

      container.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && this.isDragging) {
          this.translateX = e.touches[0].clientX - this.startX;
          this.translateY = e.touches[0].clientY - this.startY;
          this.applyTransform();
        } else if (e.touches.length === 2 && initialPinchDist) {
          const currentDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const factor = currentDist / initialPinchDist;
          this.currentScale = Math.min(Math.max(initialScale * factor, this.minScale), this.maxScale);
          this.applyTransform();
        }
      }, { passive: true });

      container.addEventListener('touchend', () => {
        this.isDragging = false;
        initialPinchDist = null;
      });
    }
  }

  open(svgHtml, titleText = "IKEA Assembly Diagram") {
    if (!this.modal || !this.modalViewport) return;
    this.modalTitle.textContent = titleText;
    this.modalViewport.innerHTML = svgHtml;
    this.resetTransform();
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.modal && this.modal.classList.contains('open');
  }

  zoom(delta) {
    const nextScale = Math.min(Math.max(this.currentScale + delta, this.minScale), this.maxScale);
    this.currentScale = Math.round(nextScale * 100) / 100;
    this.applyTransform();
  }

  resetTransform() {
    this.currentScale = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.applyTransform();
  }

  applyTransform() {
    if (!this.modalViewport) return;
    this.modalViewport.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.currentScale})`;
    if (this.scaleDisplay) {
      this.scaleDisplay.textContent = `${Math.round(this.currentScale * 100)}%`;
    }
  }
}

// Global instance exposed for app.js
window.svgModal = null;
document.addEventListener('DOMContentLoaded', () => {
  window.svgModal = new SvgModalManager();
});
