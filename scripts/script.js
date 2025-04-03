'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Спасибо за ваше сообщение!')
});
// Получаем элемент навигационного меню
const nav = document.querySelector('nav');

// Определяем начальную позицию
const sticky = nav.offsetTop;

// Добавляем слушатель события прокрутки
window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
// Получаем все изображения с классом 'hover-image'
const images = document.querySelectorAll('.hover-image');

images.forEach(image => {
    const description = image.nextElementSibling; // Получаем следующий элемент (описание)

    image.addEventListener('mouseover', () => {
        description.style.display = 'block'; // Показываем описание
    });

    image.addEventListener('mouseout', () => {
        description.style.display = 'none'; // Скрываем описание
    });
});
