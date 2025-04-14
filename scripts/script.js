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

// Предзагрузчик страницы
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.createElement("div");
    loader.innerText = "Загрузка...";
    document.body.appendChild(loader);

    // Удаляем предзагрузчик через 2 секунды
    setTimeout(() => {
        loader.remove();
        fetchData();
    }, 2000);
});

// Функция для получения данных
function fetchData() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не в порядке');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Здесь можно обработать данные и отобразить их на странице
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Swiper для услуг
    const servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.services-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-swiper .swiper-button-next',
            prevEl: '.services-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Инициализация Swiper для тарифов
    const pricingSwiper = new Swiper('.pricing-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.pricing-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Работа с LocalStorage для формы контактов
    const contactForm = document.getElementById('contactForm');
    
    // Загружаем сохраненные данные при загрузке страницы
    if (localStorage.getItem('contactFormData')) {
        const savedData = JSON.parse(localStorage.getItem('contactFormData'));
        document.getElementById('contactName').value = savedData.name || '';
        document.getElementById('contactEmail').value = savedData.email || '';
        document.getElementById('contactSubject').value = savedData.subject || '';
        document.getElementById('contactMessage').value = savedData.message || '';
    }
    
    // Сохраняем данные при изменении полей формы
    contactForm.addEventListener('input', function() {
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    });
    
    // Обработка отправки формы
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь можно добавить код для отправки формы на сервер
        
        // Очищаем форму и LocalStorage после отправки
        contactForm.reset();
        localStorage.removeItem('contactFormData');
        
        // Показываем сообщение об успешной отправке
        alert('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
    });
    
    // Добавляем скрипт для кнопок входа/регистрации
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-primary');
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Форма входа будет реализована позже');
    });
    
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Форма регистрации будет реализована позже');
    });
});
document.write(`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> 
<section id="pricing" class="pricing">
    <div class="container">
        <h2 class="section-title">Тарифные планы</h2>
        <p class="section-subtitle">Выберите подходящий план для вашего бизнеса</p>
        <div class="pricing-grid">
            <div class="swiper-container pricing-swiper">
                <div class="swiper-wrapper">
                    <!-- Тариф 1 -->
                    <div class="swiper-slide">
                        <div class="pricing-card">
                            <h3>Стартовый</h3>
                            <div class="price">990 ₽<span>/месяц</span></div>
                            <ul class="features">
                                <li><i class="fas fa-check"></i> 10 ГБ хранилища</li>
                                <li><i class="fas fa-check"></i> 1 виртуальный сервер</li>
                                <li><i class="fas fa-check"></i> Базовая безопасность</li>
                                <li><i class="fas fa-check"></i> Поддержка 24/7</li>
                            </ul>
                            <a href="#" class="btn btn-primary">Выбрать</a>
                        </div>
                    </div>
                    
                    <!-- Тариф 2 -->
                    <div class="swiper-slide">
                        <div class="pricing-card featured">
                            <div class="popular-tag">Популярный</div>
                            <h3>Бизнес</h3>
                            <div class="price">2 990 ₽<span>/месяц</span></div>
                            <ul class="features">
                                <li><i class="fas fa-check"></i> 50 ГБ хранилища</li>
                                <li><i class="fas fa-check"></i> 3 виртуальных сервера</li>
                                <li><i class="fas fa-check"></i> Расширенная безопасность</li>
                                <li><i class="fas fa-check"></i> Приоритетная поддержка</li>
                            </ul>
                            <a href="#" class="btn btn-primary">Выбрать</a>
                        </div>
                    </div>
                    
                    <!-- Тариф 3 -->
                    <div class="swiper-slide">
                        <div class="pricing-card">
                            <h3>Премиум</h3>
                            <div class="price">5 990 ₽<span>/месяц</span></div>
                            <ul class="features">
                                <li><i class="fas fa-check"></i> 200 ГБ хранилища</li>
                                <li><i class="fas fa-check"></i> 10 виртуальных серверов</li>
                                <li><i class="fas fa-check"></i> Максимальная безопасность</li>
                                <li><i class="fas fa-check"></i> Персональный менеджер</li>
                            </ul>
                            <a href="#" class="btn btn-primary">Выбрать</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`);
