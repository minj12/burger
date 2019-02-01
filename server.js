
//Dependancies
var express = require("express");
var bodyParser = require("body-parser");

//Define port the server will be listening
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access 
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start the server so that it can begin listening to client requests.
app.listen(PORT, function() {
  
  // Log (server-side) when the server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

