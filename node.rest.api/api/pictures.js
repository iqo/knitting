/* import express from "express";
import db from "../db/database";
import Picture from "../domain/picture"; */
const express = require('express');
const db = require('../db/database');
const Picture = require('../domain/picture');

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(Picture.getAllPicturesSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Pictures listed.",
                productId:data
            });
        }
    });    
});

/* router.post("/add", (req, res, next) => {

    //read product information from request
    let picture = new Picture(req.body.picture_name, req.body.picture_description); //Product(req.body.prd_name, req.body.prd_price);

    db.query(product.getAddProductSQL(), (err, data)=> {
        res.status(200).json({
            message:"picture added.",
            pictureId: data.insertId
        });
    });
}); */

/* router.get("/:pictureId", (req, res, next) => {
    let pid = req.params.pictureId;

    db.query(Picture.getProductByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {
                
                res.status(200).json({
                    message:"Picture found.",
                    picture: data
                });
            } else {
                res.status(200).json({
                    message:"Picture Not found."
                });
            }
        } 
    });    
}); */

/* router.post("/delete", (req, res, next) => {

    var pid = req.body.productId;

    db.query(Picture.deleteProductByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.affectedRows > 0) {
                res.status(200).json({
                    message:`Product deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message:"Product Not found."
                });
            }
        } 
    });   
}); */

module.exports = router;