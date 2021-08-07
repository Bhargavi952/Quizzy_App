const { Router } = require("express")

const router = Router()
const User = require("../models/user.model")

router.get("/", async (req, res) => {
    const user = await User.find().populate({path:"category",populate:{path:"questions"}}).lean().exec()
    return res.status(201).json({data: user})
})

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id).populate("category").populate("questions").execPopulate().lean().exec()
    return res.status(201).json({data: user})
})

router.patch("/:id", async (req, res) => {
    const old= await User.findById(req.params.id)
    const user = await User.findByIdAndUpdate(req.params.id,{category:[...old.category,req.body.category]},{new:true}).populate("category").lean().exec()
    return res.status(201).json({data: user})
})

module.exports = router