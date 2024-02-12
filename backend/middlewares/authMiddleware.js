
const jwt = require('jsonwebtoken');
const { unAuthorized, successResponse, failResponse } = require('../helpers/response');
const UserProfile = require('../models/userProfileModel');
const mongoose = require('mongoose');

const checkAuth = (req, res, next) => {
    let token = req.headers.authorization
    if (!token) {
        return res.send(unAuthorized("Token is Required!"));
    }
    token = req.headers.authorization.replace('Bearer ', '');
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRETE_KEY, function (err, decoded) {
            //console.log("err",err);
            if (err) return res.send(unAuthorized("Token is Invalid"));
            if (decoded) {
                //console.log({decoded});
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.send(unAuthorized("You are not authnticated"));
    }

}

const checkIsAdmin = async (req, res, next) => {
    try {
        const findUserData = await UserProfile.aggregate([
            { $match: { userId: new mongoose.Types.ObjectId(req.user.id) } },
            {
                $lookup: {
                    from: "roles",
                    localField: "roleId",
                    foreignField: "_id",
                    as: "roleData",
                }
            },
            { $unwind: "$roleData" },
            {
                $replaceRoot: { newRoot: { $mergeObjects: ["$$ROOT", { roleData: "$roleData" }] } }
            }
        ]);
        if (findUserData[0]?.roleData?.name === "Admin") {
            next();
        } else {
            return res.send(failResponse("Sorry! Only Admin can allow"));
        }
    } catch (error) {
        console.log("error", error);
        return res.send(failResponse("Admin Auth error", "", error));
    }
}

module.exports = { checkAuth, checkIsAdmin }