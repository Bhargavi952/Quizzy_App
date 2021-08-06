const express = require("express")
const connect = require("./config/db.js")
const {login , register} = require("./controllers/auth.controller.js")
const questionController = require("./controllers/question.controller.js")
const categoryController = require("./controllers/category.controller.js")

const app = express()
app.use(express.json())
app.post("/login", login)
app.post("/register", register)
app.use("/question", questionController)
app.use("/category", categoryController)

app.listen(4000, async() => {
    await connect()
    console.log("server running on port 4000")
})