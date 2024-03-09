// routes/vehicalRoutes.js

const express = require('express');
const {auth,isAdmin,isCustomer} = require("../middlewares/auth")
const router = express.Router();
const Vehical = require('../models/VehicalCreation'); // Import your Mongoose model
const Verification = require('../models/VerificationDetails'); // Import your Verification model
const User = require('../models/User');
const { default: mongoose } = require('mongoose');
const cloudinary=require("cloudinary").v2;
function isFileTypeSupported(type,supportedType){
    return supportedType.includes(type);
}

async function uploadFiletoCloudinary(file,folder,quality){
    const options={folder};
    if (quality) {
        options.quality=quality;
    }
    options.resource_type="auto"
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}
// Vehical Creation
router.post('/createVehical', async (req, res) => {
    // console.log("Function called.....................................",req.user.id)
  try {
    const { Name, Price, Type, Description } = req.body;
    console.log("Request",req.user.id)
    const file = req.files.VHIMG;
    console.log("Image-------------",Name, Price, Type, Description,file);

        // validation:-
        const supportedType = ["jpg","jpeg","png"];
        const fileType= file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"File formate not supported.",
            });
        }

        // file formate is supported.
        const response =  await uploadFiletoCloudinary(file,"codehelp");
        




    const newVehical = await Vehical.create({
      Name,
      Price,
      Type,
      Description,
      VehicalImage:response.secure_url,
    });

    // const updatedUser = await User.findByIdAndUpdate(
    //   { _id:req.user.id},
    //   { $push: { itemPresent: newVehical._id } },
    //   { new: true }
    // );
    
   
    res.status(200).json({ success: true, vehical: newVehical });
  } catch (error) {
    res.status(500).json({ success: false, message:`Error aya hai.${error.message}` });
  }
});

// Vehical Read
router.get('/getAllVehical',auth,async (req, res) => {
  // console.log("first->>>>>>>>>>>}}}}}}}}}}",req.user)
  try {
    // console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",req.user)
    
    const allVehicals = await Vehical.find({});
    
    return res.status(200).json({ success: true,  allVehicals });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// A specific data:-
router.get('/get_A_Vehical', async (req, res) => {
  const {id}= req.query
  console.log("Now here is fine/////////////////",id)
  try {
    const vehicle = await Vehical.findById(id); // assuming Vehicle is your Mongoose model
    
    return res.status(200).json({ success: true,  vehicle });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});
// Rented Vehical:-
router.get('/Rented_Vehical',auth, async (req, res) => {
  let verificationId=req.user.id;
  
  console.log("DEEEPPPPPPP",verificationId)
  try {
    const UserDetails_Rented = await User.findById(verificationId).populate("RentedVehical"); // assuming Vehicle is your Mongoose model
    
    return res.status(200).json({ success: true,  UserDetails_Rented });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});
// Vehical Document Verification
router.post('/docVerifycreate',auth, async (req, res) => {
  try {
    console.log("Cute");
    const aadharCard=req.files.aadharCard
    const drivingLicence=req.files.drivingLicence;
    const photograph=req.files.photograph
    const phoneNumber=req.body.phoneNumber;
    console.log("first",req.body.phoneNumber)



     // file formate is supported.
     const response_aadharCard =  await uploadFiletoCloudinary(aadharCard,"codehelp");
     const response_drivingLicence =  await uploadFiletoCloudinary(drivingLicence,"codehelp");
     const response_photograph =  await uploadFiletoCloudinary(photograph,"codehelp");
     
    // const { aadharCard, drivingLicence, photograph, phoneNumber } = req.body;
    // const newVerification = await Verification.findByIdAndUpdate({
    //   aadharCard:response_aadharCard.secure_url,
    //   drivingLicence:response_drivingLicence.secure_url,
    //   photograph:response_photograph.secure_url,
    //   phoneNumber:phoneNumber,
    // });
    // console.log("Id}}}}}}}}}}}}}}}}}}}}}}",req.user)
    let verificationId=req.user.id;
    let userDetails = await User.findById(verificationId);
    // 65e9d59da4e4e07fb1690247
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",(userDetails.additionalDetails).toString());
    console.log("response_aadharCard",response_aadharCard)
    const newVerification = await Verification.findByIdAndUpdate(
      (userDetails.additionalDetails).toString(), 
        {
          aadharCard: response_aadharCard.secure_url,
          drivingLicence: response_drivingLicence.secure_url,
          phoneNumber: phoneNumber,
          photograph: response_photograph.secure_url,
        },
      { new: true }
    );

    
    res.status(200).json({ success: true, verification: newVerification });
  } catch (error) {
    res.status(500).json({ success: false, message:` This is error:${error.message} `});
  }
});

module.exports = router;
