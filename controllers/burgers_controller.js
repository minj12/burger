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

router.get("/", (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data 
        };
        console.log(hbsObject);
        res.render("index", hbsObject); 
    })
});

// Create Burger 
router.post("/api/burgers", (req, res) => {
    burger.insert([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured], result => {
        res.json({
            id: result.insertId
        });
    });
});

// Update Burger from list to devoured
router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js
module.exports = router;
