const mongoose = require("mongoose");

const VehicalSchema=new mongoose.Schema({
    
    Name:{
        type:String,
    },
    Price:{
        type:String,
    },
    Type:{
        type:String,
        trim:true,
    },
    Description:{
        type:String,
        trim:true,
    },
    VehicalImage:{
        type:String,
        require:true,
    }
})

module.exports=mongoose.model("Vehical",VehicalSchema);
