/*** CASO NÃO TENHA O DB CRIADO NA SUA MÁQUINA

CREATE DATABASE coletase;

USE coletase; */


CREATE TABLE local(
    id_local INT UNSIGNED NOT NULL AUTO_INCREMENT,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    descricao VARCHAR(200) NOT NULL, 
    titulo VARCHAR(30) NOT NULL,
    PRIMARY KEY (id_local)
);