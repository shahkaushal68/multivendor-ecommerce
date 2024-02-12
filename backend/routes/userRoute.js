const express = require('express');
const router = express.Router();
const { updateUserProfile, fetchAllUsers, getSingleUser, blockUser, unblockUser, addWishList } = require('../controllers/userController');
const { checkAuth, checkIsAdmin } = require('../middlewares/authMiddleware');

router.put('/profile', checkAuth, updateUserProfile);
router.get('/single', checkAuth, getSingleUser);
router.get('/all', fetchAllUsers);
router.put("/block/:id", checkAuth, checkIsAdmin, blockUser);
router.put("/unblock/:id", checkAuth, checkIsAdmin, unblockUser);
router.put("/wishlist", checkAuth, addWishList);

module.exports = router