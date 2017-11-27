var User = require("../models/user.model.js");
var md5 = require("MD5");

exports.findAllUsers = function(req, res){
    //get all users from the database
    User.find(function(err, users){
        if(err){
            res.status(500).send({message: "error occured while retriving users"});
        } else{
            res.send(users);
        }
    });
};

exports.findUser =  function(req, res){
    //get a singel user by id 
    User.findById(req.params.userId, function(err,data){
        if(err){
            res.status(500).send({message: "error occured while retriving user whit id " + req.params.userId});
        } else{
            res.send(data);
        }
    });
};

exports.create = function(req, res){
    //create and save a new user
    if(!req.body.content){
        res.status(500).send({message: "need to fill in userr fields "});
    } 
    var user = new User({userEmail: req.body.email || "password",  userPassword: md5(req.body.password)});
    /*var user = new User();
    user.userEmail = req.body.email;
    user.userPassword = md5(req.body.password);*/

    user.save(function(err, data){
        console.log(data);
        if(err){
            console.log(err);
            res.status(500).send({message: "error occurred while creating the user."});
        } else{
            res.send(data);
        }
    });
};

exports.update = function(req, res){
    // update a user by id
    User.findById(req.params.userId, function(err, user){
        if(err){
            res.status(500).send({message: "error occured while retriving user whit id " + req.params.userId});
        }
        user.userEmail = req.body.userEmail;
        user.userPassword = md5(req.body.userPassword);
        user.save(function(err,data){
            if(err){
                res.status(500).send({message: "could not update user whit id " + req.params.userId});
            } else{
                res.send(data);
            }
        });
    });
}

exports.delete = function(req, res){
    // delete a user whit the id
    User.remove({_id: req.params.userId}, function(err, data){
        if(err){
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        }
        else{
            res.send({message: "user deleted succesfully"})
        }
    });
};