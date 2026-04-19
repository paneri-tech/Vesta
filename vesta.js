/* ═══════════════════════════════════════════════════════
   VESTA — Shared JavaScript
   ═══════════════════════════════════════════════════════ */

/* ─── NAV SCROLL ─────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── ACTIVE NAV LINK ────────────────────── */
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.includes(path)) a.classList.add('active');
    if (path === '' || path === 'index.html') {
      document.querySelectorAll('.nav-links a[href="index.html"]').forEach(el => el.classList.add('active'));
    }
  });
})();

/* ─── HAMBURGER MENU ─────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ─── MODALS ─────────────────────────────── */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('active'); document.body.style.overflow = ''; }
}
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => {
    if (e.target === o) { o.classList.remove('active'); document.body.style.overflow = ''; }
  });
});

/* ─── FORM SUBMISSIONS ───────────────────── */
function submitPro() {
  const name = document.getElementById('proName')?.value;
  const email = document.getElementById('proEmail')?.value;
  if (name && email) { showToast('Application submitted! We'll be in touch within 48h.'); closeModal('modalPro'); }
  else showToast('Please fill in all required fields.');
}
function submitBook() {
  const name = document.getElementById('bookName')?.value;
  if (name) { showToast("You're on the list! We'll notify you at launch."); closeModal('modalBook'); }
  else showToast('Please fill in your name.');
}
function submitContact() {
  const name = document.getElementById('ctName')?.value;
  const email = document.getElementById('ctEmail')?.value;
  const msg = document.getElementById('ctMsg')?.value;
  if (name && email && msg) {
    showToast('Message sent! We'll reply within 24 hours.');
    document.getElementById('ctName').value = '';
    document.getElementById('ctEmail').value = '';
    document.getElementById('ctMsg').value = '';
    const subjectEl = document.getElementById('ctSubject');
    if (subjectEl) subjectEl.value = '';
  } else showToast('Please complete all required fields.');
}

/* ─── TOAST ──────────────────────────────── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ─── REVEAL ON SCROLL ───────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── EARNINGS CALCULATOR ────────────────── */
function initCalculator() {
  const h = document.getElementById('hours');
  const r = document.getElementById('rate');
  const c = document.getElementById('comm');
  if (!h || !r || !c) return;
  function updateCalc() {
    const hrs = parseInt(h.value), rate = parseInt(r.value), comm = parseInt(c.value);
    const hv = document.getElementById('hoursVal');
    const rv = document.getElementById('rateVal');
    const cv = document.getElementById('commVal');
    const res = document.getElementById('calcResult');
    if (hv) hv.textContent = `${hrs} hours / week`;
    if (rv) rv.textContent = `$${rate} / hour`;
    if (cv) cv.textContent = `${comm}% commission`;
    if (res) res.textContent = '$' + Math.round(hrs * rate * (1 - comm / 100) * 4.3).toLocaleString();
  }
  [h, r, c].forEach(el => el.addEventListener('input', updateCalc));
  updateCalc();
}
initCalculator();

/* ─── SMOOTH SCROLL for anchor links ────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
