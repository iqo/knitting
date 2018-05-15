/*import express from "express";
const router =  express.router();*/
const mongoose  = require('mongoose');
const express = require('express');
const router = express.Router();

 

// mongodb url from docker compose
const dbHost = 'mongodb://database/knittingDB';

// connect to monodb
mongoose.connect(dbHost);

// mongoise schema
const pictureSchema = new mongoose.Schema({
    pictureName: String,
    pictureDescription: String
});

// create mongoose model
const Picture = mongoose.model('Picture', pictureSchema);

// get apt listing

router.get( '/', ( req, res ) => {
    res.send('api works');
});

// get all pictures 
router.get( '/pictures', ( req, res ) => {
    Picture.find({}, ( err, pictures ) => {
        if( err ) res.status(500).send(error);

        res.status(200).json(pictures);

    });
});

// get one picture
router.get( '/pictures:id', ( req, res ) => {
    Picture.findById(req.param.id, (err, pictures) => {
        if(err) res.status(500).send(error);

        res.status(200).json(pictures);
    }); 
});

// create picture name and description 
router.post( 'pictures', ( req, res ) => {
    let picture = new Picture({
        pictureName: req.body.pictureName,
        pictureDescription: req.body.pictureDescription
    });

    picture.save( error => {
        if(error) res.status(500).send(error);

        res.status(201).json({
            message: 'picture uploaded seuccessfully'
        })
    });
});

// export default router;
module.exports = router;