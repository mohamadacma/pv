body, html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
    color: #e0e0e0;
    background-color: #121212;
}

#cinematic-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(45deg, #000000, #1a1a1a);
    opacity: 0.9;
}

header {
    background-color: rgba(0, 0, 0, 0.7);
}

.navbar {
    background-color: rgba(0, 0, 0, 0.5);
}

main {
    padding: 2em 0;
}

.section {
    margin-bottom: 3em;
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

.section:hover {
    transform: translateY(-5px);
}

h2 {
    color: #ffd700;
    margin-bottom: 1em;
}

.animate-title {
    animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
    from { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de; }
    to { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de; }
}

.typewriter {
    overflow: hidden;
    border-right: .15em solid #ffd700;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #ffd700; }
}

#movieCarousel, #musicVisualizer {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

#seriesGrid .card, #bookshelf .card, #photoGallery .card {
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #333;
    transition: transform 0.3s;
}

#seriesGrid .card:hover, #bookshelf .card:hover, #photoGallery .card:hover {
    transform: scale(1.05);
}

#photoGallery .card {
    overflow: hidden;
}

#photoGallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

#photoGallery .card:hover img {
    transform: scale(1.1);
}

#projects {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2em;
    border-radius: 10px;
    margin-bottom: 3em;
}

#projects h3 {
    color: #ffd700;
    margin-bottom: 1em;
}

#projects .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    transition: background-color 0.3s ease;
}

#projects .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

footer {
    background-color: rgba(0, 0, 0, 0.7);
    color: #e0e0e0;
}