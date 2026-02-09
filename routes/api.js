const express = require("express");
const router = express.Router();

const portfolio = require("../data/portfolio");

// ✅ GET /api/profile
router.get("/profile", (req, res) => {
  res.json(portfolio.profile);
});

// ✅ GET /api/about
router.get("/about", (req, res) => {
  res.json(portfolio.about);
});

// ✅ GET /api/projects
router.get("/projects", (req, res) => {
  res.json(portfolio.projects);
});

// ✅ GET /api/contacts
router.get("/contacts", (req, res) => {
  res.json(portfolio.contacts);
});

// ✅ POST /api/contact  (ЕД. число — как в PDF)
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // 400 validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email, message are required",
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
