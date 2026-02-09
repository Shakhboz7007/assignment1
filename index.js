const express = require("express");
const apiRouter = require("./routes/api");

const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Personal Portfolio API is running" });
});

// API routes
app.use("/api", apiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Port for local and cloud environments
const PORT = process.env.PORT || 3000;

// Listen on all network interfaces (required for Render)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
