const express = require('express');
const router = express.Router();
const { addProduct, findAllProducts, findAllProductUsingLookup, ratedProduct, fetchSingleProduct } = require('../controllers/productController');
const upload = require("../middlewares/imageUploadMiddleware");
const { checkAuth } = require('../middlewares/authMiddleware');

router.post('/add', upload.array("productImages"), addProduct);
//router.get('/', findAllProducts);
router.get('/', findAllProductUsingLookup);
router.get("/:id", fetchSingleProduct);
router.put("/review", checkAuth, ratedProduct);

module.exports = router