require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/user");
const cors = require("cors");
const wasteRoutes = require("./routes/waste");

const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api/waste", wasteRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ msg: "Route not found" });
});

// Optional: Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Internal Server Error" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
