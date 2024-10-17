const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit a contact form
router.post('/', async (req, res) => {
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all contact form submissions
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;