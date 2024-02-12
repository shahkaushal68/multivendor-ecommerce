const { categoryData } = require("../data/categoryJsonData");
const { successResponse, failResponse } = require("../helpers/response");
const Category = require("../models/categoryModel");

const addBlukCategory = async (req, res) => {
    try {
        console.log("categoryData----", categoryData);
        const addAllCategory = await Category.insertMany(categoryData)
        return res.send(successResponse("All Categories added successfully!", addAllCategory))
    } catch (error) {
        console.log("Add Role Error", error);
        return res.send(failResponse(error));
    }
}

module.exports = { addBlukCategory }