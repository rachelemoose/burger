CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR( 55) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id),
)