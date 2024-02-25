const mongoose = require("mongoose");

const ItemSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:String,
    },
})

module.exports=mongoose.model("Item",ItemSchema);