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
// Создаем элементы заголовка
const header = document.createElement('header');
const container = document.createElement('div');
container.classList.add('container');

// Логотип
const logo = document.createElement('div');
logo.classList.add('logo');
logo.innerHTML = '<i class="fas fa-cloud"></i><span>CloudTech</span>';

// Навигация
const nav = document.createElement('nav');
const navList = document.createElement('ul');

// Массив с элементами навигации
const navItems = [
    { text: 'Главная', href: '#home' },
    { text: 'Услуги', href: '#services' },
    { text: 'Тарифы', href: '#pricing' },
    { text: 'О нас', href: '#about' },
    { text: 'Контакты', href: '#contact' }
];

// Перебираем массив и создаем элементы li и a
navItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    
    link.href = item.href; // Устанавливаем href
    link.textContent = item.text; // Устанавливаем текст ссылки
    
    listItem.appendChild(link); // Добавляем ссылку в элемент li
    navList.appendChild(listItem); // Добавляем элемент li в ul
});

nav.appendChild(navList); // Добавляем ul в nav

// Кнопки аутентификации
const authButtons = document.createElement('div');
authButtons.classList.add('auth-buttons');

const loginButton = document.createElement('a');
loginButton.href = '#';
loginButton.classList.add('btn', 'btn-login');
loginButton.textContent = 'Вход';

const registerButton = document.createElement('a');
registerButton.href = '#';
registerButton.classList.add('btn', 'btn-primary');
registerButton.textContent = 'Регистрация';

authButtons.appendChild(loginButton);
authButtons.appendChild(registerButton);

// Собираем все элементы вместе
container.appendChild(logo);
container.appendChild(nav);
container.appendChild(authButtons);
header.appendChild(container);

// Добавляем заголовок в body
document.body.prepend(header);
