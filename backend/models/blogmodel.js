const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    blogCategories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BlogCategory"
        }
    ],
    numOfViews: {
        type: Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    isDisLiked: {
        type: Boolean,
        default: false
    },
    likedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    disLikedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    author: {
        type: String,
        default: "Admin"
    }
},
    {
        timesStamp: false
    },
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
