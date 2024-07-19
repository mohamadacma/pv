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
    initMenuItems();
}

function initHorrorTypewriter() {
    const container = document.querySelector('.horror-typewriter-text');
    const interests = [
        "CRISPR",
        "BRIDGE RNA",
        "BLUEPRINT",
        "BORGES",
        "DONT DIE,
        "STARSHIP",
        "DONT DIE",
        "DAFT PUNK",
        "AWS",
        "ELECTRIC SHEEP",
        "GORBASHEV",
        "TIKA MASALA",
        "LAURIE ANDERSON",
        "FEVER RAY",
        "M.I.A",
        "FOOLED BY RANDOMNESS",
        "CHEMICAL BROTHERS",
        "IBN BATTUTA",
        "BOYZ NOISE",
        "DONT DIE",
        "HERMETO PASCOAL",
        "BENJAMIN FRANKLIN",
        "THEODORE ROOSEVELT",
        "ALEXANDER HAMILTON",
        "FEDERALIST PAPERS",
        "BAD SCIENCE",
        "ANTIFRAGILE",
        "DONT DIE"
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

function initMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    initEssentials();
    loadPhotoGallery();
    initHackerEffect();
    initModalHandler();

});