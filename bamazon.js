var mysql = require("mysql");
// var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Forchrist96!",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    myFunction();

});

function myFunction() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res)
        
        connection.end();

    });
}
