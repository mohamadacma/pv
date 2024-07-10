export function initTypewriter() {
    const text = `Hello! I'm M!\n and this is my cafe!`;
    const typingElement = document.querySelector('.typewriter-text');
    typingElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }

    typeWriter();
}

function initWritingsSection() {
    const writingsContainer = document.querySelector('.writings-container');
    writingsContainer.addEventListener('click', () => {
        alert('No articles available yet. Check back soon!');
    });
}