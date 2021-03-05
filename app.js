// app.js
const checkProduct = require('./utils/checkProducts');
const express = require('express');
const app = express();

// Create an instance of the http server to handle HTTP requests
app.get('/', function(req, res){
    checkProduct.checkProduct();
 });

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');