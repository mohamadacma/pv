export function initHackerEffect() {
    const hackerTexts = document.querySelectorAll('.hacker-text');
    const beepSound = document.getElementById('beep-sound');
    hackerTexts.forEach(text => {
        text.addEventListener('mouseover', () => {
            const originalText = text.textContent;
            let iteration = 0;

            const interval = setInterval(() => {
                text.textContent = originalText.split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);

            // play audio
            beepSound.currentTime = 1;
            beepSound.play();
        });
    });
}
