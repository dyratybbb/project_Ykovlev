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
const services = [
    {
        icon: 'fas fa-server',
        title: 'Виртуальные серверы',
        description: 'Масштабируемые облачные серверы с высокой производительностью и надежностью.'
    },
    {
        icon: 'fas fa-database',
        title: 'Облачное хранилище',
        description: 'Безопасное хранение данных с доступом из любой точки мира и с любого устройства.'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Кибербезопасность',
        description: 'Защита ваших данных и приложений от современных киберугроз.'
    },
    {
        icon: 'fas fa-network-wired',
        title: 'Гибридные решения',
        description: 'Интеграция облачных и локальных решений для оптимальной ИТ-инфраструктуры.'
    }
];

const servicesGrid = document.querySelector('.services-grid');

services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');

    serviceCard.innerHTML = `
        <div class="service-icon">
            <i class="${service.icon}"></i>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        `;

    servicesGrid.appendChild(serviceCard);
});
