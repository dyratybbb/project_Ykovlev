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
const pricingPlans = [
    {
        title: 'Стартовый',
        amount: '850₽',
        period: '/месяц',
        features: [
            '10 ГБ хранилища',
            '1 виртуальный CPU',
            '2 ГБ RAM',
            'Базовая поддержка'
        ],
        popular: false
    },
    {
        title: 'Бизнес',
        amount: '2500₽',
        period: '/месяц',
        features: [
            '50 ГБ хранилища',
            '4 виртуальных CPU',
            '8 ГБ RAM',
            'Приоритетная поддержка',
            'Резервное копирование'
        ],
        popular: true
    },
    {
        title: 'Премиум',
        amount: '8500₽',
        period: '/месяц',
        features: [
            '200 ГБ хранилища',
            '8 виртуальных CPU',
            '16 ГБ RAM',
            '24/7 поддержка',
            'Автомасштабирование',
            'DDoS защита'
        ],
        popular: false
         }
];

const pricingGrid = document.querySelector('.pricing-grid');

pricingPlans.forEach(plan => {
    const pricingCard = document.createElement('div');
    pricingCard.classList.add('pricing-card');

    if (plan.popular) {
        pricingCard.classList.add('popular');
        pricingCard.innerHTML = '<div class="popular-badge">Популярный</div>';
    }

    pricingCard.innerHTML += `
        <h3>${plan.title}</h3>
        <div class="price">
            <span class="amount">${plan.amount}</span>
             <span class="period">${plan.period}</span>
        </div>
        <ul class="features">
            ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
        </ul>
        <a href="#" class="btn btn-outline">Выбрать</a>
    `;

    pricingGrid.appendChild(pricingCard);
});
// Функция для загрузки и отображения услуг
function loadServices() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const servicesGrid = document.querySelector('.services-grid');
            data.services.forEach(service => {
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
        })
        .catch(error => console.error('Ошибка при загрузке услуг:', error));
}

// Функция для загрузки и отображения тарифов
function loadPricingPlans() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const pricingGrid = document.querySelector('.pricing-grid');
            data.pricingPlans.forEach(plan => {
                const pricingCard = document.createElement('div');
                pricingCard.classList.add('pricing-card');

                if (plan.popular) {
                    pricingCard.classList.add('popular');
                    pricingCard.innerHTML = '<div class="popular-badge">Популярный</div>';
                }

                pricingCard.innerHTML += `
                    <h3>${plan.title}</h3>
                    <div class="price">
                        <span class="amount">${plan.amount}</span>
                        <span class="period">${plan.period}</span>
                    </div>
                    <ul class="features">
                        ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul
