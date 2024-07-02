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
        item.innerHTML = `
               <div class="movie-poster-container">
                   <img src="${poster}" class="movie-poster" alt="Movie Poster ${index + 1}">
               </div>
           `;
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
    const podcasts = [
            {
                title: "All-In Podcast",
                description: "Industry veterans discuss tech, economics, and politics.",
                link: "https://open.spotify.com/show/2IqXAVFR4e0Bmyjsdc8QzF"
            },
            {
                title: "Plain English with Derek Thompson",
                description: "Clear explanations of the most interesting stories in business, science, and technology.",
                link: "https://open.spotify.com/show/51AAeGPvCO4ScUmXxP6Lgh"
            },
            {
                title: "Dwarkesh Podcast",
                description: "Conversations with economists, scientists, and technologists.",
                link: "https://open.spotify.com/show/3iJpUGgGD6XOJN5PT5kKoq"
            },
            {
                title: "EconTalk",
                description: "Economics conversations for the curious mind.",
                link: "https://open.spotify.com/show/3TeemcPgTqNmFmdHHeuAVh"
            },
            {
                title: "Conversations with Tyler",
                description: "In-depth conversations with thinkers across various fields.",
                link: "https://open.spotify.com/show/2Cr8dqJunkDZEq3fUQVi2n"
            },
            {
                title: "Switched on Pop",
                description: "Analyzing pop music and its cultural impact.",
                link: "https://open.spotify.com/show/1sgBmMBsvTUssYVGAEgrrI"
            },
            {
                title: "This American Life",
                description: "Weekly public radio program and podcast.",
                link: "https://open.spotify.com/show/2KYXQMYQSGDq1O5wYGYruz"
            },
            {
                title: "99% Invisible",
                description: "Design, architecture, and the 99% invisible activity that shapes our world.",
                link: "https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM"
            },
            {
                title: "The Ezra Klein Show",
                description: "In-depth conversations about ideas that matter.",
                link: "https://open.spotify.com/show/3oB5noYIwEB2dMAREj2F7S"
            },
            {
                title: "The Morgan Housel Podcast",
                description: "Exploring the psychology of money and investing.",
                link: "https://open.spotify.com/show/7ySLbGkTqTQC4T1Ssb5bcE"
            },
            {
                title: "How I Write",
                description: "Conversations with writers about their craft and creative process.",
                link: "https://open.spotify.com/show/3mOIH4BV0QNZRjZXO2SWpR"
            },
            {
                title: "The Ben and Marc Show",
                description: "Discussions on tech, startups, and venture capital.",
                link: "https://open.spotify.com/show/1uxSbwsqj50jE97e1qHDtE"
            },
            {
                title: "We're Not Getting Any Younger... Yet",
                description: "Exploring longevity, health, and the future of aging.",
                link: "https://open.spotify.com/show/3Oy7DTtqKTiEAWEnDLWpBu"
            }
        ];
        //podcasts
        const podcastList = document.getElementById('podcastList');
        if (podcastList) {
            podcasts.forEach(podcast => {
                const podcastCard = document.createElement('div');
                podcastCard.className = 'col-md-4 mb-3';
                podcastCard.innerHTML = `
                    <div class="card podcast-card">
                        <div class="card-body">
                            <h5 class="card-title">${podcast.title}</h5>
                            <p class="card-text">${podcast.description}</p>
                            <a href="${podcast.link}" class="btn btn-primary" target="_blank">Listen on Spotify</a>
                        </div>
                    </div>
                `;
                podcastList.appendChild(podcastCard);
            });
        } else {
            console.error("Podcast list container not found");
        }
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
