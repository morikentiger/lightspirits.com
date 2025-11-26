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
    });
  });

  // Text switch with red color and flicker effect
  const heroText = document.getElementById('hero-text');
  if (heroText) {
    setTimeout(() => {
      // Start flicker animation
      heroText.classList.add('flicker');
      // After short flicker, change text and set red color
      setTimeout(() => {
        heroText.innerHTML = 'らいと<br>すぴりっつ';
        heroText.setAttribute('data-text', 'らいと&#10;すぴりっつ');
        heroText.style.color = 'var(--color-red)';
        heroText.classList.remove('flicker');
      }, 500); // flicker duration
    }, 3000);
  }
  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const company = document.getElementById('company').value;
      const email = document.getElementById('email').value;
      const category = document.getElementById('category').value;
      const message = document.getElementById('message').value;

      const subject = `[お問い合わせ] ${category} - ${name}様`;
      const body = `
お名前: ${name}
貴社名: ${company}
メールアドレス: ${email}
お問い合わせ項目: ${category}

お問い合わせ内容:
${message}
      `.trim();

      const mailtoLink = `mailto:kuromoriken@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    });
  }
});
