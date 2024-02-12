const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            color: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ],
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: "Not Processed",
        Enum: [
            "Not Processed",
            "Packed",
            "Ready To Deliver",
            "Dispatch",
            "Out Of Deliver",
            "Deliverd",
            "Cancled"
        ]
    },
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    },
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order