const express = require('express');

const postRoutes = require('./post');
const { isAuthenticated } = require('../middlewares');

const router = express.Router();

router.use('/post', isAuthenticated, postRoutes);

// router.use('/admin', )


module.exports = router;
