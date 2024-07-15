export function initTypewriter() {
    const text = `Hello! I'm Mohamad!\n Thanks for stopping by the neo-junto cafe! `;
    const typingElement = document.querySelector('.tarantino-typewriter-text');
    typingElement.textContent = '';
    let i = 0;

   function typeWriter() {
           if (i < text.length) {
               typingElement.textContent += text.charAt(i);
               i++;
               setTimeout(typeWriter, 50);
           } else {
               // Start the interests animation when typing is done
               initHorrorTypewriter();
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