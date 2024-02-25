const mongoose = require("mongoose");

const VerificationSchema=new mongoose.Schema({
    aadharCard:{
        type:String,
    },
    drivingLicence:{
        type:String,
    },
    photograph:{
        type:String,
    },
    phoneNumber:{
        type:String,
    }
})

module.exports=mongoose.model("Verification",VerificationSchema);

