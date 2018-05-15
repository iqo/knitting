// get dependencies
/*import express from "express";
import path from "path";
import http from "http";
import bodyParser from "body-parser";
// api routes
import api from "./routes/api";*/

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/api');

const app = express();
// parser for post data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

// set api routes
app.use('/', api);

// store enviroment port in express
const port = process.env.PORT || '3000';

app.set('port', port);

// create http server
const server = http.createServer(app);

// listen on provided port

server.listen(port, () => console.log(`API running on localhost:${port}`));