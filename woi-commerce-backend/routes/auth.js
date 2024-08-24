const express = require('express');
const router = express.Router();

// Mock users for demonstration purposes
const users = [
  { email: 'user@example.com', password: 'password123', name: 'John Doe' },
];

// Register a new user
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ msg: 'User already exists' });
  }
  users.push({ name, email, password });
  res.json({ msg: 'User registered successfully', user: { name, email } });
});

// Login user
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return res.json({ msg: 'Login successful', user: { name: user.name, email: user.email } });
  } else {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }
});

module.exports = router;
