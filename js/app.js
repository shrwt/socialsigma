/*
   Social Sigma Homepage Controller
   Core Animations, Observers, and Sliders Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  // Check if we are on the homepage or portfolio page
  const isHomepage = document.getElementById('hero') !== null;
  const isPortfolioPage = document.getElementById('showcase-mount') !== null;

  if (isHomepage) {
    initIntroLoader();
    renderCapabilities();
    renderSpecializedServices();
    renderPortfolio();
    renderTestimonials();
    initSliders();
    initMouseParallax();
  }
  
  if (isPortfolioPage) {
    renderShowcase();
    initShowcaseInteractions();
  }

  initHeader();
  initIntersectionObservers();
  initLightbox();
  initFormHandler();
});

/* ==========================================================================
   1. INTRO LOADER: SKYROCKET TAKEOFF
   ========================================================================== */
function initIntroLoader() {
  const loader = document.getElementById('rocket-loader');
  const progressFill = document.getElementById('loader-progress');
  const rocket = document.getElementById('rocket-wrapper');
  const subtitle = loader.querySelector('.loader-subtitle');
  
  if (!loader) return;
  
  // 1. Start progress fill
  setTimeout(() => {
    progressFill.style.width = '100%';
  }, 100);
  
  // 2. Smoke particles interval during loading
  const smokeInterval = setInterval(() => {
    createSmokeParticle();
  }, 100);

  // 3. Simulated progress text sequence
  setTimeout(() => { subtitle.textContent = 'Checking Ad Metrics...'; }, 600);
  setTimeout(() => { subtitle.textContent = 'Calibrating SEO Funnels...'; }, 1200);
  setTimeout(() => { subtitle.textContent = 'Injecting Creative Assets...'; }, 1800);
  setTimeout(() => { subtitle.textContent = '3... 2... 1... Launch!'; }, 2400);

  // 4. Progress complete -> Ignite engine
  setTimeout(() => {
    clearInterval(smokeInterval);
    rocket.classList.add('ignite');
    subtitle.textContent = 'IGNITING BRAND BOOST ENGINE...';
    
    // Create dense fire/smoke particles
    const fireInterval = setInterval(() => {
      createFireParticle();
    }, 40);
    
    // 5. Takeoff launch fly away
    setTimeout(() => {
      clearInterval(fireInterval);
      rocket.classList.add('takeoff');
      subtitle.textContent = 'BOOSTING BRAND!';
      
      // 6. Fade out screen loader
      setTimeout(() => {
        loader.classList.add('fade-out');
        // Let hero graph animate
        animateHeroGraph();
      }, 700);
    }, 900);
  }, 2700);
}

function createSmokeParticle() {
  const rocket = document.getElementById('rocket-wrapper');
  if (!rocket) return;
  const p = document.createElement('div');
  p.className = 'smoke-particle';
  
  // Random size
  const size = Math.random() * 25 + 15;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  
  // Position near nozzle
  p.style.left = `${45 + (Math.random() * 30 - 15)}px`;
  p.style.bottom = `${30 + (Math.random() * 10 - 5)}px`;
  
  rocket.appendChild(p);
  setTimeout(() => p.remove(), 1500);
}

function createFireParticle() {
  const rocket = document.getElementById('rocket-wrapper');
  if (!rocket) return;
  const p = document.createElement('div');
  p.className = 'smoke-particle';
  p.style.background = `radial-gradient(circle, ${Math.random() > 0.5 ? '#c1ff72' : '#1877F2'} 0%, transparent 70%)`;
  p.style.filter = 'blur(3px)';
  
  const size = Math.random() * 20 + 10;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${50 + (Math.random() * 20 - 10)}px`;
  p.style.bottom = `${20 + (Math.random() * 5)}px`;
  
  rocket.appendChild(p);
  setTimeout(() => p.remove(), 1200);
}

function animateHeroGraph() {
  const graph = document.getElementById('mockup-graph');
  if (!graph) return;
  const bars = graph.querySelectorAll('.graph-bar');
  const finalHeights = [45, 60, 52, 75, 88, 92, 98];
  
  bars.forEach((bar, idx) => {
    setTimeout(() => {
      bar.classList.add('filled');
      bar.style.height = `${finalHeights[idx]}%`;
    }, idx * 120);
  });
}

/* ==========================================================================
   2. HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');
  const links = menu.querySelectorAll('.nav-link');
  
  // Toggle scrolled background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile navigation drawer toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Toggle menu icon shape
    const icon = toggle.querySelector('i');
    if (menu.classList.contains('active')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });
  
  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      toggle.querySelector('i').className = 'fas fa-bars';
      
      // Update active state
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ==========================================================================
   3. DATA RENDERING
   ========================================================================== */
function renderCapabilities() {
  const mount = document.getElementById('capabilities-mount');
  if (!mount || !window.capabilitiesData) return;
  
  mount.innerHTML = window.capabilitiesData.map(c => {
    const tagsHtml = c.items.map(tag => `<span class="capability-tag">${tag}</span>`).join('');
    
    return `
      <div class="capability-row reveal-item">
        <div class="capability-num">${c.id}</div>
        <div class="capability-title">${c.title}</div>
        <div class="capability-summary">
          <p class="capability-desc">${c.description}</p>
          <div class="capability-tags">${tagsHtml}</div>
        </div>
        
        <!-- Video Preview Hover -->
        <div class="capability-preview-video">
          <video loop muted autoplay playsinline>
            <source src="${c.video}" type="video/mp4">
          </video>
        </div>
        
        <div class="capability-cta">
          <span class="btn-arrow-glow"><i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    `;
  }).join('');
}

function renderSpecializedServices() {
  const mount = document.getElementById('specialized-mount');
  if (!mount || !window.specializedServicesData) return;
  
  mount.innerHTML = window.specializedServicesData.map((s, idx) => `
    <div class="special-card reveal-item reveal-delay-${idx % 3 + 1}">
      <div class="special-icon-wrap">
        <i class="fas ${s.icon}"></i>
      </div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
    </div>
  `).join('');
}

function renderPortfolio() {
  const mount = document.getElementById('portfolio-mount');
  if (!mount || !window.portfolioData) return;
  
  mount.innerHTML = window.portfolioData.map(p => `
    <div class="portfolio-card" data-id="${p.id}">
      <div class="portfolio-img-wrap">
        <img src="${p.cover}" alt="${p.title}" loading="lazy">
        <div class="portfolio-img-overlay">
          <div class="btn-view-gallery"><i class="fas fa-search-plus"></i></div>
        </div>
      </div>
      <div class="portfolio-info">
        <div>
          <h3>${p.title}</h3>
          <p>${p.subtitle}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const mount = document.getElementById('testimonials-mount');
  if (!mount || !window.testimonialsData) return;
  
  mount.innerHTML = window.testimonialsData.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-client">
        <div class="client-avatar">
          <img src="${t.avatar}" alt="${t.name}" loading="lazy">
        </div>
        <div class="client-info">
          <h4>${t.name}</h4>
          <p>${t.title}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. INTERSECTION OBSERVERS: REVEALS & STATS COUNT-UP
   ========================================================================== */
function initIntersectionObservers() {
  // 1. Scroll reveals
  const revealItems = document.querySelectorAll('.reveal-item');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  revealItems.forEach(item => revealObserver.observe(item));

  // 2. Stats Section Counters Count-Up
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        startCounters();
        observer.unobserve(statsSection);
      }
    }, { threshold: 0.2 });
    
    counterObserver.observe(statsSection);
  }
}

function startCounters() {
  const counters = [
    { id: 'count-clients', target: 8, suffix: '+' },
    { id: 'count-comments', target: 7, suffix: 'K+' },
    { id: 'count-lift', target: 320, suffix: '%' }
  ];

  counters.forEach(c => {
    const el = document.getElementById(c.id);
    if (!el) return;
    
    let count = 0;
    const target = c.target;
    const duration = 1800; // Total count duration
    const intervalTime = 15;
    const steps = duration / intervalTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        el.textContent = `${target}${c.suffix}`;
        clearInterval(timer);
      } else {
        el.textContent = `${Math.floor(count)}${c.suffix}`;
      }
    }, intervalTime);
  });
}

/* ==========================================================================
   5. SLIDERS: PORTFOLIO & TESTIMONIALS
   ========================================================================== */
function initSliders() {
  // Slider generic helper constructor
  function makeSlider(trackId, prevBtnId, nextBtnId, dotsContainerId, cardSelector) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsContainerId);
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIdx = 0;
    
    function getCardsPerView() {
      if (window.innerWidth > 1024) return trackId === 'testimonials-mount' ? 2 : 3;
      if (window.innerWidth > 768) return 2;
      return 1;
    }
    
    function updateSlider() {
      const cards = track.querySelectorAll(cardSelector);
      const cardsCount = cards.length;
      const cardsPerView = getCardsPerView();
      const maxIdx = Math.max(0, cardsCount - cardsPerView);
      
      if (currentIdx > maxIdx) currentIdx = maxIdx;
      
      const cardWidth = cards[0] ? cards[0].offsetWidth : 0;
      const gap = 32; // Matches gap (2rem) in style.css
      const offset = currentIdx * (cardWidth + gap);
      
      track.style.transform = `translateX(-${offset}px)`;
      
      // Update active dots
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIdx);
      });
    }
    
    // Create dots indicator
    function createDots() {
      dotsContainer.innerHTML = '';
      const cards = track.querySelectorAll(cardSelector);
      const cardsCount = cards.length;
      const cardsPerView = getCardsPerView();
      const dotCount = Math.max(1, cardsCount - cardsPerView + 1);
      
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          currentIdx = i;
          updateSlider();
        });
        dotsContainer.appendChild(dot);
      }
    }

    prevBtn.addEventListener('click', () => {
      if (currentIdx > 0) {
        currentIdx--;
        updateSlider();
      }
    });

    nextBtn.addEventListener('click', () => {
      const cards = track.querySelectorAll(cardSelector);
      const cardsPerView = getCardsPerView();
      if (currentIdx < cards.length - cardsPerView) {
        currentIdx++;
        updateSlider();
      }
    });

    window.addEventListener('resize', () => {
      createDots();
      updateSlider();
    });
    
    // Initialize initial view after rendering is complete
    setTimeout(() => {
      createDots();
      updateSlider();
    }, 100);
  }

  // 1. Initialize Portfolio Carousel
  makeSlider(
    'portfolio-mount', 
    'btn-portfolio-prev', 
    'btn-portfolio-next', 
    'portfolio-dots', 
    '.portfolio-card'
  );

  // 2. Initialize Testimonials Carousel
  makeSlider(
    'testimonials-mount', 
    'btn-test-prev', 
    'btn-test-next', 
    'test-dots', 
    '.testimonial-card'
  );
}

/* ==========================================================================
   6. PORTFOLIO GALLERY LIGHTBOX
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('btn-lightbox-close');
  const prevBtn = document.getElementById('btn-lightbox-prev');
  const nextBtn = document.getElementById('btn-lightbox-next');
  const slider = modal.querySelector('.lightbox-slider');
  const thumbsContainer = document.getElementById('lightbox-thumbs');
  
  let currentProjImages = [];
  let currentImgIdx = 0;

  // Mount click triggers for portfolio card clicks
  document.getElementById('portfolio-mount').addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (!card) return;
    
    const projId = card.getAttribute('data-id');
    const proj = window.portfolioData.find(p => p.id === projId);
    
    if (proj && proj.images && proj.images.length > 0) {
      currentProjImages = proj.images;
      currentImgIdx = 0;
      openLightbox();
    }
  });

  function openLightbox() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop page scroll
    renderLightboxImage();
    renderLightboxThumbs();
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable page scroll
  }

  function renderLightboxImage() {
    slider.innerHTML = '';
    currentProjImages.forEach((imgUrl, idx) => {
      const wrap = document.createElement('div');
      wrap.className = `lightbox-img-wrap ${idx === currentImgIdx ? 'active' : ''}`;
      wrap.innerHTML = `<img src="${imgUrl}" alt="Gallery Image ${idx + 1}">`;
      slider.appendChild(wrap);
    });
  }

  function renderLightboxThumbs() {
    thumbsContainer.innerHTML = '';
    currentProjImages.forEach((imgUrl, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `lightbox-thumb ${idx === currentImgIdx ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgUrl}" alt="Thumb ${idx + 1}">`;
      thumb.addEventListener('click', () => {
        currentImgIdx = idx;
        updateActiveImage();
      });
      thumbsContainer.appendChild(thumb);
    });
  }

  function updateActiveImage() {
    const wraps = slider.querySelectorAll('.lightbox-img-wrap');
    const thumbs = thumbsContainer.querySelectorAll('.lightbox-thumb');
    
    wraps.forEach((w, idx) => w.classList.toggle('active', idx === currentImgIdx));
    thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentImgIdx));
    
    // Auto scroll active thumbnail into view
    const activeThumb = thumbs[currentImgIdx];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  prevBtn.addEventListener('click', () => {
    currentImgIdx = (currentImgIdx > 0) ? currentImgIdx - 1 : currentProjImages.length - 1;
    updateActiveImage();
  });

  nextBtn.addEventListener('click', () => {
    currentImgIdx = (currentImgIdx < currentProjImages.length - 1) ? currentImgIdx + 1 : 0;
    updateActiveImage();
  });

  closeBtn.addEventListener('click', closeLightbox);
  
  // Close on outer click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard navigation support
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });
}

/* ==========================================================================
   7. INTERACTIVE MOUSE PARALLAX
   ========================================================================== */
function initMouseParallax() {
  const hero = document.getElementById('hero');
  const blob1 = document.getElementById('blob-1');
  const blob2 = document.getElementById('blob-2');
  const phone = document.getElementById('hero-mockup');
  
  if (!hero) return;
  
  hero.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Percent offsets from viewport center
    const percentX = (mouseX - window.innerWidth / 2) / (window.innerWidth / 2);
    const percentY = (mouseY - window.innerHeight / 2) / (window.innerHeight / 2);
    
    // Shift Blobs
    if (blob1) {
      blob1.style.transform = `translate(${percentX * 40}px, ${percentY * 40}px)`;
    }
    if (blob2) {
      blob2.style.transform = `translate(${percentX * -30}px, ${percentY * -30}px)`;
    }
    
    // Slight shift on phone mockup
    if (phone) {
      phone.style.transform = `translate(${percentX * 10}px, ${percentY * 10}px) rotate(${percentX * 1.5}deg)`;
    }
  });

  // Reset positions on leave
  hero.addEventListener('mouseleave', () => {
    if (blob1) blob1.style.transform = 'translate(0px, 0px)';
    if (blob2) blob2.style.transform = 'translate(0px, 0px)';
    if (phone) phone.style.transform = 'translate(0px, 0px) rotate(0deg)';
  });
}

/* ==========================================================================
   8. ENQUIRY FORM SUBMITTER
   ========================================================================== */
function initFormHandler() {
  const form = document.getElementById('enquiry-form');
  const submitBtn = document.getElementById('btn-submit-enquiry');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Visual feedback
    submitBtn.innerHTML = 'Sending Request... <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Mock API delay
    setTimeout(() => {
      // Alert with styled notification
      alert(`Thank you, ${document.getElementById('form-name').value}! Your brand boost enquiry has been launched successfully. Our creative analyst will connect with you within 2 hours.`);
      
      // Reset Form
      form.reset();
      submitBtn.innerHTML = 'Launch Request <i class="fas fa-paper-plane"></i>';
      submitBtn.disabled = false;
    }, 1500);
  });
}

/* ==========================================================================
   9. PHASE 2: PORTFOLIO SHOWCASE GRID & DYNAMIC ADS PANELS
   ========================================================================== */
function renderShowcase() {
  const mount = document.getElementById('showcase-mount');
  if (!mount || !window.portfolioData) return;
  
  mount.innerHTML = window.portfolioData.map(p => {
    // Generate slide list
    const slidesHtml = p.images.map(img => `
      <div class="insta-slide">
        <img src="${img}" alt="${p.title} creative asset" loading="lazy">
      </div>
    `).join('');
    
    // Generate dot Indicators
    const dotsHtml = p.images.map((_, idx) => `
      <div class="insta-slider-dot ${idx === 0 ? 'active' : ''}"></div>
    `).join('');

    return `
      <div class="insta-card reveal-item revealed" data-category="${p.category}" data-id="${p.id}">
        <!-- Header -->
        <div class="insta-header">
          <div class="insta-profile">
            <div class="insta-avatar">
              <img src="${p.avatar}" alt="${p.title} profile avatar">
            </div>
            <div class="insta-meta">
              <h4>${p.title} <i class="fas fa-check-circle" title="Verified Brand Collaboration"></i></h4>
              <p>${p.subtitle}</p>
            </div>
          </div>
          <a href="${p.instagramLink}" target="_blank" class="insta-follow-btn" aria-label="Visit Instagram page">
            <i class="fab fa-instagram"></i> Follow
          </a>
        </div>

        <!-- Mode Selector Tabs -->
        <div class="insta-tabs">
          <button class="tab-btn active" data-tab="creatives"><i class="far fa-image"></i> Content Creatives</button>
          <button class="tab-btn" data-tab="ads"><i class="fas fa-chart-line"></i> Meta Ads Manager</button>
        </div>

        <!-- Contents Wrap -->
        <div class="insta-content-panels">
          
          <!-- View 1: Slideshow Creatives -->
          <div class="panel-view panel-creatives active">
            <div class="insta-body">
              <div class="insta-slides">${slidesHtml}</div>
              
              <!-- Navigation Controls -->
              <button class="insta-slider-btn insta-slider-btn-prev" aria-label="Prev Slide"><i class="fas fa-chevron-left"></i></button>
              <button class="insta-slider-btn insta-slider-btn-next" aria-label="Next Slide"><i class="fas fa-chevron-right"></i></button>
              
              <div class="insta-slider-dots">${dotsHtml}</div>
            </div>
          </div>

          <!-- View 2: Meta Ads Mockup Dashboard -->
          <div class="panel-view panel-ads">
            <div class="ads-performance-panel">
              <div class="ads-panel-header">
                <i class="fab fa-facebook-square"></i> Meta Ads Manager Campaign Live
              </div>
              
              <div class="ads-metrics-grid">
                <div class="ads-metric-card">
                  <span class="ads-metric-label">Amount Spent</span>
                  <span class="ads-metric-val">${p.adsPerformance.spent}</span>
                </div>
                <div class="ads-metric-card lime-highlight">
                  <span class="ads-metric-label">ROAS (Return on Ad Spend)</span>
                  <span class="ads-metric-val">${p.adsPerformance.roas}</span>
                </div>
                <div class="ads-metric-card">
                  <span class="ads-metric-label">Conversions (Results)</span>
                  <span class="ads-metric-val">${p.adsPerformance.conversions}</span>
                </div>
                <div class="ads-metric-card highlight">
                  <span class="ads-metric-label">Cost Per Result</span>
                  <span class="ads-metric-val">${p.adsPerformance.costPerResult}</span>
                </div>
              </div>

              <!-- Interactive Sparkline Chart -->
              <div class="ads-chart-wrap">
                <span class="ads-chart-title">Campaign Growth Trend (CTR & Conversions)</span>
                <svg class="ads-sparkline" viewBox="0 0 400 60">
                  <defs>
                    <linearGradient id="chart-gradient-${p.id}" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#1877F2" stop-opacity="0.3"/>
                      <stop offset="100%" stop-color="#1877F2" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M 0 50 Q 50 15 100 40 T 200 10 T 300 35 T 400 5" fill="none"></path>
                  <path class="ads-sparkline-area" d="M 0 50 Q 50 15 100 40 T 200 10 T 300 35 T 400 5 L 400 60 L 0 60 Z" fill="url(#chart-gradient-${p.id})"></path>
                </svg>
              </div>

              <div class="ads-status-footer">
                <div class="ads-status-active">Active Campaign</div>
                <div>Impressions: ${p.adsPerformance.impressions} | CTR: ${p.adsPerformance.ctr}</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer Info -->
        <div class="insta-footer">
          <div class="insta-actions">
            <div class="insta-actions-left">
              <i class="far fa-heart insta-action-icon btn-insta-like" title="Like"></i>
              <i class="far fa-comment insta-action-icon" onclick="alert('Comment section is disabled for verified archive.')" title="Comment"></i>
              <i class="far fa-paper-plane insta-action-icon" onclick="navigator.clipboard.writeText('${p.instagramLink}'); alert('Official link copied to clipboard!');" title="Share link"></i>
            </div>
            <i class="far fa-bookmark insta-action-icon" title="Save post"></i>
          </div>
          <div class="insta-likes"><span class="likes-count">${p.likesCount}</span> likes</div>
          <div class="insta-caption">
            <span class="insta-username">${p.instagramHandle}</span>${p.caption}
          </div>
          <div class="insta-time">2 hours ago</div>
        </div>
      </div>
    `;
  }).join('');
}

function initShowcaseInteractions() {
  const cards = document.querySelectorAll('.insta-card');
  
  cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const proj = window.portfolioData.find(p => p.id === id);
    if (!proj) return;

    let slideIdx = 0;
    const slidesCount = proj.images.length;
    const track = card.querySelector('.insta-slides');
    const dots = card.querySelectorAll('.insta-slider-dot');
    
    // 1. CAROUSEL PREV/NEXT EVENTS
    const prevBtn = card.querySelector('.insta-slider-btn-prev');
    const nextBtn = card.querySelector('.insta-slider-btn-next');
    
    function updateCardSlides() {
      track.style.transform = `translateX(-${slideIdx * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIdx);
      });
    }

    prevBtn.addEventListener('click', () => {
      slideIdx = (slideIdx > 0) ? slideIdx - 1 : slidesCount - 1;
      updateCardSlides();
    });

    nextBtn.addEventListener('click', () => {
      slideIdx = (slideIdx < slidesCount - 1) ? slideIdx + 1 : 0;
      updateCardSlides();
    });

    // 2. TAB VIEW TOGGLES
    const tabBtns = card.querySelectorAll('.tab-btn');
    const panels = card.querySelectorAll('.panel-view');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        panels.forEach(p => {
          if (p.classList.contains(`panel-${targetView}`)) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });

    // 3. HEART/LIKE ACTION TOGGLES
    const likeBtn = card.querySelector('.btn-insta-like');
    const likesCountEl = card.querySelector('.likes-count');
    let isLiked = false;
    let baseLikes = proj.likesCount;

    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      likeBtn.classList.toggle('liked', isLiked);
      likeBtn.classList.toggle('fas', isLiked);
      likeBtn.classList.toggle('far', !isLiked);
      
      const newLikes = isLiked ? baseLikes + 1 : baseLikes;
      likesCountEl.textContent = newLikes.toLocaleString();
      
      // Micro-bounce click animation
      likeBtn.style.transform = 'scale(1.3)';
      setTimeout(() => {
        likeBtn.style.transform = '';
      }, 150);
    });
  });

  // 4. CATEGORY PILLS FILTER OPERATIONS
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterVal = btn.getAttribute('data-filter');
      
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
