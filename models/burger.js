// A model for how to interface with the database
// Import orm.js 
var orm = require('../config/orm.js');

// Code that wull call the ORM functions using burger specific input for the ORM
var burgermodel = 
{
    selectAll: function(callback)
    {
        orm.selectAll(function(res)
        {
            callback(res);
        });
    },
    insertOne: function(burger_name, callback)
    {
        orm.insertOne(burger_name, function(res)
        {
            callback(res);
        });
    },
    updateOne: function(id, callback)
    {
        orm.updateOne(id, function(res)
        {
            callback(res);
        });
    }
};

// Export at the end of the burger.js file
module.exports = burgermodel;