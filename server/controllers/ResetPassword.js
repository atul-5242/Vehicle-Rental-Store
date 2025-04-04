const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require("crypto")
// resetPasswordToken
exports.resetPasswordToken = async (req,res)=>{
   try {
        // get email from request ki body
        const email = req.body.email;
        // check user for this email  , email validation:-
        const user = await User.findOne({email:email});
        console.log(user)
        if(!user){
            return res.json({
                success:false,
                message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
                registerUser:false,
            });
        }
        // generate token
        // const token = crypto.randomUUID()--------deprected in love bhai code.
        const token = crypto.randomBytes(20).toString("hex");
        // update user by adding token and expiration time.
        const updatedDetails = await User.findOneAndUpdate(
            {email:email},
            {
                token:token,
                resetPasswordToken:Date.now()+5*60*1000,
            },
            {new:true}
        ); 
        console.log("DETAILS", updatedDetails);
        // create url 
        const url = `https://vehiclestore.atulmaurya.in/reset-password/${token}`;//this will become a different frontend 
        // link based on the different value of frontend link. 
        
        
        // send mail containing the url 
        await mailSender(email,"Password Reset Link.",
                                `Password Reset URL link:${url}`);
        // return response
        return res.json({
            success:true,
            message:"Email is sent Successfully Please Check your Email For Reset Password.",
            registerUser:true,
        });
        
        
    
        // this token and expiration time is present in the URL of different user
    
    
    
    
   } catch (error) {
        return res.json({
            success:false,
            message:"Something Went Wrong While Sending reset password mail.",
        });
   }


    

}

// resetPassword.

exports.resetPassword = async (req,res)=>{
    try {
            // data fetch
        const {password,confirmPassword,token}=req.body//yhn par token frontend ne url se uta kar dala hai.
        // validation
        // password[0]===confirmPassword[0]?console.log("Hi ulo ban gye hum to yhn ho rha hai reset password"):console.log("LOL.............",password[0],confirmPassword[0])
        if(password[0]!==confirmPassword[0]){
            return res.json({
                success:false,
                password,
                confirmPassword,
                message:"Password not matching.",
            });
        }
        // get userDetails from db using token 
        const userDetails=await User.findOne({token:token});
        // if no entry - invalid token 
        console.log("USER DETAILS BY LINK TOKEN:",userDetails);
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is invalid",
            })
        }
        // token time check
        if(userDetails.resetPasswordExpires < Date.now()){
            return res.json({
                success:false,
                message:"Token is expired,please regenerate your token.",
            })
        }
        // hash password
        const hashedPassword=await bcrypt.hash(password[0],10);
        // password update
        await User.findOneAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true},
        );
        //return response
        return res.status(200).json({
            success:true,
            message:"Password reset Successful."
        });
    } catch (error) {
        return res.json({
            success:false,
            message:"Something Went Wrong While Sending reset password mail.",
        }); 
    }
}