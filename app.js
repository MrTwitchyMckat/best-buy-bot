const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
// Require controllers
const cardHandler = require('./controllers/cardHandler');

// Require utils
const fetchUrl = require('./utils/fetchUrl');

// Create an instance of the http server to handle HTTP requests
app.get('/data/cards.json', async (req, res) => {
    res.sendFile(path.join(__dirname, '/data/', 'cards.json'));
});
app.get('/data/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/data/', 'data.json'));
});
// Kill app on ctrl + c
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(1);
});

// Constantly update cards.json
const cards = fetchUrl.fetchUrl(`http://localhost:8080/data/data.json`)
setInterval(async() => {
    cardJSON = await cardHandler.cardHandler(cards);
    fs.writeFileSync('./data/cards.json', JSON.stringify(cardJSON));
}, 5000);

// Start the server on port 8080
app.listen(8080, '127.0.0.1');
