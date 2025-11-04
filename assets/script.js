const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

const setNavigationState = (isOpen) => {
  document.body.dataset.navOpen = isOpen ? 'true' : 'false';
  nav.dataset.open = isOpen ? 'true' : 'false';
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
};

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const currentlyOpen = nav.dataset.open === 'true';
    setNavigationState(!currentlyOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        setNavigationState(false);
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      setNavigationState(false);
    }
  });
}

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
