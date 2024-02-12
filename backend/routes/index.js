const express = require('express');
const router = express.Router();


const authRouter = require("./authRoute");
const commonRouter = require("./commonRoute");
const userRouter = require("./userRoute");
const categoryRouter = require("./categoryRoute");
const brandRouter = require("./brandRoute");
const productRouter = require("./productRoute");
const blogRouter = require("./blogRoute");
const cartRouter = require("./cartRoute");

// middleware that is specific to this router
router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);
router.use("/api", commonRouter);
router.use("/api/categories", categoryRouter);
router.use("/api/brands", brandRouter);
router.use("/api/products", productRouter);
router.use("/api/blogs", blogRouter);
router.use("/api/cart", cartRouter);

module.exports = router