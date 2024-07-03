
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
    const text = `Hello! I'm Mohamad!
Welcome to the Neo-Junto cafe!
`;

    const typingElement = document.querySelector('.typewriter-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            addInteractiveElements();
        }
    }

    typeWriter();
}

function addInteractiveElements() {
    const container = document.getElementById('welcome-message');

    const quill = document.createElement('img');
    quill.src = 'quill-pen-icon.png';
    quill.className = 'quill-icon';
    container.appendChild(quill);

    const coffeeStain = document.createElement('div');
    coffeeStain.className = 'coffee-stain';
    container.appendChild(coffeeStain);
}

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
                if (entry.target.id === 'podcastList') {
                    initPodcastSphere();
                } else if (entry.target.id === 'photoGallery') {
                    loadPhotoGallery();
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(document.querySelector('#podcastList'));
    observer.observe(document.querySelector('#photoGallery'));
}

function initPodcastSphere() {
    const podcasts = [
        { title: "All-In Podcast", description: "Industry veterans discuss tech, economics, and politics.", link: "https://open.spotify.com/show/2IqXAVFR4e0Bmyjsdc8QzF" },
        { title: "Plain English with Derek Thompson", description: "Clear explanations of the most interesting stories in business, science, and technology.", link: "https://open.spotify.com/show/51AAeGPvCO4ScUmXxP6Lgh" },
        { title: "Dwarkesh Podcast", description: "Conversations with economists, scientists, and technologists.", link: "https://open.spotify.com/show/3iJpUGgGD6XOJN5PT5kKoq" },
        { title: "EconTalk", description: "Economics conversations for the curious mind.", link: "https://open.spotify.com/show/3TeemcPgTqNmFmdHHeuAVh" },
        { title: "Conversations with Tyler", description: "In-depth conversations with thinkers across various fields.", link: "https://open.spotify.com/show/2Cr8dqJunkDZEq3fUQVi2n" },
        { title: "Switched on Pop", description: "Analyzing pop music and its cultural impact.", link: "https://open.spotify.com/show/1sgBmMBsvTUssYVGAEgrrI" },
        { title: "This American Life", description: "Weekly public radio program and podcast.", link: "https://open.spotify.com/show/2KYXQMYQSGDq1O5wYGYruz" },
        { title: "99% Invisible", description: "Design, architecture, and the 99% invisible activity that shapes our world.", link: "https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM" },
        { title: "The Ezra Klein Show", description: "In-depth conversations about ideas that matter.", link: "https://open.spotify.com/show/3oB5noYIwEB2dMAREj2F7S" },
        { title: "The Morgan Housel Podcast", description: "Exploring the psychology of money and investing.", link: "https://open.spotify.com/show/7ySLbGkTqTQC4T1Ssb5bcE" },
        { title: "How I Write", description: "Conversations with writers about their craft and creative process.", link: "https://open.spotify.com/show/3mOIH4BV0QNZRjZXO2SWpR" },
        { title: "The Ben and Marc Show", description: "Discussions on tech, startups, and venture capital.", link: "https://open.spotify.com/show/1uxSbwsqj50jE97e1qHDtE" },
        { title: "We're Not Getting Any Younger... Yet", description: "Exploring longevity, health, and the future of aging.", link: "https://open.spotify.com/show/3Oy7DTtqKTiEAWEnDLWpBu" }
    ];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('podcastList').innerHTML = '';
    document.getElementById('podcastList').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x444444, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 15;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    podcasts.forEach((podcast, index) => {
        const position = spherePosition(index, podcasts.length);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(generateSpriteTexture(podcast.title)),
            transparent: true,
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(1, 1, 1);
        sprite.userData = podcast;
        sphere.add(sprite);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
}
function showPodcastSphere() {
    // Hide the grid container
    document.querySelector('.grid-container').style.display = 'none';

    // Show the podcast list container
    document.getElementById('podcastList').style.display = 'block';

    // Initialize the podcast sphere
    initPodcastSphere();
}
function showGrid() {
    document.querySelector('.grid-container').style.display = 'grid';
    document.getElementById('podcastList').style.display = 'none';
    document.getElementById('backToGrid').style.display = 'none';
}

function spherePosition(i, total) {
    const phi = Math.acos(-1 + (2 * i) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    return new THREE.Vector3(
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(phi)
    ).multiplyScalar(5);
}

function generateSpriteTexture(text) {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgba(255, 255, 255, 0.8)';
    context.fillRect(0, 0, size, size);
    context.fillStyle = '#000000';
    context.font = '24px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    const words = text.split(' ');
    let line = '';
    let y = size / 2 - 24;
    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = context.measureText(testLine);
        if (metrics.width > size - 20) {
            context.fillText(line, size / 2, y);
            line = words[i] + ' ';
            y += 28;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, size / 2, y);

    return canvas;
}

function onMouseMove(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(sphere.children);

    sphere.children.forEach(child => {
        child.material.color.setHex(0xffffff);
    });

    if (intersects.length > 0) {
        intersects[0].object.material.color.setHex(0xff0000);
        showPodcastInfo(intersects[0].object.userData);
    } else {
        hidePodcastInfo();
    }
}

function showPodcastInfo(podcast) {
    const infoDiv = document.getElementById('podcastInfo') || document.createElement('div');
    infoDiv.id = 'podcastInfo';
    infoDiv.innerHTML = `
        <h3>${podcast.title}</h3>
        <p>${podcast.description}</p>
        <a href="${podcast.link}" target="_blank" class="btn btn-primary">Check it</a>
    `;
    infoDiv.style.position = 'absolute';
    infoDiv.style.top = '10px';
    infoDiv.style.left = '10px';
    infoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    infoDiv.style.color = 'white';
    infoDiv.style.padding = '10px';
    infoDiv.style.borderRadius = '5px';
    document.getElementById('podcastList').appendChild(infoDiv);
}

function hidePodcastInfo() {
    const infoDiv = document.getElementById('podcastInfo');
    if (infoDiv) infoDiv.remove();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function loadPhotoGallery() {
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
}