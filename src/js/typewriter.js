export function initTypewriter() {
    const text = `Hello! I'm M!\n and this is my cafe! I am interested in`;
    const typingElement = document.querySelector('.tarantino-typewriter-text');
    typingElement.textContent = '';
    let i = 0;

   function typeWriter() {
           if (i < text.length) {
               if (text.charAt(i) === '\n') {
                   typingElement.innerHTML += '<br>';
               } else {
                   typingElement.textContent += text.charAt(i);
               }
               i++;
               setTimeout(typeWriter, 100);
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