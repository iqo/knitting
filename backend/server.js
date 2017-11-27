var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var dbConfig    =   require("./config/database.config");
var mongoose    =   require("mongoose");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//require("./dbconnect/connectdb")(app);


//databse config-------------------------------------------
mongoose.connect(dbConfig.url, {useMongoClient: true});

mongoose.connection.on("error", function(){
    console.log("could not connect to the database");
    process.exit();
});

mongoose.connection.once("open", function(){
    console.log("connected to the database");
});

//---------------------------------------------------------

app.get('/', function(req, res){
    res.json({"message": "it works"});
});

//require routes-------------------------------------------
require("./app/routes/user.routes.js")(app);
//---------------------------------------------------------
app.listen(3000,function(){
    console.log("Server listenng on port 3000");
});

