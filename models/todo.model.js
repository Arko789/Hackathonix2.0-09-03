const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"low"
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("Todo", todoSchema)