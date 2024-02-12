const { successResponse, failResponse } = require("../helpers/response");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

const addToCart = async (req, res) => {
    try {
        const { cartItems } = req.body;
        const userId = req.user.id;
        let products = [];

        //console.log({ cartItems, userId });
        await Cart.findOneAndDelete({ orderBy: userId });

        for (let i = 0; i < cartItems?.length; i++) {
            let productObject = {};
            productObject.product = cartItems[i].productId;
            productObject.color = cartItems[i].color;
            productObject.count = cartItems[i].count;

            const productPrice = await Product.findById(cartItems[i]?.productId).select("price");
            productObject.price = productPrice?.price;
            products.push(productObject);
        }

        let cartTotal = 0;
        for (let i = 0; i < products?.length; i++) {
            cartTotal = cartTotal + products[i]?.price * products[i]?.count
        }

        const saveCart = await new Cart({
            products,
            cartTotalAmount: cartTotal,
            orderBy: userId
        }).save();

        //console.log({ products, cartTotal });
        return res.send(successResponse("Cart added successfully!", saveCart));

    } catch (error) {
        console.log("Add to cart Error", error);
        return res.send(failResponse(error));
    }
}

const getUserCart = async (req, res) => {
    try {
        const getUserCartData = await Cart.findOne({ orderBy: req.user.id }).populate("products.product");
        return res.send(successResponse("Get user cart successfully!", getUserCartData));
    } catch (error) {
        console.log("Get user cart Error", error);
        return res.send(failResponse(error));
    }
}

module.exports = { addToCart, getUserCart }