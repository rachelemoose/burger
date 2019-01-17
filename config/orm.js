// Import (require) MySQL Connection
var connection = require("../config/connection.js");

// Methods that will execute necessary MySQL commands in the controllers
// Methods that are needed to retrieve and store data in the database
var orm = {
    // selectAll()
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // insertOne()
    insertOne: function(burger_name, callback) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false,  
        }, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }, 
    // updateOne()
    updateOne: function(id, callback)
    {
        
    }