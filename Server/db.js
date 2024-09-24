
const { Pool } = require('pg');

// PostgreSQL connection
const pool = new Pool({
    user:"",
    host: "",
    database: "",
    password: "",
    port:5432,
});

module.exports = pool
















// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password VARCHAR(100) NOT NULL
//   );




