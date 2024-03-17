import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
// import { setUser } from "../../slices/profileSlice"
const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,  
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export function sendOtp(email, navigate) {
  console.log("first",SENDOTP_API)
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error(`${error.response.data.val===0?"User Already Exisist.":"Could Not Send OTP "}`)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed",error)
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      dispatch(setUser(response.data.user))
      localStorage.setItem('user', JSON.stringify(response.data.user));
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      navigate('/dashboard/home-page')
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

// export function getPasswordResetToken(email, setEmailSent) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", RESETPASSTOKEN_API, {
//         email,
//       })

//       console.log("RESETPASSTOKEN RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Reset Email Sent")
//       setEmailSent(true)
//     } catch (error) {
//       console.log("RESETPASSTOKEN ERROR............", error)
//       toast.error("Failed To Send Reset Email")
//     }
//     toast.dismiss(toastId)
//     dispatch(setLoading(false))
//   }
// }

// export function resetPassword(password, confirmPassword, token, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", RESETPASSWORD_API, {
//         password,
//         confirmPassword,
//         token,
//       })

//       console.log("RESETPASSWORD RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Password Reset Successfully")
//       navigate("/login")
//     } catch (error) {
//       console.log("RESETPASSWORD ERROR............", error)
//       toast.error("Failed To Reset Password")
//     }
//     toast.dismiss(toastId)
//     dispatch(setLoading(false))
//   }
// }

export function logout(navigate) {
  return (dispatch) => {//redux-thunk
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

export function getPasswordResetToken(email,setEmailSent){
  return async (dispatch)=>{
    dispatch(setLoading(true));
    try {
      console.log(RESETPASSTOKEN_API)
      const response = await apiConnector("POST",RESETPASSTOKEN_API,{email});
      console.log("Reset Password token Response?????????...",response.data.registerUser);
      // console.log("Reset Password token Response...",(await response).data.success.registerUser);
      if (!response.data.success) {
        // throw Error((await response).data.message),
        throw new Error(response.data.message)
        
      }
      toast.success("Reset Email Sent");
      // console.log("first ............................................")
      setEmailSent(true);
    } catch (error) {
        console.log("Reset Password Token Error.",error);
        toast.error(`OTP Not Sent ${error}`)
    }
    dispatch(setLoading(false));
  }
}



export function resetPassword(password,confirmPassword,token,navigate){
  return async (dispatch)=>{
    dispatch(setLoading(true))
     try {
      const response = await apiConnector("POST",RESETPASSWORD_API,{password,confirmPassword,token});
      console.log("RESET Password response.......",response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success(`Password Reset Successfully`);
      navigate("/login")
     } catch (error) {
        console.log("Reset Password Error.",error);
        toast.error(`Unable to reset password ${error}`)
     }
     dispatch(setLoading(false)); 
  }
}
