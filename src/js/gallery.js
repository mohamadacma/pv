const PLACEHOLDER_IMAGE = 'images/placeholder.png';

export function loadPhotoGallery() {
    const photos = [
        'images/image6.jpeg',
        'images/image7.jpeg',
        'images/image8.jpeg',
        'images/image9.jpeg',
        'images/image10.jpeg',
        'images/image12.jpeg',
        'images/image13.jpeg',
        'images/image14.jpeg',
        'images/image20.jpeg',
        'images/image21.jpeg',
        'images/image23.jpeg',
        'images/image0.jpeg',
        'images/image100.jpeg',
        'images/image1000.jpeg'
    ];
    const photoGallery = document.getElementById('photoGallery');
    photos.forEach(photo => {
        const img = new Image();
        img.onload = function() {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'col-md-4 col-sm-6 mb-3';
            photoDiv.innerHTML = `
                <div class="card">
                    <img class="card-img-top lazy" src="${PLACEHOLDER_IMAGE}" data-src="${photo}" alt="Photography">
                </div>
            `;
            photoGallery.appendChild(photoDiv);
        });
         lazyLoadImages();
         }
        img.onerror = function() {
            console.error(`Failed to load image: ${photo}`);
        };
        img.src = photo;
    });
}

export function lazyLoadImages() {
    const images = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => {
                img.classList.add('loaded');
                img.classList.remove('lazy');
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${img.dataset.src}`);
            };
            observer.unobserve(img);
            }
    });
});
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
    }

export function initIntersectionObserver() {
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

