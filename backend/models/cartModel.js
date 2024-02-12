const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            price: {
                type: Number
            },
            color: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ],
    cartTotalAmount: Number,
    cartTotalAmountAfterDiscount: Number,
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    },
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart