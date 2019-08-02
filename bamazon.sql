DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity DECIMAL(10,2) NULL,
  units_left DECIMAL(10,2) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Chocolate Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Reese's Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Heath Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Mars Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Snicker's Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Crunch Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Kit Kat Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Hershey's Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Twix Bars", 2, 60);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Butterfinger Bars", 2, 60);

SELECT * FROM products;