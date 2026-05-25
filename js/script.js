// Слайдер логика
document.addEventListener('DOMContentLoaded', () => {
  const sliderBtns = document.querySelectorAll('.slider-nav-btn');
  const sliderBgs = document.querySelectorAll('.slider-bg');
  const textCards = document.querySelectorAll('.slider-text-card');

  sliderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const slideIndex = btn.getAttribute('data-slide');

      // Обновляем активную кнопку
      sliderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Показываем соответствующий фон с анимацией
      sliderBgs.forEach(bg => {
        if (bg.getAttribute('data-slide') === slideIndex) {
          bg.classList.add('active');
        } else {
          bg.classList.remove('active');
        }
      });

      // Показываем соответствующую карточку с текстом с анимацией
      textCards.forEach(card => {
        if (card.getAttribute('data-slide') === slideIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });
});
