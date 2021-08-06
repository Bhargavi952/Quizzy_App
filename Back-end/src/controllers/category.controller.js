const { Router } = require("express")

const router = Router()
const Category = require("../models/category.model.js")


router.post("/", async (req, res) => {
    const category = await Category.create(req.body)
    return res.status(201).json({data: category})
})

router.get("/", async (req, res) => {
    const category = await Category.find().populate("questions").lean().exec()
    return res.status(201).json({data: category})
})

module.exports = router