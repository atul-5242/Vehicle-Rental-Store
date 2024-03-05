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
  VEHICAL_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  VEHICAL_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
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
