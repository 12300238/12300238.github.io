// ── Active nav link ──────────────────────────────────
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === page) link.classList.add('active');
  });
})();

// ── Nav toggle (mobile) ──────────────────────────────
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.getElementById('navbar');
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => navbar.classList.toggle('open'));
  navbar.addEventListener('click', e => {
    if (e.target.tagName === 'A') navbar.classList.remove('open');
  });
}

// ── Email copy ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const copyBtn = document.getElementById('copy-email');
  const emailEl = document.getElementById('email');
  const successMsg = document.getElementById('copy-success');
  if (copyBtn && emailEl) {
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(emailEl.textContent).then(function () {
        successMsg.style.display = 'inline';
        setTimeout(() => { successMsg.style.display = 'none'; }, 1500);
      });
    });
  }

  // ── Scroll reveal ──────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.08}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
});
