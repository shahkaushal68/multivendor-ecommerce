const express = require('express');
const router = express.Router();
const { addToCart, getUserCart } = require('../controllers/cartController');
const { checkAuth } = require('../middlewares/authMiddleware');


router.post('/add', checkAuth, addToCart);
router.get('/', checkAuth, getUserCart);

module.exports = router