/** Database config for database. */
const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "microblog",
  password: "1234",
  port: 5432,
});

db.connect();

module.exports = db;
