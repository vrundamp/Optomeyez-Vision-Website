document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thank you! Your message has been sent.';
  this.reset();
});