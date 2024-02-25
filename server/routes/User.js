const express = require("express")
const router = express.Router()

// Controllers:

const {sendOTP,signUp,login,changePassword}= require("../controllers/Auth");
const {resetPasswordToken,resetPassword}= require("../controllers/ResetPassword");
const {auth}= require("../middlewares/auth");




// jab hum logined hai hi nhi to auth wala middleware kyu hi chalaye.
router.post("/sendOTP",sendOTP);
router.post("/signUp",signUp);
router.post("/login",login);

// jab hum logined hai hi nhi to auth wala middleware kyu hi chalaye.
router.post("/reset-password-token",resetPasswordToken);//forget wale ke tarha
router.post("/reset-password",resetPassword);


// ess wale me auth wale ka use hai bass.
router.post("/changePassword",auth,changePassword);

module.exports = router