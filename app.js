// ==========================================================
// PORTFOLIO OM — INTERACTIVE LOGIC & VIDEO CONTROLLER
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderAllSections();
  initCinemaModal();
  initContactForm();
  initScrollAnimations();
});

// 1. NAVIGATION BEHAVIOR
function initNavbar() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link highlighting
    let currentId = '';
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// 2. RENDER WORK SECTIONS
function renderAllSections() {
  renderContentsSection();
  renderMusicVideosSection();
  renderAiFashionSection();
  renderAiVisualMotionSection();
  renderAiCommercialSection();
  renderVisualStorytellingSection();
  initVideoHoverPreviews();
}

// Helper to create video card HTML
function createVideoCardHTML(item, isVertical = true, isLoop = false) {
  const orientationClass = isVertical ? 'vertical' : 'horizontal';
  const tagsHTML = (item.tags || []).map(t => `<span class="card-tag">${t}</span>`).join('');
  const loopBadgeHTML = isLoop ? `<span class="badge-loop"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg> Loop</span>` : '';

  return `
    <div class="video-card ${orientationClass}" data-id="${item.id}" data-video="${item.videoSrc}" data-title="${item.title}" data-tags='${JSON.stringify(item.tags || [])}'>
      <div class="video-media-wrapper">
        <img class="video-poster" src="${item.poster}" alt="${item.title}" loading="lazy" />
        <video class="preview-video" muted playsinline loop preload="none">
          <source src="${item.videoSrc}" type="${item.videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'}">
        </video>
        <div class="media-overlay"></div>
        
        <div class="card-top-badges">
          <span class="badge-pill">${item.aspect || (isVertical ? '9:16' : '16:9')}</span>
          ${loopBadgeHTML}
        </div>

        <div class="play-btn-circle" title="Play Full Video">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>

        <div class="card-details">
          <h4 class="card-title">${item.title}</h4>
          ${item.subtitle ? `<p style="font-size:0.8rem; color:#a0b8d8; margin-bottom:6px;">${item.subtitle}</p>` : ''}
          <div class="card-tags">${tagsHTML}</div>
        </div>
      </div>
    </div>
  `;
}

// Section 1: Contents (Reels) with subcategory filter tabs
function renderContentsSection() {
  const container = document.getElementById('contents-grid-container');
  const tabsContainer = document.getElementById('contents-filter-tabs');
  if (!container || !PORTFOLIO_DATA.contents) return;

  const data = PORTFOLIO_DATA.contents;
  
  // Render filter tabs
  const subcats = [
    { key: 'all', label: 'All Content' },
    { key: 'creators', label: 'Creator Spotlight' },
    { key: 'gym', label: 'Fitness & Gym' },
    { key: 'store', label: 'Store & Retail' },
    { key: 'other', label: 'Special Cuts' }
  ];

  tabsContainer.innerHTML = subcats.map(cat => `
    <button class="filter-btn ${cat.key === 'all' ? 'active' : ''}" data-filter="${cat.key}">
      ${cat.label}
    </button>
  `).join('');

  // Function to render items based on filter
  function filterItems(filterKey) {
    const filtered = filterKey === 'all' 
      ? data.items 
      : data.items.filter(item => item.subcategory === filterKey);

    container.innerHTML = filtered.map(item => createVideoCardHTML(item, true, false)).join('');
    initVideoHoverPreviews();
  }

  filterItems('all');

  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    tabsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterItems(btn.dataset.filter);
  });
}

// Section 2: Music Videos (16:9 Cinematic)
function renderMusicVideosSection() {
  const gridContainer = document.getElementById('music-videos-grid');
  const centerContainer = document.getElementById('music-videos-center');
  if (!gridContainer || !PORTFOLIO_DATA.musicVideos) return;

  const items = PORTFOLIO_DATA.musicVideos.items;
  // First 2 in grid
  const firstTwo = items.slice(0, 2);
  gridContainer.innerHTML = firstTwo.map(item => createVideoCardHTML(item, false, false)).join('');

  // 3rd item centered as in notebook drawing
  if (items[2] && centerContainer) {
    centerContainer.innerHTML = createVideoCardHTML(items[2], false, false);
  }
}

// Section 3: AI Fashion (9:16 Vertical on loop)
function renderAiFashionSection() {
  const container = document.getElementById('ai-fashion-grid');
  if (!container || !PORTFOLIO_DATA.aiFashion) return;

  container.innerHTML = PORTFOLIO_DATA.aiFashion.items.map(item => 
    createVideoCardHTML(item, true, true)
  ).join('');
}

// Section 4: AI Visual & Motion (16:9 Landscape on loop, 2x2 grid)
function renderAiVisualMotionSection() {
  const container = document.getElementById('ai-visual-motion-grid');
  if (!container || !PORTFOLIO_DATA.aiVisualMotion) return;

  container.innerHTML = PORTFOLIO_DATA.aiVisualMotion.items.map(item => 
    createVideoCardHTML(item, false, true)
  ).join('');
}

// Section 5: AI Product Commercial (9:16 Vertical)
function renderAiCommercialSection() {
  const container = document.getElementById('ai-commercial-grid');
  if (!container || !PORTFOLIO_DATA.aiCommercial) return;

  container.innerHTML = PORTFOLIO_DATA.aiCommercial.items.map(item => 
    createVideoCardHTML(item, true, false)
  ).join('');
}

// Section 6: Visual Storytelling (9:16 Vertical narrative shorts)
function renderVisualStorytellingSection() {
  const container = document.getElementById('visual-storytelling-grid');
  if (!container || !PORTFOLIO_DATA.visualStorytelling) return;

  container.innerHTML = PORTFOLIO_DATA.visualStorytelling.items.map(item => 
    createVideoCardHTML(item, true, false)
  ).join('');
}

// 3. HOVER VIDEO PREVIEWS
function initVideoHoverPreviews() {
  const cards = document.querySelectorAll('.video-card');

  cards.forEach(card => {
    const video = card.querySelector('.preview-video');
    if (!video) return;

    let hoverTimeout = null;

    card.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              video.classList.add('is-playing');
            })
            .catch(() => {
              // Auto-play was prevented or video not ready
            });
        }
      }, 150);
    });

    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      video.pause();
      video.classList.remove('is-playing');
      video.currentTime = 0;
    });

    // Click opens full cinema player
    card.addEventListener('click', () => {
      const src = card.dataset.video;
      const title = card.dataset.title;
      const tags = JSON.parse(card.dataset.tags || '[]');
      openCinemaModal(src, title, tags);
    });
  });
}

// 4. CINEMA LIGHTBOX MODAL
let modalVideoElement = null;
let modalContainer = null;
let modalPlayPauseBtn = null;
let modalTimeDisplay = null;
let modalProgress = null;
let modalVolumeBtn = null;
let modalLoopBtn = null;

function initCinemaModal() {
  modalContainer = document.getElementById('cinema-modal');
  modalVideoElement = document.getElementById('modal-video');
  modalPlayPauseBtn = document.getElementById('modal-play-pause');
  modalTimeDisplay = document.getElementById('modal-time');
  modalProgress = document.getElementById('modal-progress');
  modalVolumeBtn = document.getElementById('modal-volume');
  modalLoopBtn = document.getElementById('modal-loop');

  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalContainer || !modalVideoElement) return;

  // Close modal events
  closeBtn.addEventListener('click', closeCinemaModal);
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      closeCinemaModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('open')) {
      closeCinemaModal();
    }
  });

  // Controls
  if (modalPlayPauseBtn) {
    modalPlayPauseBtn.addEventListener('click', toggleModalPlay);
  }

  if (modalVideoElement) {
    modalVideoElement.addEventListener('click', toggleModalPlay);
    modalVideoElement.addEventListener('timeupdate', updateModalProgress);
    modalVideoElement.addEventListener('ended', () => {
      if (!modalVideoElement.loop) {
        updatePlayPauseIcon(false);
      }
    });
  }

  if (modalProgress) {
    modalProgress.addEventListener('input', (e) => {
      const pct = e.target.value;
      if (modalVideoElement.duration) {
        modalVideoElement.currentTime = (pct / 100) * modalVideoElement.duration;
      }
    });
  }

  if (modalVolumeBtn) {
    modalVolumeBtn.addEventListener('click', () => {
      modalVideoElement.muted = !modalVideoElement.muted;
      updateVolumeIcon(modalVideoElement.muted);
    });
  }

  if (modalLoopBtn) {
    modalLoopBtn.addEventListener('click', () => {
      modalVideoElement.loop = !modalVideoElement.loop;
      modalLoopBtn.style.color = modalVideoElement.loop ? 'var(--cyan-primary)' : '#fff';
      showToast(modalVideoElement.loop ? 'Loop enabled' : 'Loop disabled');
    });
  }

  const fullscreenBtn = document.getElementById('modal-fullscreen');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        modalVideoElement.requestFullscreen().catch(err => console.log(err));
      } else {
        document.exitFullscreen();
      }
    });
  }
}

function openCinemaModal(src, title, tags) {
  if (!modalContainer || !modalVideoElement) return;

  document.getElementById('modal-title-text').textContent = title;
  document.getElementById('modal-category-text').textContent = tags.join(' • ');

  modalVideoElement.src = src;
  modalVideoElement.load();
  modalContainer.classList.add('open');
  document.body.style.overflow = 'hidden';

  const playPromise = modalVideoElement.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => updatePlayPauseIcon(true))
      .catch(() => updatePlayPauseIcon(false));
  }
}

function closeCinemaModal() {
  if (!modalContainer || !modalVideoElement) return;
  modalVideoElement.pause();
  modalVideoElement.src = '';
  modalContainer.classList.remove('open');
  document.body.style.overflow = '';
}

function toggleModalPlay() {
  if (modalVideoElement.paused) {
    modalVideoElement.play();
    updatePlayPauseIcon(true);
  } else {
    modalVideoElement.pause();
    updatePlayPauseIcon(false);
  }
}

function updatePlayPauseIcon(isPlaying) {
  if (!modalPlayPauseBtn) return;
  modalPlayPauseBtn.innerHTML = isPlaying
    ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
    : `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
}

function updateVolumeIcon(isMuted) {
  if (!modalVolumeBtn) return;
  modalVolumeBtn.innerHTML = isMuted
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
}

function updateModalProgress() {
  if (!modalVideoElement || !modalProgress) return;
  const curr = modalVideoElement.currentTime;
  const dur = modalVideoElement.duration || 0;
  if (dur > 0) {
    modalProgress.value = (curr / dur) * 100;
  }
  if (modalTimeDisplay) {
    modalTimeDisplay.textContent = `${formatTime(curr)} / ${formatTime(dur)}`;
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// 5. CONTACT FORM & INTERACTION
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('client-name').value;
      showToast(`Thank you, ${name}! Your inquiry has been sent.`);
      form.reset();
    });
  }

  // Copy email button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('om.visuals@gmail.com').then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('om.visuals@gmail.com');
      });
    });
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// 6. SCROLL ANIMATIONS
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.video-card, .service-card, .tool-card, .about-visual-card').forEach(el => {
    observer.observe(el);
  });
}
