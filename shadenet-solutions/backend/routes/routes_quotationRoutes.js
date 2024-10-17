const express = require('express');
const router = express.Router();
const Quotation = require('../models/Quotation');

// Create a new quotation
router.post('/', async (req, res) => {
  const quotation = new Quotation({
    customerName: req.body.customerName,
    email: req.body.email,
    phone: req.body.phone,
    productId: req.body.productId,
    quantity: req.body.quantity,
    message: req.body.message,
  });

  try {
    const newQuotation = await quotation.save();
    res.status(201).json(newQuotation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all quotations
router.get('/', async (req, res) => {
  try {
    const quotations = await Quotation.find().populate('productId');
    res.json(quotations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update quotation status
router.patch('/:id', getQuotation, async (req, res) => {
  if (req.body.status != null) {
    res.quotation.status = req.body.status;
  }

  try {
    const updatedQuotation = await res.quotation.save();
    res.json(updatedQuotation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function to get a quotation by ID
async function getQuotation(req, res, next) {
  let quotation;
  try {
    quotation = await Quotation.findById(req.params.id);
    if (quotation == null) {
      return res.status(404).json({ message: 'Quotation not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.quotation = quotation;
  next();
}

module.exports = router;