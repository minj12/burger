//Dependencies
//ROUTER FILE - using the keywords from ORM (ALL, INSERT, and UPDATE)
var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

// Get Burgers the FROM the DB to DOM
router.get("/", (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data 
        };
        console.log(hbsObject);
        res.render("index", hbsObject); 
    })
});
