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

      // Показываем соответствующий фон
      sliderBgs.forEach(bg => {
        if (bg.getAttribute('data-slide') === slideIndex) {
          bg.style.display = 'block';
        } else {
          bg.style.display = 'none';
        }
      });

      // Показываем соответствующую карточку с текстом
      textCards.forEach(card => {
        if (card.getAttribute('data-slide') === slideIndex) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
