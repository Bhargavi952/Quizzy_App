const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    options: {
        A: {type: String, required: true},
        B: {type: String, required: true},
        C: {type: String, required: true},
        D: {type: String, required: true}
    },
    answer: {type: String, required: true}
},
{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("question", questionSchema)