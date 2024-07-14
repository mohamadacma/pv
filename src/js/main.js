import { initTypewriter } from './typewriter.js';
import { loadPhotoGallery } from './gallery.js';
import { initHackerEffect } from './hackerEffect.js';
import { initModalHandler } from './modalHandler.js';
import { initSmoothScrolling } from './smoothScroll.js';
import { showGrid } from './gridHandler.js';

function initEssentials() {
    initSmoothScrolling();
    initTypewriter();
    initHorrorTypewriter();
}

function initHorrorTypewriter() {
    const container = document.querySelector('.horror-typewriter-container');
    const interests = [
        "Technology",
        "Philosophy",
        "Science",
        "Art",
        "Music"
    ];
    let currentIndex = 0;

    function typeNextInterest() {
        if (currentIndex < interests.length) {
            const interestElement = document.createElement('div');
            interestElement.classList.add('horror-typewriter-text');
            container.appendChild(interestElement);

            typeHorrorStyle(interests[currentIndex], interestElement, () => {
                setTimeout(() => {
                    currentIndex++;
                    typeNextInterest();
                }, 1000);
            });
        }
    }

    function typeHorrorStyle(text, element, callback) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                playTypeSound();
                index++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 150);
    }

    function playTypeSound() {

        const audio = new Audio('media/scary-type-sound.mp3');
        audio.play();
    }

    typeNextInterest();
}

document.addEventListener('DOMContentLoaded', function() {
    initEssentials();
    loadPhotoGallery();
    initHackerEffect();
    initModalHandler();
});