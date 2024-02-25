import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';
import OtpInput from 'react-otp-input';
import { RxCountdownTimer } from "react-icons/rx";

const VerifyEmail = () => {

    const [otp,setOtp] = useState("");
    const {signupData,loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("SignUp Data",signupData)
    console.log("OTP",otp)
    useEffect(()=>{
        // Only allow access of this route when user has filled the signup form
        if (!signupData) {
            navigate("/signup")
        }
    },[]);

    // const age=12;
    const handleVerifyAndSignUp = (e) =>{
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            // otp,
        }=signupData;
        console.log("SIGNUPDATA:__________________________",signupData)
        dispatch(
            signUp(
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
                navigate,
            )
        )
    }
    

  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center" >
        {loading?(
            <div className='spinner'></div>
        ):(
        <div className="max-w-[500px] p-4 lg:p-8">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
                Verify Email
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
                A verification code has been sent to you. Enter the code below
            </p>
        <form action="" onSubmit={handleVerifyAndSignUp}>
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
            

            <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
        </form>
        <button
              className="flex items-center text-blue-100 gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email))}
        >
        <RxCountdownTimer />
        Resend it
        </button>
        </div>
        )}
    </div>
  )
}

export default VerifyEmail