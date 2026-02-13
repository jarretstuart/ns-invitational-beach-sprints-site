// Minimal JS: mobile nav, countdown, and copy-to-email helper.

(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.hidden = true;
    navToggle?.setAttribute('aria-expanded', 'false');
  }

  navToggle?.addEventListener('click', () => {
    const isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close mobile nav when clicking a link
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });

  // Countdown to Aug 28, 2026 (local time)
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    const eventStart = new Date('2026-08-28T09:00:00'); // reasonable default; time can be edited
    function updateCountdown() {
      const now = new Date();
      const diffMs = eventStart - now;
      const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      if (days >= 0) {
        countdownEl.textContent = `${days} days`;
      } else {
        countdownEl.textContent = 'In progress';
      }
    }
    updateCountdown();
    setInterval(updateCountdown, 60 * 60 * 1000);
  }
})();
