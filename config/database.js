const { Sequelize } = require("sequelize");
require('dotenv').config(); // Load environment variables from .env file

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,         // Database name
  process.env.DB_USER,         // Database user
  process.env.DB_PASSWORD,     // Database password
  {
    host: process.env.DB_HOST, // Database host
    port: process.env.DB_PORT, // Database port
    dialect: "postgres",       // Database dialect (PostgreSQL)
  }
);

// Function to sync database and create tables
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // `force: false` means it won't drop the tables if they already exist
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Unable to sync database:", error);
  }
};

// Export the sequelize instance and sync function
module.exports = { sequelize, syncDatabase };
