const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfileSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobile: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: "Role",
        required: true
    },
    wishList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
},
    {
        timestamps: true
    },
);

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile