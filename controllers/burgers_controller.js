// Import Express
var express = require('express');
// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create the router for the app
var router = express.Router();

// Create routes for pages - no specification with route to main burgers page
router.get("/", function(req, res) {
    res.redirect("/index");
});

// Index/Main Burgers Page
router.get("/index", function (req,res)
{
    burger.selectAll(function (data)
    {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create a new burger page which redirects to home page when done
router.post("/burger/create", function (req,res)
{
    burger.insertOne(req.body.name, function()
    {
        res.redirect("/index");
    });
});

// Devour a burger page which reddirects to home page when done
router.post("/burger/eat/:id", function(req, res)
{
    burger.updateOne(req.params.id, function()
    {
        res.redirect("/index");
    });
});

// Export routes
module.exports = router;