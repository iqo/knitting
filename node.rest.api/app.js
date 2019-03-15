/* import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import pictures from "./api/pictures"; */
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const pictures = require('./api/pictures');


const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/pictures",pictures);
// app.use("/orders",orders);

//if we are here then the specified request is not found
app.use((req,res,next)=> {
    const err = new Error("Not Found app");
    err.status = 404;
    next(err);
});

//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});

module.exports = app;