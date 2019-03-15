//import http from "http";
//import app from "./app";
const http = require('http');
const app = require('./app');

const port = process.env.port || 6001;

const server = http.createServer(app);
// server.listen(port);
server.listen(port, () => console.log(`API running on localhost:${port}`));