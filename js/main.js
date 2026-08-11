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
