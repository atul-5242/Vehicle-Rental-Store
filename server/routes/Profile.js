const express = require("express")
const router = express.Router()

const {auth} = require("../middlewares/auth");// Importing Middlewares
const {updateProfile,deleteAccount,getAllUserDetails,updateDisplayPicture,getEnrolledCourses} = require("../controllers/Profile"); 





router.put("/updateProfile",auth,updateProfile);
router.delete("/deleteAccount",auth,deleteAccount);
router.get("/getUserDetails",auth,getAllUserDetails);
router.put("/updateDisplayPicture",auth,updateDisplayPicture);
router.get("/getEnrolledCourses",auth,getEnrolledCourses);

module.exports = router