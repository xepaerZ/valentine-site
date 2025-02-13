let clickCount = 0;
let heartCount = 0;
const maxHearts = 50;
const modal = document.getElementById('modal');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainText = document.getElementById('main-text');
const continueText = document.getElementById('continue-text');

const texts = [
    "Ты заслуживаешь каждой звезды, которая есть на небе",
    "Просто хорошо быть рядом с тобой",
    "Я выбираю и буду продолжать выбирать тебя",
    "Ты, с кем я хочу любоваться закатом"
];

document.addEventListener('click', () => {
    continueText.style.visibility = 'visible'
    clickCount++;
    if (clickCount <= texts.length) {
        mainText.textContent = texts[clickCount - 1];
    }

    if (clickCount === texts.length + 1) {
        modal.style.display = 'flex';
    }
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'success.html';
});

noBtn.addEventListener('click', () => {
    noBtn.style.position = 'absolute';
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

function createHeart() {
    if (heartCount >= maxHearts) return;

    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = 24;
    const maxX = window.innerWidth - size;
    const randomX = Math.random() * maxX;
    heart.style.left = `${randomX}px`;

    heart.style.bottom = `-${size}px`;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.backgroundColor = `red`;

    const duration = Math.random() * 5 + 4;
    heart.style.animationDuration = `${duration}s`;

    const container = document.getElementById('hearts-container');
    container.appendChild(heart);

    heartCount++;

    heart.addEventListener('animationend', () => {
        heart.remove();
        heartCount--;
    });
}

function autoSpawnHearts() {
    if (heartCount < maxHearts) {
        createHeart();
    }
}

setInterval(autoSpawnHearts, 100);