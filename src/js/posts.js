// posts.js
const blogPosts = [
    {
        id: 1,
        title: "4-day trip to New Orleans: Four Days is Too Much",
        date: "2024-10-20",
        time: "15:30",
        preview: "I've visited New Orleans for four days and I think that was a mistake. Here's why New Orleans is a 2-day city...",
        content: `I've visited New Orleans for four days and I think that was a mistake. New Orleans is a 2-day city. By the end of the second day, the ennui begins to strike and you start feeling the passage of time, like "am I in a Nuri Ceylan movie or something"?

<img src="images/NOLAOne.jpeg" alt="New Orleans buildings" class="post-image" />
<span class="image-caption">The characteristic charm of New Orleans' historic streets</span>

That said, I've had some cool learning experiences at a couple of places that I found super interesting. The uber driver was a NOLA born and I barraged him with questions about the city for the duration of the trip; He said that NOLA was never colonized by the British, only by Spanish and French and that the US later bought it or something and then he told me about the tombstones being above ground because of the floods that used to happen taken from the French model.

<img src="images/NOLATwo.jpeg" alt="Bourbon Street" class="post-image" />
<span class="image-caption"></span>

Now, The World War II museum might just be one of the most educational history lessons I've ever had. I never thought of the museum as a medium to learn about history before. I guess this time around I took my time to read through everything chronologically and experience the various events. You can read history books about the events that led to World War II and the immense role of the US, but can you get the same educational depth you get at a 4 hours museum tour, definitely not.

<img src="images/NOLAFour.jpeg" alt="Trains" class="post-image" />
<span class="image-caption"></span>

One of the other museums that I really enjoyed hanging out at was the pharmacy museum where I've learned about chemicals used as medicine way before the invention of antibiotics and penicillin and all that jazz, simply unthinkable to wanna live at that time and experience the horror of getting down with syphilis, for example and having to surgically have your middle finger attached to your nose so that a new nose grows back.

<img src="images/NOLAFive.jpeg" alt="" class="post-image" />
<span class="image-caption"></span>

I did a lot of walking, it looked like an aged city. While I was walking around Bourbon Street and Frenchman St, I walked into a random jazz club and there was a show about to begin and got a ticket and was an excellent 2hr event with funny/talented jazz orchestra.

<img src="images/NOLASix.jpeg" alt="French Quarter Night" class="post-image" />
<span class="image-caption">The vibrant nightlife of the French Quarter</span>

<img src="images/NOLASeven.jpeg" alt="Jazz Club" class="post-image" />
<span class="image-caption">Live jazz performance - the soul of New Orleans</span>

<img src="images/NOLAEight.jpeg" alt="Street Scene" class="post-image" />
<span class="image-caption">got to the other side of the mississipi river by Ferry to try a taco place, worth it </span>`,
        tags: ["travel", "new-orleans", "museums", "jazz"]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Function to render posts
    function renderPosts() {
        const writingsContainer = document.querySelector('.writings-container');
        if (!writingsContainer) {
            console.error('Writings container not found');
            return;
        }

        // Clear existing content
        writingsContainer.innerHTML = '';

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

        document.querySelector('.back-button').addEventListener('click', renderPosts);
    }

    // Initialize
    renderPosts();
});