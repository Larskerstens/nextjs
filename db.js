const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "lars123",
    database: "steden",
  },
});

export default knex;
