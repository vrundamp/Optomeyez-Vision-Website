// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const yOffset = -64; // adjust for nav height
        const rect = target.getBoundingClientRect();
        const y = rect.top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
    }
  });
}

// Contact form (demo only)
const contactForm = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (contactForm && statusEl) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = 'Thank you for your message. A team member will contact you using the phone number provided.';
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
