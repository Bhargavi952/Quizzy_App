const mongoose = require("mongoose")

const scoreSchema = new mongoose.Schema({
user:{type:mongoose.Schema.Types.ObjectId},

},
{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("score", scoreSchema)