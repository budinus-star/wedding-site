// Таймер
const weddingDate = new Date('2026-04-18T09:30:00');

    function updateTimer() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            document.querySelector('.timer-grid').innerHTML = '<p style="font-size: 2rem; color: #c41e3a;">Свадьба уже началась!</p>';
            return;
        }

        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Разбиваем на цифры
        const daysStr    = String(days).padStart(2, '0');
        const hoursStr   = String(hours).padStart(2, '0');
        const minutesStr = String(minutes).padStart(2, '0');
        const secondsStr = String(seconds).padStart(2, '0');

        document.getElementById('days1').textContent    = daysStr[0];
        document.getElementById('days2').textContent    = daysStr[1];
        document.getElementById('hours1').textContent   = hoursStr[0];
        document.getElementById('hours2').textContent   = hoursStr[1];
        document.getElementById('minutes1').textContent = minutesStr[0];
        document.getElementById('minutes2').textContent = minutesStr[1];
        document.getElementById('seconds1').textContent = secondsStr[0];
        document.getElementById('seconds2').textContent = secondsStr[1];
    }

    setInterval(updateTimer, 1000);
    updateTimer();

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    function showSlide(index) {
        // Плавный переход
        document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;

        // Активный слайд и точка
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Стрелки
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Клик по точкам
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.index);
            showSlide(currentIndex);
        });
    });

    // Свайп на телефоне
    const sliderContainer = document.querySelector('.slider-container');

    sliderContainer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    sliderContainer.addEventListener('touchmove', e => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {  // порог свайпа
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            isDragging = false;
        }
    });

    sliderContainer.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Показать первый слайд
    showSlide(currentIndex);


// Музыка (опционально)
const audio = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Конфетти (опционально, добавь библиотеку party.js с CDN в HTML: <script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>)
document.getElementById('confetti-btn').addEventListener('click', () => {
    party.confetti(document.body);
});


