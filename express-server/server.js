// dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// API routes
const api = require('./routes/api');
const app = express();

// parser for post
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//set route
app.use('/', api);

 // get port from eniroment and store in express
 const port = process.env.port || '3000';
 app.set('port', port);

 // create server
 const server = http.createServer(app);

 // listen on port 
 server.listen(port, () => console.log(`API running on localhost:${port}`));