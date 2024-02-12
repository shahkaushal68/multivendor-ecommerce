const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const isValidObjectId = (id) => {
    const checkId = ObjectId.isValid(id);
    if (!checkId) throw new Error("This id is not Valid!");
}

module.exports = { isValidObjectId }