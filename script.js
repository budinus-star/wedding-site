// Таймер
const weddingDate = new Date('2026-04-18T09:30:00'); // Дата и время свадьбы

function updateTimer() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.querySelector('.timer').textContent = 'Свадьба началась!';
    }
}

setInterval(updateTimer, 1000);
updateTimer();

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
