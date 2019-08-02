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
    queryCandy();
    // start();
});

function queryCandy() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].item_id + " | " + "Candy: " + res[i].product_name + " | " + "Quantity: " + res[i].stock_quantity + " | " + "Remaining: " + res[i].units_left);
        };
        console.log("-----------------------------------");
        start()
    });
}

var start = function () {
    inquirer.prompt([
        {
            name: "id",
            type: "list",
            message: "What candy ID would you like to choose?",
            choices: [1, 2, 3, 4, 5, 6, 7]
        }, {
            name: "quantity",
            type: "input",
            message: "How many do you want to buy?",
        }]).then(function (answer) {
            console.log("Item ID: " + parseInt(answer.id) + " | Quantity:" + parseInt(answer.quantity));

            connection.query("SELECT * FROM products WHERE item_id='" + answer.id +"'", function (err, res) {
                if (err) throw err;
                // console.log("This is the response from the database: " + JSON.stringify(res));
                var stockQuantity = res[0].stock_quantity - answer.quantity;

                if(answer.quantity <= res[0].stock_quantity) {
                    var total =+ res[0].stock_quantity * res[0].price; 
                    console.log("Total " + answer.quantity + " " + res[0].product_name + " is " + total);
                    connection.query("UPDATE product_name SET stock_quantity = stock_quantity - " + res + "WHERE item_id = " + id);
                } else {
                    console.log("Not Enough")
                }

                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[0].item_id);
                    console.log("Name: " + res[0].product_name);
                    console.log("Quantity: " + res[0].stock_quantity)
                    console.log("Quantity: " + res[0].price)

                }

            })

        })
}

// function id1() {

//     // connection.connect("SELECT item_id * FROM products WHERE stock_quantity "), function (err, res) {
//     //     if (err) throw err;
//     //     console.log(res)
//     // }
//     connection.end();
// }