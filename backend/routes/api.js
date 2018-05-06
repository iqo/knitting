/*import express from "express";
const router =  express.router();*/

const express = require('express');
const router = express.Router();

// get apt listing

router.get('/', ( req, res ) => {
    res.send('api works');
});

// export default router;
module.exports = router;