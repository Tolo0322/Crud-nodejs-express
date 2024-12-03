import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456789",
    database: "prueba01",
});

export default pool;