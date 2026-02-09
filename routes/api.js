const express = require("express");
const router = express.Router();

const portfolio = require("../data/portfolio");

// POST /api/contact
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email and message are required",
    });
  }

  const newContact = {
    id: Date.now(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  portfolio.contacts.push(newContact);

  res.status(201).json(newContact);
});

module.exports = router;
