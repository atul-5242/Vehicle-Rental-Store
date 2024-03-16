const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true,
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
    }, 
    accountType:{
        type:String,
        enum:["Admin","Customer"],
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Verification",
    },
    image:{
        type:String,
        require:true,
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    image: {
        type: String,
        required: true, 
    },
    RentedVehical:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Vehical"
        }
    ],
})

module.exports=mongoose.model("User",userSchema);
