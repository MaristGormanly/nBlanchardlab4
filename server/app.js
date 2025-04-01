const express = require('express');
 const path = require('path');
 
 const app = express();
 const PORT = 1337;
 
 app.use(express.static(__dirname)); 
 
 app.get('/page1', (req, res) => {
     res.sendFile(path.join(__dirname, 'page1.html'));
 });
 
 app.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}/`);
 });
