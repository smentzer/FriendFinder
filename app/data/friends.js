var express = require("express")
var mysql = require("mysql")
var path = require("path")


//create express server 
var app = express();

//initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




