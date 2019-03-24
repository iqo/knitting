const express = require('express');
const db = require('../db/database');
const Picture = require('../domain/picture');

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(Picture.getAllPicturesSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json(
                // message:"Pictures listed.",
                data
            );
        }
    });    
});

router.get("/:pictureId", (req, res, next) => {
    let pid = req.params.pictureId;

    db.query(Picture.getPictureByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {
                
                res.status(200).json({
                    message:"Picture found.",
                    picture:data
                });
            } else {
                res.status(200).json({
                    message:"Picture Not found."
                });
            }
        } 
    });    
});

 router.post("/add", (req, res, next) => {
    let picture = new Picture(req.body.picture_name, req.body.picture_description); //Product(req.body.prd_name, req.body.prd_price);

    db.query(picture.getAddPictureSQL(), (err, data)=> {
        console.log("test", data);

        res.status(200).json({
            message:"picture added.",
           pictureId:data.pictureId
        });
    });
});



router.post("/delete", (req, res, next) => {

    var pid = req.body.pictureId;

    db.query(Picture.deletePictureByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.affectedRows > 0) {
                res.status(200).json({
                    message:`Picture deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message:"Picture Not found."
                });
            }
        } 
    });   
});

module.exports = router;