const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
    },
    decsription: {
        type: String
    },
    images: [],
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        enum: ["Black", "White", "Red"]
    },
    categoriesId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
    }
},
    {
        timesStamp: true
    },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
