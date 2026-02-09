const express = require("express");
const apiRouter = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// home route
app.get("/", (req, res) => {
  res.send("🚀 Express server is running!");
});

// API routes
app.use("/api", apiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
