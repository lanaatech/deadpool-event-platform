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
});

