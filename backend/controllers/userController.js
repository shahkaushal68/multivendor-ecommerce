const mongoose = require("mongoose");
const { failResponse, successResponse, validationError } = require("../helpers/response");
const User = require("../models/userModel");
const UserProfile = require("../models/userProfileModel");
const { isValidObjectId } = require("../utils/validateMongoId");

const updateUserProfile = async (req, res) => {
    try {
        const updateUserProfileData = await UserProfile.updateOne(
            { userId: new mongoose.Types.ObjectId(req.user.id) },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobile: req.body.mobile,
                profilePicture: req.body.profilePicture
            },
            { new: true }
        );
        return res.send(successResponse("Profile updation successfully", updateUserProfileData));
    } catch (error) {
        console.log("user Profile updation error", error);
        return res.send(failResponse(error));
    }
}

const getSingleUser = async (req, res) => {
    try {
        const singleUserData = await User.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(req.user.id) } },
            {
                $lookup: {
                    from: "userprofiles",
                    localField: "_id",
                    foreignField: "userId",
                    as: "userprofiles",
                    pipeline: [
                        {
                            $lookup: {
                                from: "roles",
                                let: { roleId: "$roleId" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $eq: ["$$roleId", "$_id"],
                                            },
                                        },
                                    },
                                ],
                                as: "role",
                            },
                        },
                    ],
                },
            },

            {
                $unwind: {
                    path: "$userprofiles",
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $project: {
                    //"createdAt": 0,
                    //"updatedAt": 0,
                    "password": 0,
                    //"userData.createdAt": 0,
                    //"userData.updatedAt": 0
                }
            }
        ]);
        return res.send(
            successResponse("Get Single User Successfully", singleUserData)
        );
    } catch (error) {
        console.log("Get user error", error);
        return res.send(failResponse(error));
    }
};

const fetchAllUsers = async (req, res) => {
    try {
        //const allUsersData = await User.find({});
        const userData = await User.aggregate([
            {
                $lookup: {
                    from: "userprofiles",
                    localField: "_id",  // Assuming _id in User collection corresponds to userId in UserProfile
                    foreignField: "userId",
                    as: "profile",
                    pipeline: [
                        {
                            $lookup: {
                                from: "roles",
                                localField: "roleId",  // Assuming _id in User collection corresponds to userId in UserProfile
                                foreignField: "_id",
                                as: "role",
                            }
                        }
                    ]
                }
            },
            {
                $project: {
                    "password": 0,
                    "createdAt": 0,
                    "updatedAt": 0,
                    "__v": 0,
                    "userProfile.createdAt": 0,
                    "userProfile.updatedAt": 0,
                    "userProfile.__v": 0,
                    "userProfile.roleId": 0,
                    "userProfile.role.createdAt": 0,
                    "userProfile.role.updatedAt": 0,
                    //profile: "$userProfile"
                }
            }
        ]);
        //console.log("userData----------", userData);

        return res.send(successResponse("Get All Users Successfully", userData));
    } catch (error) {
        console.log("user Profile updation error", error);
        return res.send(failResponse(error));
    }
}

const blockUser = async (req, res) => {
    try {
        const updateUserProfileData = await UserProfile.updateOne(
            { userId: new mongoose.Types.ObjectId(req.params.id) },
            {
                isBlocked: true
            },
            { new: true }
        );
        return res.send(successResponse("User successfully Blocked", updateUserProfileData));
    } catch (error) {
        console.log("user Block error", error);
        return res.send(failResponse(error));
    }
}

const unblockUser = async (req, res) => {
    try {
        const checkId = isValidObjectId(req.params.id);
        const updateUserProfileData = await UserProfile.updateOne(
            { userId: new mongoose.Types.ObjectId(req.params.id) },
            {
                isBlocked: false
            },
            { new: true }
        );
        return res.send(successResponse("User successfully unBlocked", updateUserProfileData));
    } catch (error) {
        console.log("user unBlock error", error);
        return res.send(failResponse(error));
    }
}

const addWishList = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        let userProfile = await UserProfile.findOne({ userId });

        //console.log("userProfile----------", userProfile);

        if (!userProfile.wishList.includes(productId)) {
            //console.log("Not Present");

            const addWishList = await UserProfile.updateOne(
                { userId: new mongoose.Types.ObjectId(req.user.id) },
                {
                    $push: { wishList: productId }
                },
                { new: true }
            )
            return res.send(successResponse("product Add to wishList successfully!", addWishList));
        } else {
            //console.log("present");
            const removeWishList = await UserProfile.updateOne(
                { userId: new mongoose.Types.ObjectId(req.user.id) },
                {
                    $pull: { wishList: productId }
                },
                { new: true }
            )
            return res.send(successResponse("product Remove from wishList successfully!", removeWishList));
        }

    } catch (error) {
        console.log("Add Product wishlist Error", error);
        return res.send(failResponse(error));
    }

}

module.exports = {
    updateUserProfile,
    fetchAllUsers,
    getSingleUser,
    blockUser,
    unblockUser,
    addWishList
}