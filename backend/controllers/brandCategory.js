const { brandData } = require("../data/brandJsonData");
const { successResponse, failResponse } = require("../helpers/response");
const Brand = require("../models/brandModel");


const addBulkBrand = async (req, res) => {
    try {
        const addAllBrans = await Brand.insertMany(brandData);
        return res.send(successResponse("All Brands added successfully!", addAllBrans))
    } catch (error) {
        console.log("Add Role Error", error);
        return res.send(failResponse(error));
    }
}

module.exports = { addBulkBrand }