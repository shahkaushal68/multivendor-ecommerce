const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { failResponse, successResponse, validationError } = require("../helpers/response");
const User = require("../models/userModel");
const UserProfile = require("../models/userProfileModel");

const register = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) return res.send(validationError("This email is already Register"));
        //--------------------------Convert passsword into Hash Password-------------------------
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        //----------------Save new user in user table--------------------------------
        const newUser = await new User({ ...req.body, password: hashPassword }).save();
        if (newUser) {
            await new UserProfile({
                userId: newUser?._id,
                roleId: "657fe35ea682a598964a28ac"
            }).save();
        }
        return res.send(successResponse("User Succesfully register", newUser));
    } catch (error) {
        console.log("error", error);
        return res.send(failResponse(error));
    }
}

const login = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) return res.send(validationError("This email is not Register"));

        //--------------------------Check passsword into Hash Password-------------------------
        const comparePassword = bcrypt.compareSync(req.body.password, existingUser?.password);
        if (!comparePassword) return res.send(validationError("Email or Password is incorrect"));
        //-------------------------Generate Json Web token--------------------------------
        if (existingUser && comparePassword) {
            const { _id, email } = existingUser
            jwt.sign({ id: existingUser?._id }, process.env.TOKEN_SECRETE_KEY, { expiresIn: "3d" }, function (err, token) {
                if (token) {
                    return res.send(successResponse("User Succesfully Login", { _id, email, token }));
                } else {
                    console.log("token generation error", err);
                }
            });

        }
    } catch (error) {
        console.log("error", error);
        return res.send(failResponse(error));
    }
}

module.exports = { register, login }