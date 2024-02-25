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

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
router.post("/capturePayment", capturePayment)
router.post("/verifyPayment", verifyPayment)
// router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);

module.exports = router