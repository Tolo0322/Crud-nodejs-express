CREATE DATABASE Prueba01;

use Prueba01;

CREATE TABLE integrantes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL
);

SELECT * FROM integrantes;