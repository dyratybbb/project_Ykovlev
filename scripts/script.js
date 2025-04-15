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

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const container = document.getElementById("data-container");

    const hidePreloader = () => {
        if (preloader) {
            preloader.style.display = "none";
            console.log("✅ Прелоадер скрыт");
        }
    };

    const getData = async () => {
        if (!container) {
            console.error("❌ Контейнер 'data-container' не найден.");
            hidePreloader();
            return;
        }

        try {
            console.log("📡 Загружаем данные...");
            const response = await fetch("/data/data.json");

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log("📦 Данные загружены:", data);

            if (!Array.isArray(data)) {
                throw new Error("Ожидался массив данных.");
            }

            container.innerHTML = ""; // очистим "Загрузка..."
            data.forEach((item) => {
                const div = document.createElement("div");
                div.className = "data-item";
                div.innerHTML = `<strong>${item.name}</strong>`;
                container.appendChild(div);
            });
        } catch (error) {
            console.error("❌ Ошибка при загрузке данных:", error);
            container.innerHTML = `<p class="error">Не удалось загрузить данные.</p>`;
        } finally {
            hidePreloader();
        }
    };

    getData();
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
    new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
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


