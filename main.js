// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const textObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el) => textObserver.observe(el));

// Custom Cursor / Background Effect
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Use requestAnimationFrame for smoother performance
  requestAnimationFrame(() => {
     cursorBlur.style.left = `${x}px`;
     cursorBlur.style.top = `${y}px`;
  });
});

// Smooth Scroll for Anchor Links (Native supports this via CSS, but this ensures broad support if needed logic)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
