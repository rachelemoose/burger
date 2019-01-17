// Setup MYSQL connection
var mysql = require("mysql");

// MySQL DB connection information 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gocaps!11",
    database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id: " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;