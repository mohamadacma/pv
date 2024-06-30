document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const sections = document.querySelectorAll('.section');
    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };
    const sectionObserver = new IntersectionObserver(fadeInSection, {
        root: null,
        threshold: 0.1
    });
    sections.forEach(section => sectionObserver.observe(section));


    const moviePosters = ['movie1.jpg', 'movie2.jpg', 'movie3.jpg'];
    const movieCarousel = document.getElementById('movieCarousel');
    moviePosters.forEach((poster, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `<img src="${poster}" class="d-block w-100" alt="Movie Poster ${index + 1}">`;
        movieCarousel.appendChild(item);
    });


    const series = ['Breaking Bad', 'Game of Thrones', 'Stranger Things', 'The Crown'];
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


    const musicVisualizer = document.getElementById('musicVisualizer');
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


    const books = ['book1.jpg', 'book2.jpg', 'book3.jpg', 'book4.jpg'];
    const bookshelf = document.getElementById('bookshelf');
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'col-md-3 col-sm-6 mb-3';
        bookDiv.innerHTML = `<img src="${book}" class="img-fluid" alt="Book Cover">`;
        bookshelf.appendChild(bookDiv);
    });
});