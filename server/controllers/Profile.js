const Profile=require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
// IMPORTANT DETAILS:=============================================================
// https://chat.openai.com/share/d2a7c0c1-37f7-49a5-8ad2-6920e9c81406

// After the auth middleware has verified the user's token and set req.user, any subsequent route handler
//  (such as your updateProfile function) can access req.user.id to identify the authenticated user.

// ===============================================================================
// HW:- How to schedule the deltion process of the account.
// Update Profile:-
exports.updateProfile = async (req,res) =>{//This is an additional details can also be said.
    try {
        // get data:
        const {dataofBirth="",about="",contactNumber,gender}=req.body;
        // get user id from token that i passed during authentication.
        const id= req.user.id;
        // validation
        if (!contactNumber || !gender || !id) {
            return res.status(400).json({
                success:false,
                message:"All details are not present.",
            });
        }
        // find profile
        const UserDetails=await User.findById(id);
        const profileID= UserDetails.additionalDetails;
        const profileDetails=await Profile.findById(profileID);
        // update in the profile section
        profileDetails.dataofBirth=dataofBirth;
        profileDetails.gender=gender;
        profileDetails.contactNumber=contactNumber;
        profileDetails.about=about;
        await profileDetails.save();
        // return response
        return res.status(200).json({
            success:true,
            message:"Profile Updated Successfully",
            profileDetails,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Profile not Updated",
            error:error.message
        })
    }
}

exports.deleteAccount= async (req,res)=>{
    try {
        // get id
        const id= req.user.id;
        // validate
        const UserDetails=await User.findById(id);
        if (!UserDetails) {
            return res.status(404).json({
                success:false,
                message:"Id is not present.",
            });
        }
        // delete profile[Additional Details].
        
        const profileID= UserDetails.additionalDetails;
        const deleteUserProfile=await Profile.findByIdAndDelete(profileID);
        // or the just above line can also be written as:-
        // await Profile.findByIdAndDelete({_id:UserDetails.additionalDetails});
        // delete user :-----
        // TODO:HW make the enroll count student less when account is deleted.
        const deleteUser=await User.findByIdAndDelete(id);
        // and just above line can be written as :-
        // await User.findByIdAndDelete({_id:id});
        // return response.
        return res.status(200).json({
            success:true,
            message:"User Account is deleted Successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Id is not present.",
        });
    }
}


exports.getAllUserDetails= async (req,res) =>{
    try {
        // get id:-
        const id=req.user.id;
        // validation and get the user details:-
        const UserDetails= await User.findById(id).populate("additionalDetails").exec();
        // return response:-
        console.log(UserDetails);
        return res.status(200).json({
            success:true,
            message:"gettingAllUserDetails Successfully",
            data:UserDetails,
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"gettingAllUserDetails is not Successfully.",
        });
    }
}


// -----------------------------------------------------------------------------------------------------
//                                          This is extra added By Love Bhai Code review it MUST.
// -----------------------------------------------------------------------------------------------------
exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,//Search About this HW
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: `Error:->,${error.message}`,
      })
    }
};
  
exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.user.id
      const userDetails = await User.findOne({
        _id: userId,
      })
        .populate("courses")
        .exec()
      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.courses,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};