const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, description } = req.body;

    if (!name || !email || !description) {
      return res.status(400).json({ error: 'Name, Email, and Message are required.' });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message: description, // Save description as message
    });

    return res.status(201).json({ success: true, contact });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ error: 'Failed to save contact.' });
  }
});

module.exports = router;
