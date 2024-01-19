document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('image-carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
      const offset = -index * 100 + '%';
      carousel.style.transform = 'translateX(' + offset + ')';
  }

  function handlePrev() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  }

  function handleNext() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  }

  prevBtn.addEventListener('click', handlePrev);
  nextBtn.addEventListener('click', handleNext);
});
