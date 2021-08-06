const mongoose=require("mongoose");
const connect = () => {
    return mongoose.connect(`mongodb+srv://arunkr741:arunkr741@aruncluster.anqly.mongodb.net/quiz_app?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true

    })
}

module.exports=connect;