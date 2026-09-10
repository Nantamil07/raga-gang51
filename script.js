/* =====================================================
   RAGA — Gang 51  |  script.js
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky navbar darken on scroll ---------- */
  const navbar = document.querySelector('.navbar');
  const onScrollNav = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close mobile menu when a plain link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Events dropdown (hover on desktop, tap on mobile) ---------- */
  const dropdownParent = document.querySelector('.has-dropdown');

  if (dropdownParent) {
    const trigger = dropdownParent.querySelector('a:not(.dropdown a)');

    trigger.addEventListener('click', (e) => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        e.preventDefault();
        dropdownParent.classList.toggle('open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('open');
      }
    });
  }

  /* ---------- Active section highlighting (index page only) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"], .nav-links a[href^="index.html#"]');

  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            const href = a.getAttribute('href').split('#')[1];
            a.classList.toggle('active', href === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Hero parallax ---------- */
  const heroContent = document.querySelector('.hero-content');
  const heroPhoto = document.querySelector('.hero-photo-placeholder');

  if (heroContent) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroContent.style.transform = `translateY(${y * 0.25}px)`;
        if (heroPhoto) heroPhoto.style.transform = `translateY(${y * 0.12}px)`;
      }
    }, { passive: true });
  }

  /* ---------- Scroll-to-top button ---------- */
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- "View More" council button navigates ---------- */
  const viewMoreBtn = document.querySelector('[data-view-more]');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      window.location.href = 'council.html';
    });
  }

});
