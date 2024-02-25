import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { resetPassword } from '../services/operations/authAPI';
const UpdatePassword = () => {


    const dispatch=useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [formData , setFormData]=useState({
        password:"",
        confirmPassword:"",
    })

    const {loading} = useSelector((state)=>state.auth);
    const [showPassword,setShowPassword]= useState(false);
    const [showConfirmPassword,setShowConfirmPassword]= useState(false);
    const token = location.pathname.split("/").at(-1);
    const {password,confirmPassword} = formData;


    const handleOnSubmit = (e)=>{
        e.preventDefault();
        dispatch(resetPassword(password,confirmPassword,token,navigate)); 
    }
    
    const handleOnChange = (e) =>{
        setFormData((prevData)=>(
            {
                ...prevData,//yhn par sare preveious data copy hogye and just below value assign ho rhi
                //  hai jo change ho rhe hai. 
                [e.target.name]:[e.target.value]
                //yhn par name ka use hogya jese input me name="passord" rakhe honge too yhn 
                // par usse name ki help se value
                //  set ho rhi hai ussi inout ke liye jiska wo name wo name yhn par hai.
            }
        ))
    }
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        {
            loading?(
                <div className='spinner'></div>
            ):(
                <div className="max-w-[500px] p-4 lg:p-8">
                    <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Choose new password
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            Almost done. Enter your new password and youre all set.
          </p>



        <form action="" onSubmit={handleOnSubmit}>
            <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    New Password <sup className="text-pink-200">*</sup>
                </p>
                <input type={showPassword?"text":"password"}
                    required
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    className="w-full p-3"
                />
                <span onClick={()=>setShowPassword((prev)=>!prev)}>
                    {
                        showPassword?(
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ):(<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
                    }
                </span>
            </label>
            <label className="relative mt-3 block">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Confirm New Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                className="form-style w-full !pr-10"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <button
                type='submit'
                className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
                Reset Password
            </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>




                </div>
            )
        }
    </div>
  )
}

export default UpdatePassword