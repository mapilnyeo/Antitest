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

  requestAnimationFrame(() => {
     cursorBlur.style.left = `${x}px`;
     cursorBlur.style.top = `${y}px`;
  });
});

// Smooth Scroll for Anchor Links
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

// Login Button Handler
const loginBtn = document.querySelector('.btn-login');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    alert('로그인 페이지로 이동합니다.');
    // 실제 구현시: window.location.href = '/login';
  });
}

// Signup Button Handler
const signupBtn = document.querySelector('.btn-signup');
if (signupBtn) {
  signupBtn.addEventListener('click', () => {
    alert('회원가입 페이지로 이동합니다.');
    // 실제 구현시: window.location.href = '/signup';
  });
}

// Course Enrollment Handlers
const enrollButtons = document.querySelectorAll('.btn-enroll');
enrollButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const courseCard = btn.closest('.course-card');
    const courseTitle = courseCard.querySelector('.course-title').textContent;
    alert(`"${courseTitle}" 강의 수강신청을 진행합니다.`);
    // 실제 구현시: 장바구니에 추가하거나 결제 페이지로 이동
  });
});

// Course Card Click Handler (강의 상세 페이지로 이동)
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
  card.addEventListener('click', () => {
    const courseTitle = card.querySelector('.course-title').textContent;
    console.log(`강의 상세 페이지로 이동: ${courseTitle}`);
    // 실제 구현시: window.location.href = `/course/${courseId}`;
  });
});

// Category Card Click Handler
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const categoryName = card.querySelector('.category-name').textContent;
    console.log(`${categoryName} 카테고리 페이지로 이동`);
    // 실제 구현시: window.location.href = `/category/${categorySlug}`;
  });
});

// Instructor Card Click Handler
const instructorCards = document.querySelectorAll('.instructor-card');
instructorCards.forEach(card => {
  card.addEventListener('click', () => {
    const instructorName = card.querySelector('.instructor-name').textContent;
    console.log(`${instructorName} 강사 페이지로 이동`);
    // 실제 구현시: window.location.href = `/instructor/${instructorId}`;
  });
});

// CTA Button Handler
const ctaButton = document.querySelector('.cta-section .btn-large');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert('무료 체험을 시작합니다!');
    // 실제 구현시: window.location.href = '/signup?trial=true';
  });
}

// Header scroll effect (optional - adds background on scroll)
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    header.style.background = 'rgba(10, 10, 10, 0.8)';
  }

  lastScroll = currentScroll;
});

console.log('EduLearn 강의 플랫폼이 준비되었습니다! 🎓');
