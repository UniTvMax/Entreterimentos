document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.background-slideshow .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 4200); // Troca a cada 4,2 segundos
  }
});