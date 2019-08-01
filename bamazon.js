var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Forchrist96!",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // myFunction();
    // queryCandy();
    start();
});

// function queryCandy() {
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//             console.log(res[i].item_id + " | " + res[i].product_name);
//         }
//         console.log("-----------------------------------");
//     });
// }

// // function myFunction() {
// //     connection.query("SELECT * FROM products", function(err, res) {
// //         if (err) throw err;
// //         console.log(res)

// //     });
// // }

var start = function () {
    inquirer.prompt({
        name: "id",
        type: "list",
        message: "What candy ID would you like to choose?",
        choices: [1, 2, 3, 4, 5, 6, 7]
    }).then(function (answer) {
        if (answer.name == 1) {
            id1();
            // console.log(res[i].product_name)
        } else {

        }
    })
    connection.end();
}
