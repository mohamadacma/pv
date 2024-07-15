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
    const container = document.querySelector('.horror-typewriter-text');
    const interests = [
        "BIO-TECHNOLOGY",
        "LONGEVITY",
        "ENGINEERING",
        "MUSIC THEORY",
        "OBSCURE FILM",
        "HISTORY",
        "GREAT BOOKS",
        "FOOD",
        "PHOTOGRAPHY"
    ];
    let currentIndex = 0;

function showNextInterest() {
        if (currentIndex < interests.length) {
            container.textContent = interests[currentIndex];
            container.style.opacity = '0';
            container.style.transform = 'scale(0.5)';

            setTimeout(() => {
                container.style.transition = 'opacity 0.5s, transform 0.5s';
                container.style.opacity = '1';
                container.style.transform = 'scale(1)';
                playTypeSound();

                setTimeout(() => {
                    container.style.opacity = '0';
                    container.style.transform = 'scale(0.5)';
                    setTimeout(() => {
                        currentIndex++;
                        showNextInterest();
                    }, 500);
                }, 1500);
            }, 100);
        } else {
            // Restart the sequence
            currentIndex = 0;
            showNextInterest();
        }
    }


    function playTypeSound() {

        const audio = new Audio('media/scary-type-sound.mp3');
        audio.play();
    }

    showNextInterest();
}

document.addEventListener('DOMContentLoaded', function() {
    initEssentials();
    loadPhotoGallery();
    initHackerEffect();
    initModalHandler();
});