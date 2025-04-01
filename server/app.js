const express = require('express');
const path = require('path');

const app = express();
const PORT = 1337;

app.use(express.static(__dirname));

// Route for page1.html
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'page1.html'));
});

// Route for login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
