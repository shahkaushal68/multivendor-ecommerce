const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
},
    {
        timesStamp: false
    },
);

const BlogCategory = mongoose.model('BlogCategory', blogCategorySchema);

module.exports = BlogCategory;
