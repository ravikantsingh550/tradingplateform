const {model} = require("mongoose");
const {PostionSchema} = require("../schemas/PostionsSchema");

const PostionModel = new model("postion" , PostionSchema);

module.exports = {PostionModel};