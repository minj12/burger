// Connection to MySql 
const connection = require("../config/connection.js");

//function for SQL code
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}