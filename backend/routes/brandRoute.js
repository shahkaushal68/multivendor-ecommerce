const express = require('express');
const { addBulkBrand } = require('../controllers/brandCategory');
const router = express.Router();


router.post('/add', addBulkBrand);


module.exports = router