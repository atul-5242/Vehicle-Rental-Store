// // Import the required modules
// const express = require("express")
// const router = express.Router()

// const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
// const { auth,isCustomer } = require("../middlewares/auth")

// router.post("/capturePayment", auth, isCustomer, capturePayment)
// router.post("/verifyPayment",auth, isCustomer, verifyPayment)
// router.post("/sendPaymentSuccessEmail", auth, isCustomer, sendPaymentSuccessEmail);

// module.exports = router


// Import the required modules
const express = require("express")
const router = express.Router()
const {auth,isCustomer,isAdmin}= require("../middlewares/auth");

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
router.post("/capturePayment",auth, capturePayment)
router.post("/verifyPayment", auth,verifyPayment)
router.post("/sendPaymentSuccessEmail", auth,sendPaymentSuccessEmail);

module.exports = router