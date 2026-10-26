// Small progressive enhancement: highlight the current navigation section.
const navLinks = [...document.querySelectorAll('.topbar nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.style.color = active ? '#b5f36b' : '';
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
