var express = require("express");
var app = express();
const router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var request = require("request");
var Schema = mongoose.Schema;

var configurations = require("./conf/conf");
var DBUSER = configurations.development.user; // should taken from env
var DBPASSWORD = configurations.development.password; // should taken from env
var DOMAIN = configurations.development.domain; // should taken from env
var PORT = configurations.development.port; // should taken from env

//route paths
const ownerPath = require("./routes/owners")(router);
const petPath = require("./routes/pets")(router);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
app.use(cors());
app.use(express.static(__dirname + "/public"));

mongoose.connect(
  "mongodb://" +
    DBUSER +
    ":" +
    DBPASSWORD +
    "@" +
    DOMAIN +
    ":" +
    PORT +
    "/adform"
);

//Api routes
app.use("/api/owners", ownerPath);
app.use("/api/pets", petPath);

app.listen(port, function() {
  console.log("app running...!");
});
