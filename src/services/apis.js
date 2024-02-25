// // yhn par kin se link pe call karne jana hai wo sab kuch mention hoga.

// const BASE_URL = process.env.REACT_APP_BASE_URL
// console.log("??????????????????????????",process.env);

// console.log("------------------",BASE_URL)
// console.log("first",catogories?.CATEGORIES_API)
// //http://localhost:4000/api/v1/course/showAllCategorys




const BASE_URL = process.env.REACT_APP_BASE_URL


// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendOTP",
  SIGNUP_API: BASE_URL + "/auth/signUp",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


// Vehical payment ENDPOINTS
export const PaymentEndPoint = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
}



// Vehical Creation and read ENDPOINTS
export const VehicalDataEndPoints = {
  VEHICAL_CREATE: BASE_URL + "/vehical/createVehical",
  VEHICAL_READ: BASE_URL + "/vehical/getAllVehical",
  VEHICAL_A_READ: BASE_URL + "/vehical/get_A_Vehical",
  
}
// Vehical Verification
export const VehicalDocVerification = {
  VEHICAL_DOC_API: BASE_URL + "/vehical/docVerifycreate",
}
