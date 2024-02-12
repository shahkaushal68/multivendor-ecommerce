const { blogCategoryData } = require("../data/categoryJsonData");
const { successResponse, failResponse } = require("../helpers/response");
const BlogCategory = require("../models/blogCategoryModel");


const addBlukBlogCategory = async (req, res) => {
    try {
        console.log("blogCategoryData----", blogCategoryData);
        const addAllCategory = await BlogCategory.insertMany(blogCategoryData)
        return res.send(successResponse("All Blog Categories added successfully!", addAllCategory))
    } catch (error) {
        console.log("Add Role Error", error);
        return res.send(failResponse(error));
    }
}

module.exports = { addBlukBlogCategory }
