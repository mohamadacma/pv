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
        "Technology",
        "Philosophy",
        "Science",
        "Art",
        "Music"
    ];
    let currentIndex = 0;

    function typeNextInterest() {
        if (currentIndex < interests.length) {
            typeHorrorStyle(interests[currentIndex], container, () => {
                setTimeout(() => {
                    eraseText(container, () => {
                        currentIndex++;
                        typeNextInterest();
                    });
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
        }, 100);
    }

    function eraseText(element, callback) {
        const interval = setInterval(() => {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                playEraseSound();
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50);
    }

    function playTypeSound() {

        console.log('Type sound');
    }

    function playEraseSound() {

        console.log('Erase sound');
    }

    typeNextInterest();
}

document.addEventListener('DOMContentLoaded', function() {
    initEssentials();
    loadPhotoGallery();
    initHackerEffect();
    initModalHandler();
});