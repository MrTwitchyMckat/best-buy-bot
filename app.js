const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

// Require controllers
const cardHandler = require('./controllers/cardHandler');

// Require utils
const fetchUrl = require('./utils/fetchUrl');

// Create an instance of the http server to handle HTTP requests
app.get('/data/cards', async (req, res) => {
    const cards = fetchUrl.fetchUrl(`http://${req.headers.host}/data/data.json`)
    cardJSON = await cardHandler.cardHandler(cards);
    res.json(cardJSON);
});
app.get('/data/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/data/', 'data.json'));
});
// Kill app on ctrl + c
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(1);
});
// Start the server on port 8080
app.listen(8080, '127.0.0.1');
