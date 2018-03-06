### Schema
CREATE DATABASE coffee_db;
USE coffee_db;

CREATE TABLE coffee
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	drank BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


SELECT * FROM coffee