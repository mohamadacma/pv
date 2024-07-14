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
        "Bio-Technology",
        "Longevity",
        "Philosophy",
        "Music Theory",
        "Movies",
        "Music",
        "American History"
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
            element.textContent = text;
            element.style.opacity = '0';
            element.style.transform = 'scale(0.5)';

            setTimeout(() => {
                element.style.transition = 'opacity 0.5s, transform 0.5s';
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
                playTypeSound();

                setTimeout(callback, 500);
            }, 100);
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