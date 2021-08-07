const { Router } = require("express")

const router = Router()
const Category = require("../models/category.model.js")


router.post("/", async (req, res) => {
    const category = await Category.create(req.body)
    return res.status(201).json({data: category})
})

router.patch("/:id", async (req, res) => {
    const old = await Category.findById(req.params.id)
    const category = await Category.findByIdAndUpdate(req.params.id,{questions:[...old.questions,req.body.questions]},{new:true}).populate("questions").lean().exec()
    return res.status(201).json({data: category})
})

router.get("/", async (req, res) => {
    const category = await Category.find().populate("questions").lean().exec()
    return res.status(201).json({data: category})
})

router.get("/:id", async (req, res) => {
    const category = await Category.findById(req.params.id).populate("questions").lean().exec()
    return res.status(201).json({data: category})
})

module.exports = router