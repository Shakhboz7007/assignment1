const express = require("express");
const apiRouter = require("./routes/api");

const app = express();

// middleware
app.use(express.json());

// root
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// api routes
app.use("/api", apiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// IMPORTANT: Render port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
