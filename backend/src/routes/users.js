const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../services/database/queries/userQueries');

router.get('/', async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    const response = res.json(allUsers);
    return response;
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;