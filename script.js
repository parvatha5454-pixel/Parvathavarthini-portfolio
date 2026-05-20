// ===========================
// CUSTOM CURSOR
// ===========================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor hover effect on links & buttons
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.width = '54px';
    ring.style.height = '54px';
    ring.style.borderColor = 'var(--accent2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'var(--accent1)';
  });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.observe-me').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.1 + 's';
  observer.observe(el);
});
