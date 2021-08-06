const { Router } = require("express")

const router = Router()
const Question = require("../models/question.model.js")


router.post("/", async (req, res) => {
    const question = await Question.create(req.body)
    return res.status(201).json({data: question})
})

router.get("/", async (req, res) => {
    const question = await Question.find().lean().exec()
    return res.status(201).json({data: question})
})

router.get("/:id/:ans", async (req, res) => {
    const ans = req.params.ans
    const question = await Question.findById(req.params.id).lean().exec()
    if(question.answer == ans){
        return res.status(200).json({data: "answer is right"})
    }
    else{
        return res.status(400).json({data: "answer is wrong"})
    } 
})

module.exports = router