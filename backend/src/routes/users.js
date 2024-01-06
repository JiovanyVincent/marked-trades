const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../services/database/queries/userQueries');

router.get('/', async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    const result = res.send(allUsers);
    return result;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;