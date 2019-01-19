CREATE DATABASE burgers_db;

USE sm8cfr74efplvxpf;

CREATE TABLE burgers (
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR( 55) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id),
)