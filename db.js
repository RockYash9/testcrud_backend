const mongoose = require("mongoose");
require("dotenv").config();  // Load environment variables

const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });
