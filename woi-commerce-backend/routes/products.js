const express = require('express');
const router = express.Router();

// Mock products for demonstration purposes
const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description 1', image: 'img1.jpg' },
  { id: 2, name: 'Product 2', price: 200, description: 'Description 2', image: 'img2.jpg' },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
