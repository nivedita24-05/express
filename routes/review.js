const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Get all items
router.get('/', async (req, res) => {
  try {
    const review = await Review.find();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;
    const review = new Review({
      user,
      product,
      rating,
      comment
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
});

// Update an item completely (PUT)
router.put('/:id', async (req, res) => {
  try {
    const {user, product, rating, comment } = req.body;
    const cart = await Review.findByIdAndUpdate(
      req.params.id,
      { user, product, rating, comment },
      { new: true, runValidators: true }
    );
    if (!review) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error: error.message });
  }
});

// Partially update an item (PATCH)
router.patch('/:id', async (req, res) => {
  try {
    const { user, product, rating, comment  } = req.body;
    const cart = await Review.findByIdAndUpdate(
      req.params.id,
      {user, product, rating, comment },
      { new: true, runValidators: true }
    );
    if (!review) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(Review);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error: error.message });
  }
});
// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

module.exports = router;
