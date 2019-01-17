CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR( 55) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Veggie", "0");
INSERT INTO burgers (burger_name, devoured) VALUES ("You're a vegan, we know", "0");
INSERT INTO burgers (burger_name, devoured) VALUES ("Shroom", "0");

SELECT * FROM burgers;