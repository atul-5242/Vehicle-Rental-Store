const Razorpay = require("razorpay");

exports.instance = new Razorpay({
    key_id:"rzp_test_XToHNGFyYidB0m",
    key_secret:process.env.RAZORPAY_SECRET,
    
});