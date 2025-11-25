// Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Glitch Text Transformation
      const glitchText = document.getElementById('glitch-text');

      if (glitchText) {
        setTimeout(() => {
          // Start intense flickering
          glitchText.classList.add('transforming');

          setTimeout(() => {
            // Change text
            const newText = "らいとすぴりっつ";
            glitchText.textContent = newText;
            glitchText.setAttribute('data-text', newText);

            // Remove intense flicker but keep subtle glitch or remove entirely
            // Here we remove the transforming class to stop the intense flicker
            glitchText.classList.remove('transforming');

            // Optional: Remove glitch effect entirely after transformation for a clean look
            // glitchText.classList.remove('glitch');
          }, 1500); // Duration of intense flicker before text change
        }, 3000); // Initial delay before effect starts
      }
    });
  });
});
```
