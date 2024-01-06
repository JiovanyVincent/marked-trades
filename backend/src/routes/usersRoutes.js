const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    const response = res.json(users);
    return response;
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;