document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (!header) return;

  const applyGlassEffect = () => {
    if (window.scrollY > 10) {
      header.classList.add('header-glass');
    } else {
      header.classList.remove('header-glass');
    }
  };

  applyGlassEffect();
  window.addEventListener('scroll', applyGlassEffect);

  // Hamburger Menu Logic
  const hamburger = document.getElementById('hamburger-btn');
  const nav = document.querySelector('header nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
