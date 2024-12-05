const slides = document.querySelector('.slides');
const navBtns = document.querySelectorAll('.nav-btn');
let currentIndex = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  navBtns.forEach((btn, index) => {
    btn.classList.toggle('active', index === currentIndex);
  });
}

navBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

// Auto-slide feature
setInterval(() => {
  currentIndex = (currentIndex + 1) % navBtns.length;
  updateSlider();
}, 5000);
