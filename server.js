const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// CRITICAL FIX: Serve files from the root directory (__dirname). 
// This makes the 'images' folder accessible at the root URL path (e.g., /images/...).
app.use(express.static(__dirname)); 

// Serve static files from 'pages' directory as well (for files referenced inside 'pages')
app.use(express.static(path.join(__dirname, 'pages')));


// Routes for each page
app.get('/', (req, res) => {
    // The main index.html file is in 'pages'
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'pages', 'about.html'));
// });

// app.get('/contactus', (req, res) => {
//     res.sendFile(path.join(__dirname, 'pages', 'contactus.html'));
// });

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Serving files from root (including images) and /pages directory.');
});