// posts.js
const blogPosts = [
    {
        id: 1,
        title: "4-day trip to New Orleans: Four Days is Too Much",
        date: "2024-10-23",
        time: "15:30",
        preview: "I've visited New Orleans for four days and I think that was a mistake. Here's why New Orleans is a 2-day city...",
        content: `I've visited New Orleans for four days and I think that was a mistake. New Orleans is a 2 day city. By the end of the second day, the ennui begins to strike and you start feeling  the passage of time, like " am I in a Nuri Ceylan movie or something"?

That said, I've had some cool learning experience at a couple of places that I found super interesting. The uber driver was a NOLA born and I barraged him with questions about the city for the duration of the trip; He said that NOLA was never colonised by the british, only by spanish and french and that the US later bought it or something and then he told me about the tombstomes being above ground bc of the floods that used to happen taken from the french model.

Now, The world war II musuem might just be one of the most educational history lessons I've ever had. I never thought of the musuem as a medium to learn about history before. I guess this time around I took my time to read through everything chronologically and experience the various events. You can read history books about the events that led to world war II and the imeense role of the US, but can you get the same educational depth you get at a 4 hours musuem tour, defifnitely not.

One of the other musuems that I really enjoyed hanging out at was the phramacy musuem where I've learned about chemicals used as medicine way before the invention of antibiotics and penicillin and all that jazz, simply unthinkable to wanna live at that time and experience the horror of getting down with syphilis, for example and  and having to surgically have your middle finger attached to your nose so that a new noise grows back.

I did a lot of walking, it looked like an aged city. while I was waking around bourbon street and Frenchman st, I walked into a random jazz club and there was a show about to begin and got a ticket and was an excellent 2hr event with funny/talented jazz orchestra.`,
        tags: ["travel", "new-orleans", "museums", "jazz"]
    }
];

// Function to render posts
function renderPosts() {
    const writingsContainer = document.querySelector('.writings-container');
    if (!writingsContainer) return;

    // Clear existing content
    writingsContainer.innerHTML = '';

    if (blogPosts.length === 0) {
        writingsContainer.innerHTML = `
            <p class="hacker-text blink-cursor">No articles published yet...</p>
        `;
        return;
    }

    // Add posts
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <div class="post-header">
                <h3 class="post-title">${post.title}</h3>
                <span class="post-meta">${post.date} | ${post.time}</span>
            </div>
            <div class="post-preview">${post.preview}</div>
        `;

        // Add click handler
        postElement.addEventListener('click', () => showPost(post));
        writingsContainer.appendChild(postElement);
    });
}

// Function to show full post
function showPost(post) {
    const writingsContainer = document.querySelector('.writings-container');
    writingsContainer.innerHTML = `
        <button class="back-button">← Back to writings</button>
        <article class="full-post">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">${post.date} | ${post.time}</div>
            <div class="post-content">${post.content}</div>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}
            </div>
        </article>
    `;

    document.querySelector('.back-button').addEventListener('click', () => {
        renderPosts();
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPosts);