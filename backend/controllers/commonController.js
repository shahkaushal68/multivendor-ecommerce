const { successResponse, failResponse } = require("../helpers/response");
const Role = require("../models/roleModel");

const addRole = async (req, res) => {
    try {
        const addRoleData = await new Role(req.body).save()
        return res.send(successResponse("Role Added Successfully", addRoleData));
    } catch (error) {
        console.log("Add Role Error", error);
        return res.send(failResponse(error));
    }
}

const findAllRole = async (req, res) => {
    try {
        const findAllRoleData = await Role.find({});
        return res.send(successResponse("Role Added Successfully", findAllRoleData));
    } catch (error) {
        console.log("Add Role Error", error);
        return res.send(failResponse(error));
    }
}

module.exports = { addRole, findAllRole }