module.exports = function(app){
    var users = require("../controllers/user.controller.js");
    //get all users
    app.get("/users", users.findAllUsers);

    //get singel user by id
    app.get("/users/:userId", users.findUser);

    //create new user
    app.post("/users", users.create);

    //update user whit user id 
    app.put("/users/:userId", users.update);

    //delete user whit id 
    app.delete("/users/:userId", users.delete);
};