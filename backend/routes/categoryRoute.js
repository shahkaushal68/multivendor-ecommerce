const express = require('express');
const router = express.Router();
const { addBlukCategory } = require('../controllers/categoryController');
const { checkAuth, checkIsAdmin } = require('../middlewares/authMiddleware');

router.post('/add', checkAuth, checkIsAdmin, addBlukCategory);


module.exports = router