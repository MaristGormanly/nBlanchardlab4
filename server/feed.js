const posts = [
    { title: "New song!", body: "Check it out now!", url: "sampleimg.jpeg" },
    { title: "Live this Friday!", body: "Don't miss the show!", url: "sampleimg.jpeg" },
    { title: "A new drummer!", body: "If you're interested, contact us!", url: "sampleimg.jpeg" },
    { title: "Music festival lineup announced!", body: "Big names on the list!", url: "sampleimg.jpeg" },
    { title: "Album is out now!", body: "Stream it everywhere!", url: "sampleimg.jpeg" },
    { title: "Album available!", body: "Get it before it's gone!", url: "sampleimg.jpeg" },
    { title: "New indie band here.", body: "Explore fresh sounds!", url: "sampleimg.jpeg" },
    { title: "Hiring session!", body: "Join us for a fun session!", url: "sampleimg.jpeg" },
    { title: "Signed a record deal!", body: "Big news in the industry!", url: "sampleimg.jpeg" },
    { title: "New mixing!", body: "Learn from the best!", url: "sampleimg.jpeg" }
];

// posts
function renderFeed(posts) {
    const feedContainer = document.getElementById('feed');
    feedContainer.innerHTML = '';

    // Loop through post/s
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');  // styling

        const title = document.createElement('h3');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        const image = document.createElement('img');
        image.src = post.url;
        image.alt = post.title;

        postDiv.appendChild(title);
        postDiv.appendChild(body);
        postDiv.appendChild(image);

        feedContainer.appendChild(postDiv);
    });
}

// Call function to read posts
document.addEventListener('DOMContentLoaded', function() {
    renderFeed(posts);
});
