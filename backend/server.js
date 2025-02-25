const User = require("./models/User");
const Payment = require("./models/Payment");
const sequelize = require("./config/database");
const authRoutes = require('./routes/authRoutes');

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;
sequelize
  .sync({ force: false }) // Ensures tables are created without dropping existing data
  .then(() => {
    console.log("[INFO] Database & tables synced successfully.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("[ERROR] Failed to sync database:", err));
