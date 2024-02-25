// routes/vehicalRoutes.js

const express = require('express');
const {auth,isAdmin,isCustomer} = require("../middlewares/auth")
const router = express.Router();
const Vehical = require('../models/VehicalCreation'); // Import your Mongoose model
const Verification = require('../models/VerificationDetails'); // Import your Verification model
const User = require('../models/User');
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
router.post('/createVehical',auth, async (req, res) => {
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
    
   
    res.status(201).json({ success: true, vehical: newVehical });
  } catch (error) {
    res.status(500).json({ success: false, message:` Error aya hai.${error.message}` });
  }
});

// Vehical Read
router.get('/getAllVehical', async (req, res) => {
  try {
    console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    
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

// Vehical Document Verification
router.post('/docVerifycreate', async (req, res) => {
  try {
    const { aadharCard, drivingLicence, photograph, phoneNumber } = req.body;
    const newVerification = new Verification({
      aadharCard,
      drivingLicence,
      photograph,
      phoneNumber,
    });

    const savedVerification = await newVerification.save();
    res.status(201).json({ success: true, verification: savedVerification });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
