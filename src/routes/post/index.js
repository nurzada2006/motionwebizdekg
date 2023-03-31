const express = require('express');

const { Post } = require('../../db');

const router = express.Router();

router.get('/:id', (req, res) => {
  res.json({ message: 'Hello, Post!' });
})

module.exports = router;
