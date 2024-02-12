const Blog = require("../models/blogmodel");
const { successResponse, failResponse } = require("../helpers/response");
const { default: mongoose } = require("mongoose");

const addBlog = async (req, res) => {
    try {
        const addBlogData = await Blog.create(req.body)
        return res.send(successResponse("Blog added successfully!", addBlogData))
    } catch (error) {
        console.log("Add Blog Error", error);
        return res.send(failResponse(error));
    }
}
const getAllBlogs = async (req, res) => {
    try {
        const allBlogsData = await Blog.aggregate([
            {
                $lookup: {
                    from: "blogcategories",
                    localField: "blogCategories",  // Assuming _id in User collection corresponds to userId in UserProfile
                    foreignField: "_id",
                    as: "blogCategories",
                }
            }
        ]);
        return res.send(successResponse("All Blogs fetch successfully!", allBlogsData))
    } catch (error) {
        console.log("all Blogs fetching Error", error);
        return res.send(failResponse(error));
    }
}
const getSingleBlog = async (req, res) => {
    try {
        const blogId = new mongoose.Types.ObjectId(req.params.id);
        // Update the viewCount field by incrementing it
        await Blog.updateOne({ _id: blogId }, { $inc: { numOfViews: 1 } });
        const singleBlogData = await Blog.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) }
            },
            {
                $lookup: {
                    from: "blogcategories",
                    localField: "blogCategories",  // Assuming _id in User collection corresponds to userId in UserProfile
                    foreignField: "_id",
                    as: "blogCategories",
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "likedBy",  // Assuming _id in User collection corresponds to userId in UserProfile
                    foreignField: "_id",
                    as: "likedBy",
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "disLikedBy",  // Assuming _id in User collection corresponds to userId in UserProfile
                    foreignField: "_id",
                    as: "disLikedBy",
                }
            },
        ]);

        return res.send(successResponse("Single Blog fetch successfully!", singleBlogData))
    } catch (error) {
        console.log("Single blog fetching Error", error);
        return res.send(failResponse(error));
    }
}
const updateBlog = async (req, res) => {
    try {
        console.log("id", req.params.id);
        const updatedBlogData = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(successResponse("Blog Update successfully!", updatedBlogData));
    } catch (error) {
        console.log("Update blog Error", error);
        return res.send(failResponse(error));
    }
}

const likedBlog = async (req, res) => {
    try {
        const loginUserId = req.user.id;
        const { blogId } = req.body;
        const blog = await Blog.findById(blogId);
        //console.log("blog----", blog);
        //const alreadyDisliked = blog?.disLikedBy?.find((userId) => userId.toString() === )
        const alreadyLikedBlog = blog?.likedBy?.find((userId) => userId.toString() === loginUserId.toString());

        // Other way to find Id is present or not into Array 
        // const alreadyLikeblogOne = blog?.likedBy?.includes(loginUserId); -

        const alreadyDisLikedBlog = blog?.disLikedBy?.find((userId) => userId.toString() === loginUserId.toString());
        //console.log("alreadyLiked--", alreadyLikedBlog);
        //console.log("alreadyLikeblogOne--", alreadyLikeblogOne);
        if (alreadyDisLikedBlog) {
            await Blog.findByIdAndUpdate(blogId, {
                $pull: { disLikedBy: loginUserId },
                isDisLiked: false
            }, { new: true });
        }
        if (alreadyLikedBlog) {
            const likedData = await Blog.findByIdAndUpdate(blogId, {
                isLiked: false,
                $pull: { likedBy: loginUserId }
            }, { new: true });
            return res.send(successResponse("Blog unlike successfully!", likedData));
        } else {
            const disLikeData = await Blog.findByIdAndUpdate(blogId, {
                isLiked: true,
                $push: { likedBy: loginUserId }
            }, { new: true });
            return res.send(successResponse("Blog like successfully!", disLikeData));
        }
        console.log("alreadyLikedBlog----", alreadyLikedBlog);
    } catch (error) {
        console.log("Like blog Error", error);
        return res.send(failResponse(error));
    }
}

const disLikedBlog = async (req, res) => {
    try {

        const loginUserId = req.user.id;
        const { blogId } = req.body;
        const blog = await Blog.findById(blogId);

        //console.log("blog----", blog);
        //const alreadyDisliked = blog?.disLikedBy?.find((userId) => userId.toString() === )


        const alreadyLikedBlog = blog?.likedBy?.find((userId) => userId.toString() === loginUserId.toString());
        const alreadyDisLikedBlog = blog?.disLikedBy?.find((userId) => userId.toString() === loginUserId.toString());
        //console.log("alreadyLiked--", alreadyLikedBlog);

        if (alreadyLikedBlog) {
            await Blog.findByIdAndUpdate(blogId, {
                $pull: { likedBy: loginUserId },
                isLiked: false
            }, { new: true });
        }

        if (alreadyDisLikedBlog) {
            const likedData = await Blog.findByIdAndUpdate(blogId, {
                isDisLiked: false,
                $pull: { disLikedBy: loginUserId }
            }, { new: true });
            return res.send(successResponse("Blog not dislike successfully!", likedData));
        } else {
            const disLikeData = await Blog.findByIdAndUpdate(blogId, {
                isDisLiked: true,
                $push: { disLikedBy: loginUserId }
            }, { new: true });
            return res.send(successResponse("Blog dislike successfully!", disLikeData));
        }

        console.log("alreadyLikedBlog----", alreadyLikedBlog);



    } catch (error) {
        console.log("disLike blog Error", error);
        return res.send(failResponse(error));
    }
}



module.exports = { addBlog, getAllBlogs, getSingleBlog, updateBlog, likedBlog, disLikedBlog }
