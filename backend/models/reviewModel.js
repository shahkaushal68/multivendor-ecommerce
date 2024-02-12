const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    star: {
        type: Number,
        required: true,
        enum: {
            values: [1, 2, 3, 4, 5],
            message: '{VALUE} is not supported'
        }
    },
    review: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timesStamp: true
    },
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
