const express = require('express');
const router = express.Router();
const { addRole, findAllRole } = require('../controllers/commonController');

router.post('/role/add', addRole);
router.get('/role/', findAllRole);

module.exports = router