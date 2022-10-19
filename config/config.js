require('dotenv').config()

module.exports = {
  "development": {
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": "postgres"
  }
};