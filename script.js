// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links (offset handled via CSS scroll-padding-top)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('active');
  });
});

// Contact form submission with EmailJS
const contactForm = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  statusText.textContent = 'Sending...';

  const serviceID = 'service_u144umw';   // TODO: replace
  const templateID = 'template_02dxyb4'; // TODO: replace

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      statusText.textContent = 'Thank you, your message has been sent!';
      contactForm.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      statusText.textContent = 'Something went wrong. Please try again.';
    });
});
