// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});