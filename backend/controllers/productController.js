const mongoose = require("mongoose");
const Product = require("../models/productModel");
const slugify = require('slugify');
//const objectId = new mongoose.Types.ObjectId;
const { successResponse, failResponse, validationError } = require("../helpers/response");
const Category = require("../models/categoryModel");
const UserProfile = require("../models/userProfileModel");
const Review = require("../models/reviewModel");

const addProduct = async (req, res) => {
    try {
        //console.log("req---", req.files);
        //console.log("body----", req.body);
        let slug;
        let productImages = [];
        if (req.body.title) {
            slug = slugify(req.body.title, {
                replacement: '-',  // replace spaces with replacement character, defaults to `-`
                lower: true,      // convert to lower case, defaults to `fal
                trim: true         // trim leading and trailing replacement chars, defaults to `true`
            })
        }
        req.files?.length !== 0 && req.files?.forEach(productImg => {
            productImages.push(productImg?.filename);
        });
        const addProductData = await Product.create({ slug, images: productImages, ...req.body });
        return res.send(successResponse("All Products added successfully!", addProductData));
    } catch (error) {
        console.log("Add Product Error", error);
        return res.send(failResponse(error));
    }
}

const findAllProducts = async (req, res) => {
    //console.log(req.query);
    try {

        let query = {}

        // Searching Functionality
        if (req.query.keyword) {
            query.$or = [
                { "title": { $regex: req.query.keyword, $options: 'i' } },
                { "decsription": { $regex: req.query.keyword, $options: 'i' } },
            ]
        }

        console.log("req-query", req.query);

        if (req.query.category) {
            const categoryIds = req.query.category.split(",").map(id => new mongoose.Types.ObjectId(id));
            query.categoriesId = { $in: categoryIds };
        }


        console.log("query", query);

        const getAllProductsData = await Product.find(query)
            .populate({
                model: "Category",
                path: "categoriesId",
                select: { 'name': 1, 'slug': 1 },
            })
            .populate({
                model: "Brand",
                path: "brandId",
                select: { 'name': 1, 'slug': 1 },
            });
        return res.send(successResponse("All Products Fetched successfully!", getAllProductsData));
    } catch (error) {
        console.log("Find All Products error", error);
        return res.send(failResponse(error));
    }
}
//Query

//products?category=electronics,clothing,shoes&keyword=search-term&sortBy=price&sortOrder=desc&page=2&pageSize=20

const findAllProductUsingLookup = async (req, res) => {
    try {

        let query = [];
        let matchQuery = {};
        let sortQuery = {};

        query = [
            {
                $lookup: {
                    from: "categories",
                    localField: "categoriesId",
                    foreignField: "_id",
                    as: "categoriesId"
                }
            },
            {
                $lookup: {
                    from: "brands",
                    localField: "brandId",
                    foreignField: "_id",
                    as: "brandId"
                }
            }
        ]

        //---------------------------------Search Query--------------------------
        if (req.query.keyword) {
            matchQuery["$or"] = [
                { "title": { $regex: req.query.keyword, $options: 'i' } },
                { "description": { $regex: req.query.keyword, $options: 'i' } },
                { "categoriesId.name": { $regex: req.query.keyword, $options: 'i' } }
            ];
        }
        //----------------------Filtering query-------------------------------
        //------------filter by Category-----------
        if (req.query.category) {
            let categorySlug = req.query.category.split(",").map(slug => slug.trim());
            matchQuery["categoriesId.slug"] = { $in: categorySlug };
        }
        //-------------filter by brand-----------
        if (req.query.brand) {
            let brandSlug = req.query.brand.split(",").map(slug => slug.trim());
            matchQuery["brandId.slug"] = { $in: brandSlug };
        }
        //----------------------Sorting Query------------------
        if (req.query.sortBy) {
            const sortBy = req.query.sortBy.toLowerCase();
            const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

            if (sortBy === 'price') {
                sortQuery['price'] = sortOrder;
            } else if (sortBy === 'quantity') {
                sortQuery['quantity'] = sortOrder;
            }
        }

        //------------------Pagination------------------------------

        // const page = req.query.page;
        // const limit = req.query.limit;
        // const skip = (page - 1) * limit;
        // query = query.skip(skip).limit(limit);
        // if (req.query.page) {
        //     const productCount = await Product.countDocuments();
        //     if (skip >= productCount) {
        //         return res.send(validationError("This page is not exist"));
        //     }
        // }
        // console.log({ page, limit, skip });


        if (Object.keys(matchQuery).length > 0) {
            query.push({ $match: matchQuery });
        }

        if (Object.keys(sortQuery).length > 0) {
            query.push({ $sort: sortQuery });
        }

        const getAllProductsData = await Product.aggregate(query);
        return res.send(successResponse("All Products Fetched successfully!", getAllProductsData));

    } catch (error) {
        console.log("Find All Products error", error);
        return res.send(failResponse(error));
    }
}



const ratedProduct = async (req, res) => {
    try {

        const userId = req.user.id;
        const {
            productId,
            star,
            review,
        } = req.body;

        const addReview = await Review.updateOne(
            {
                $and: [
                    { "productId": { $eq: req.body.productId } },
                    { "postedBy": { $eq: userId } }
                ]
            },
            {
                productId,
                star,
                review,
                postedBy: userId
            },
            {
                upsert: true,
                new: true
            }
        )

        return res.send(successResponse("product Rates successfully!", addReview));
    } catch (error) {
        console.log("Product Rating Error", error);
        return res.send(failResponse(error));
    }
}


const fetchSingleProduct = async (req, res) => {
    try {

        const fetchProdData = await Product.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) }
            },
            {
                $lookup:
                {
                    from: "categories",
                    localField: "categoriesId",
                    foreignField: "_id",
                    as: "categoriesId"
                }
            },
            {
                $lookup:
                {
                    from: "brands",
                    localField: "brandId",
                    foreignField: "_id",
                    as: "brandId"
                }
            },
            {
                $lookup:
                {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "productId",
                    as: "reviews"
                }
            },
            {
                $addFields: {
                    totalReviewCount: { $size: '$reviews' }, // Calculate total review count
                },
            },
        ]);

        return res.send(successResponse("Fetch a single Product!", fetchProdData))
    } catch (error) {
        console.log("PrFetch Single Product Error", error);
        return res.send(failResponse(error));
    }
}

module.exports = {
    addProduct,
    findAllProducts,
    findAllProductUsingLookup,
    ratedProduct,
    fetchSingleProduct
}