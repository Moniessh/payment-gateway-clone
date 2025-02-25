const { Sequelize } = require("sequelize");

// Load environment variables
require("dotenv").config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // MySQL username
  process.env.DB_PASSWORD, // MySQL password
  {
    host: process.env.DB_HOST, // MySQL host (localhost)
    dialect: "mysql",
    logging: false, // Disable logging
  }
);

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("[INFO] Database connected successfully."))
  .catch(err => console.error("[ERROR] Database connection failed:", err));

module.exports = sequelize;
