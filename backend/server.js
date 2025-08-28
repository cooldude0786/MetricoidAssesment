const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const pricingRoutes = require("./routes/pricingRoutes");
const connectDB = require("./src/db");

app.use(cors());
app.use(express.json());

app.use("/api", pricingRoutes);


app.use(express.static(path.join(__dirname, "public")));
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const startApp = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};

startApp();
