let clickCount = 0; // Счетчик кликов
const modal = document.getElementById('modal');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainText = document.getElementById('main-text');

const texts = [
    "Еще разок!",
    "Продолжай!",
    "Ты почти у цели!",
    "Последний клик!",
    "Сюрприз!"
];

document.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= texts.length) {
        mainText.textContent = texts[clickCount - 1];
    }

    if (clickCount === texts.length) {
        modal.style.display = 'flex';
    }
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'success.html'; // Переход на новую страницу
});

noBtn.addEventListener('click', () => {
    noBtn.style.position = 'absolute';
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 20 + 10;
    const maxX = window.innerWidth - size;
    const randomX = Math.random() * maxX;
    heart.style.left = `${randomX}px`;

    heart.style.bottom = `-${size}px`;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.backgroundColor = `red`;

    const duration = Math.random() * 3 + 2; // От 2 до 5 секунд
    heart.style.animationDuration = `${duration}s`;

    const container = document.getElementById('hearts-container');
    container.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(() => {
    createHeart();
}, 100);