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
  // Trigger real-time ticking metrics simulation
  initDashboardTickers();
}

function initDashboardTickers() {
  const usersEl = document.getElementById('dashboard-active-users');
  const reachEl = document.getElementById('dashboard-daily-reach');
  const spendEl = document.getElementById('meta-spend');
  const impressionsEl = document.getElementById('meta-impressions');

  // 1. Active Users (Fluctuates between 2450 and 2550)
  if (usersEl) {
    let users = 2480;
    setInterval(() => {
      const change = Math.floor(Math.random() * 15) - 7; // -7 to +7
      users = Math.max(2100, Math.min(2800, users + change));
      usersEl.textContent = users.toLocaleString();
    }, 2000);
  }

  // 2. Daily Reach (Slowly increments from 452.8K)
  if (reachEl) {
    let reachVal = 452.8;
    setInterval(() => {
      const change = Math.random() * 0.3; // 0 to 0.3K
      reachVal += change;
      reachEl.textContent = `${reachVal.toFixed(1)}K`;
    }, 3000);
  }

  // 3. Meta Ad Spent (Increments by cents every 800ms)
  if (spendEl) {
    let spentVal = 12482.40;
    setInterval(() => {
      const change = Math.random() * 0.4 + 0.1; // $0.10 to $0.50
      spentVal += change;
      spendEl.textContent = `$${spentVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }, 800);
  }

  // 4. Meta Impressions (Increments by 2 to 9 every 800ms)
  if (impressionsEl) {
    let impressionsVal = 82450;
    setInterval(() => {
      const change = Math.floor(Math.random() * 8) + 2;
      impressionsVal += change;
      impressionsEl.textContent = impressionsVal.toLocaleString();
    }, 800);
  }
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
  
  mount.innerHTML = window.portfolioData.map((p, idx) => {
    return `
      <div class="project-card reveal-item revealed" data-id="${p.id}" data-brand="${p.id}">
        <div>
          <!-- Header -->
          <div class="project-card-header">
            <div class="project-card-logo-wrap">
              <img src="${p.avatar}" alt="${p.title} Logo" class="project-card-logo" onerror="this.src='assets/logo-icon.png'">
            </div>
            <div class="project-card-info">
              <h3 class="project-card-title">${p.title}</h3>
              <span class="project-card-tag">${p.category}</span>
            </div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="project-card-actions">
          <a href="${p.instagramLink}" target="_blank" class="project-btn project-btn-insta" aria-label="Visit Instagram Profile">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="${p.websiteLink}" target="_blank" class="project-btn project-btn-web" aria-label="Visit Live Website">
            <i class="fas fa-globe"></i> Website
          </a>
        </div>
      </div>
    `;
  }).join('');
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
    '.project-card'
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

  // Mount click triggers for portfolio card clicks (homepage carousel)
  const portfolioMount = document.getElementById('portfolio-mount');
  if (portfolioMount) {
    portfolioMount.addEventListener('click', (e) => {
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
  }

  // Mount click triggers for portfolio page grid item clicks
  const showcaseMount = document.getElementById('showcase-mount');
  if (showcaseMount) {
    showcaseMount.addEventListener('click', (e) => {
      const gridItem = e.target.closest('.insta-grid-item');
      if (!gridItem) return;
      
      const card = gridItem.closest('.insta-card');
      if (!card) return;
      
      const projId = card.getAttribute('data-id');
      const proj = window.portfolioData.find(p => p.id === projId);
      
      if (proj && proj.images && proj.images.length > 0) {
        const indexAttr = gridItem.getAttribute('data-index');
        currentProjImages = proj.images;
        currentImgIdx = parseInt(indexAttr, 10) || 0;
        openLightbox();
      }
    });
  }

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
  const dashboard = document.getElementById('hero-dashboard');
  
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
    
    // Tilt the glassmorphic dashboard container in 3D (3D parallax depth)
    if (dashboard) {
      const rotateX = percentY * -12; // tilt up/down (X axis rotation)
      const rotateY = percentX * 12;  // tilt left/right (Y axis rotation)
      dashboard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });

  // Reset positions on leave
  hero.addEventListener('mouseleave', () => {
    if (blob1) blob1.style.transform = 'translate(0px, 0px)';
    if (blob2) blob2.style.transform = 'translate(0px, 0px)';
    if (dashboard) {
      dashboard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  });
}


function getSparklinePath(id) {
  switch (id) {
    case 'royal-venetian':
      return {
        line: "M 0 35 Q 50 10 100 30 T 200 5 T 300 25 T 400 2",
        area: "M 0 35 Q 50 10 100 30 T 200 5 T 300 25 T 400 2 L 400 40 L 0 40 Z"
      };
    case 'mark-jillion':
      return {
        line: "M 0 38 Q 60 15 120 32 T 240 8 T 360 20 T 400 5",
        area: "M 0 38 Q 60 15 120 32 T 240 8 T 360 20 T 400 5 L 400 40 L 0 40 Z"
      };
    case 'key4you':
      return {
        line: "M 0 30 Q 45 5 90 25 T 180 2 T 270 18 T 400 1",
        area: "M 0 30 Q 45 5 90 25 T 180 2 T 270 18 T 400 1 L 400 40 L 0 40 Z"
      };
    case 'black-wizard':
    default:
      return {
        line: "M 0 32 Q 55 12 110 28 T 220 4 T 330 15 T 400 3",
        area: "M 0 32 Q 55 12 110 28 T 220 4 T 330 15 T 400 3 L 400 40 L 0 40 Z"
      };
  }
}

/* ==========================================================================
   9. PHASE 2: PORTFOLIO SHOWCASE GRID & DYNAMIC ADS PANELS
   ========================================================================== */
function renderShowcase() {
  const mount = document.getElementById('showcase-mount');
  if (!mount || !window.portfolioData) return;
  
  // Transform the container into our redesigned grid
  mount.className = 'showcase-grid-redesigned';
  
  mount.innerHTML = window.portfolioData.map((p, idx) => {
    const animationDelay = `${idx * 0.12}s`;
    const spark = getSparklinePath(p.id);
    
    return `
      <div class="project-card reveal-item revealed" data-category="${p.category}" data-id="${p.id}" data-brand="${p.id}" style="animation-delay: ${animationDelay};">
        <div>
          <!-- Header -->
          <div class="project-card-header">
            <div class="project-card-logo-wrap">
              <img src="${p.avatar}" alt="${p.title} Logo" class="project-card-logo" onerror="this.src='assets/logo-icon.png'">
            </div>
            <div class="project-card-info">
              <h3 class="project-card-title">${p.title}</h3>
              <span class="project-card-tag">${p.category}</span>
            </div>
          </div>
          
          <!-- Embedded Ads Manager Dashboard -->
          <div class="project-card-ads">
            <div class="project-card-ads-header">
              <span><i class="fab fa-facebook-square"></i> Meta Ads Manager</span>
              <span class="project-card-ads-status-active">Active</span>
            </div>
            
            <div class="project-card-metrics">
              <div class="project-card-metric">
                <span class="project-card-metric-label">Spent</span>
                <span class="project-card-metric-val">${p.adsPerformance.spent}</span>
              </div>
              <div class="project-card-metric highlight-roas">
                <span class="project-card-metric-label">ROAS</span>
                <span class="project-card-metric-val">${p.adsPerformance.roas}</span>
              </div>
              <div class="project-card-metric highlight-conv">
                <span class="project-card-metric-label">Conversions</span>
                <span class="project-card-metric-val">${p.adsPerformance.conversions}</span>
              </div>
              <div class="project-card-metric">
                <span class="project-card-metric-label">Cost / Result</span>
                <span class="project-card-metric-val">${p.adsPerformance.costPerResult}</span>
              </div>
            </div>
            
            <!-- Mini Sparkline Graph -->
            <div class="project-card-sparkline-wrap">
              <span class="project-card-sparkline-title">Campaign Conversion Trend (CTR & Leads)</span>
              <svg class="project-card-sparkline-svg" viewBox="0 0 400 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="card-gradient-blue-${p.id}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1877F2" stop-opacity="0.4"/>
                    <stop offset="100%" stop-color="#1877F2" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path class="line" d="${spark.line}"></path>
                <path class="area" d="${spark.area}" fill="url(#card-gradient-blue-${p.id})"></path>
              </svg>
            </div>
            
            <div class="project-card-ads-footer">
              <span>Impressions: ${p.adsPerformance.impressions}</span>
              <span>CTR: ${p.adsPerformance.ctr}</span>
            </div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="project-card-actions">
          <a href="${p.instagramLink}" target="_blank" class="project-btn project-btn-insta" aria-label="Visit Instagram Profile">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="${p.websiteLink}" target="_blank" class="project-btn project-btn-web" aria-label="Visit Live Website">
            <i class="fas fa-globe"></i> Website
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function initShowcaseInteractions() {
  const cards = document.querySelectorAll('.project-card');
  
  // CATEGORY PILLS FILTER OPERATIONS
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
