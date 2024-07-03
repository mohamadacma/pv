document.addEventListener('DOMContentLoaded', function() {
    initEssentials();
    lazyLoadImages();
    initIntersectionObserver();
});

function initEssentials() {
    initCinematicBackground();
    initSmoothScrolling();
    initTypewriter();
}

function initCinematicBackground() {
    const bg = document.getElementById('cinematic-bg');
    setInterval(() => {
        bg.style.background = `linear-gradient(${Math.random() * 360}deg, #000000, #1a1a1a)`;
    }, 5000);
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function initTypewriter() {
    const text = `Hello! I'm Mohamad!\n dee-lighted to meet you!`;
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
$('#demoModal').on('show.bs.modal', function (e) {
    $("#demoVideo").attr('src', "https://www.youtube.com/embed/ZFs42j0D8qI");
})

$('#demoModal').on('hide.bs.modal', function (e) {
    $("#demoVideo").attr('src', "");
})

function lazyLoadImages() {
    const images = document.querySelectorAll('img.lazy');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
    });
}

function initIntersectionObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'photoGallery') {
                    loadPhotoGallery();
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(document.querySelector('#photoGallery'));
}

function loadPhotoGallery() {
    const photos = [
        'images/image6.jpeg',
        'images/image7.jpeg',
        'images/image8.jpeg',
        'images/image9.jpeg',
        'images/image10.jpeg',
        'images/image12.jpeg',
        'images/image13.jpeg',
        'images/image14.jpeg'
    ];
    const photoGallery = document.getElementById('photoGallery');
    photos.forEach(photo => {
        const img = new Image();
        img.onload = function() {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'col-md-4 col-sm-6 mb-3';
            photoDiv.innerHTML = `
                <div class="card">
                    <img src="${photo}" class="card-img-top" alt="Photography">
                </div>
            `;
            photoGallery.appendChild(photoDiv);
        };
        img.onerror = function() {
            console.error(`Failed to load image: ${photo}`);
        };
        img.src = photo;
    });
}
