document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
}
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.13 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const visual = document.getElementById('parallaxVisual');
window.addEventListener('mousemove', (e) => {
  if (!visual || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - .5) * 12;
  const y = (e.clientY / window.innerHeight - .5) * 12;
  visual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
document.querySelectorAll('[data-language]').forEach(link => {
  link.addEventListener('click', () => localStorage.setItem('hb-language', link.dataset.language));
});
