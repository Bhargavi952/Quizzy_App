const mongoose = require("mongoose")
const Question = require("./question.model.js")

const categorySchema = new mongoose.Schema({
    title: {type: String, required: true},
    questions: [{type: mongoose.Schema.Types.ObjectId, ref: Question, required: true}],
    status: {type: Boolean, required: true} 
},
{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("category", categorySchema)