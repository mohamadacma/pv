document.addEventListener('DOMContentLoaded', function() {
    // Cinematic background
    const bg = document.getElementById('cinematic-bg');
    setInterval(() => {
        bg.style.background = `linear-gradient(${Math.random() * 360}deg, #000000, #1a1a1a)`;
    }, 5000);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const moviePosters = [
        'images/movie1.jpeg',
        'images/movie2.jpeg',
        'images/movie3.jpeg',
        'images/movie4.jpeg',
        'images/movie5.jpeg'
    ];

    // Movie carousel
    const movieCarousel = document.querySelector('#movieCarousel .carousel-inner');
    moviePosters.forEach((poster, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `<img src="${poster}" class="d-block w-100" alt="Movie Poster ${index + 1}">`;
        movieCarousel.appendChild(item);
    });

    // Series grid
    const series = ['The Leftovers', 'Game of Thrones', 'Blackadder', 'Misfits'];
    const seriesGrid = document.getElementById('seriesGrid');
    series.forEach(show => {
        const card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6 mb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${show}</h5>
                </div>
            </div>
        `;
        seriesGrid.appendChild(card);
    });

    // Music visualizer
    const musicVisualizer = document.getElementById('musicVisualizer');
    if (musicVisualizer) {
        const ctx = musicVisualizer.getContext('2d');
        function drawVisualizer() {
            ctx.clearRect(0, 0, musicVisualizer.width, musicVisualizer.height);
            for (let i = 0; i < 20; i++) {
                const height = Math.random() * musicVisualizer.height;
                ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
                ctx.fillRect(i * 20, musicVisualizer.height - height, 15, height);
            }
            requestAnimationFrame(drawVisualizer);
        }
        drawVisualizer();
    } else {
        console.error("Canvas element 'musicVisualizer' not found.");
    }

    // Bookshelf
    const books = ['images/book1.jpeg', 'images/book2.jpeg', 'images/book3.jpeg', 'images/book4.jpeg'];
    const bookshelf = document.getElementById('bookshelf');
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'col-md-3 col-sm-6 mb-3';
        bookDiv.innerHTML = `
            <div class="card">
                <img src="${book}" class="card-img-top" alt="Book Cover">
            </div>
        `;
        bookshelf.appendChild(bookDiv);
    });

    // Photo gallery
    const photos = [
        'images/image6.jpeg',
        'images/image7.jpeg',
        'images/image8.jpeg',
        'images/image9.jpeg'
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
});
