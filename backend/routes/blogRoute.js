const express = require('express');
const router = express.Router();
const { checkAuth, checkIsAdmin } = require('../middlewares/authMiddleware');
const { addBlukBlogCategory } = require('../controllers/blogCategoryController');
const { addBlog, getAllBlogs, getSingleBlog, updateBlog, likedBlog, disLikedBlog } = require('../controllers/blogController');

router.post('/category/add', addBlukBlogCategory);
router.post("/add", addBlog);
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.put("/:id", updateBlog);
router.post("/like", checkAuth, likedBlog);
router.post("/dislike", checkAuth, disLikedBlog);

module.exports = router