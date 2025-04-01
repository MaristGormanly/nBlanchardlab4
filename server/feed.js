const posts = [
    { title: "🎸 Band A just released a new song!", body: "Check it out now!", url: "" },
    { title: "🔥 Band B is playing live this Friday!", body: "Don't miss the show!", url: "" },
    { title: "🎶 Band C is looking for a new drummer!", body: "If you're interested, contact us!", url: "" },
    { title: "📣 Music fest lineup announced!", body: "Big names on the list!", url: "" },
    { title: "🎤 Band D's new album is out now!", body: "Stream it everywhere!", url: "" },
    { title: "📀 Vinyl reissue of classic album available!", body: "Get it before it's gone!", url: "" },
    { title: "🎧 Discover new indie bands here.", body: "Explore fresh sounds!", url: "" },
    { title: "🎼 Band E is hosting an open jam session!", body: "Join us for a fun session!", url: "" },
    { title: "🚀 Band F signed a record deal!", body: "Big news in the industry!", url: "" },
    { title: "🎹 Producer G shares new mixing tips.", body: "Learn from the best!", url: "" }
];

// Function to render the posts
function renderFeed(posts) {
    const feedContainer = document.getElementById('feed');  // Get the feed container element

    // Clear any previous content in the feed
    feedContainer.innerHTML = '';

    // Loop through each post and create HTML elements
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');  // Add a class for styling

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

// Call the function to render the feed when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderFeed(posts);
});
