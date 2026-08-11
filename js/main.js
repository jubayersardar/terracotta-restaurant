const menuButton = document.getElementById('mobileMenuBtn');

menuButton?.addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    document.getElementById('navLinks')?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

document.querySelectorAll('.current-year').forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

const bookingForm = document.getElementById('bookingForm');
bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.getElementById('formStatus');
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }
  status.textContent = 'তথ্যগুলো যাচাই করা হয়েছে। বুকিং নিশ্চিত করতে এখন ০১৭৩২-৪৪৮৮৫৫ নম্বরে কল করুন অথবা Facebook-এ মেসেজ দিন।';
  bookingForm.reset();
});
