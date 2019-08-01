DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name DECIMAL(10,2) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity DECIMAL(10,2) NULL,
  units_left DECIMAL(10,2) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Chocolate Bar", 2, 90);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Reese's Bar", 2, 10);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Heath Bar", 2, 55);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Mars Bar", 2, 22);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Snicker's Bar", 2, 38);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Crunch Bar", 2, 10);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Kit Kat Bar", 2, 10);

SELECT * FROM products;