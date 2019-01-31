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

// Helper function Sql syntax
var objToSql = (ob) => {
    var arr = [];
  
for (var key in ob) {
    var value = ob[key];



 // check to skip hidden properties
 if (Object.hasOwnProperty.call(ob, key)) {
      
    // if string with spaces, add quotations (Spicy Patriot Burger => 'Spicy Patriot Burger')
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
      value = "'" + value + "'";
    }
    // e.g. {name: 'Spicy Patriot Burger'} => ["name='Spicy Patriot Burger'"]
    arr.push(key + "=" + value);
  }
}

// translate array of strings to a single comma-separated string
return arr.toString();
}

// Here is the Object Relational Mapper (ORM) where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.
var orm = {

selectAll: (tableInput, callback) => {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, (err, result) => {
    if (err) {
      throw err;
    }
    callback(result);
  });
},

// objColVals would be the columns and values that we want to Insert
insertOne: (table, cols, vals, callback) => {
  var queryString = "INSERT INTO " + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += printQuestionMarks(vals.length);
  queryString += ") ";

  console.log(queryString);

  connection.query(queryString, vals, (err, result) => {
    if (err) {
      throw err;
    }

    callback(result);
  });

},
// objColVals would be the columns and values that we want to update
updateOne: (table, objColVals, condition, callback) => {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  connection.query(queryString, (err, results) => {
    if (err) throw err;

    callback(results);

  });
}

}
// Export (Object Relational Mapper) ORM
module.exports = orm;

       