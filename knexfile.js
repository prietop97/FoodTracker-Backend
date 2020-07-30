// Update with your config settings.
require("dotenv");
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
