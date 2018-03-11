### Schema
CREATE DATABASE coffee_db;
USE coffee_db;

CREATE TABLE coffee (
id int NOT NULL AUTO_INCREMENT,
name varchar(225) NOT NULL,
drank BOOLEAN NOT NULL,
PRIMARY KEY (id)
);

