require("dotenv").config();
const knex = require("knex")({
    client: "pg",
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'desafio_pensador'
    }
});


module.exports = knex;