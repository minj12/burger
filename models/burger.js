//Handles the variables for the DB in ORM (All, Insert, Update)
var orm = require("../config/orm");

var burger = {
    all: callback => {
        orm.selectAll("burgers", res => {
            callback(res);
        })
    },

    insert: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, res => {
            callback(res);
        });
    },

    update: (objColVals, condition, callback) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            callback(res);
        })
    }

}

// Exports the database functions for the burger_controller.js
module.exports = burger;
