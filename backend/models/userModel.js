const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String,

    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User