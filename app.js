const express = require('express');
const notify = require('./utils/notify');
const notifer = require('node-notifier');
const app = express();

// Create an instance of the http server to handle HTTP requests
app.get('/', function(req, res){
    notify.notify();
 });

// Start the server on port 8080
app.listen(8080, '127.0.0.1');