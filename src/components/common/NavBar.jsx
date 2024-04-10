import React, { useState } from 'react'
import CSSFile from '../../App.css'
import ImageLogo from '../../data/Images/carlogo.png'
import {NavbarLinks} from '../../data/navbar-links';
import { Link, matchPath, useLocation } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"
import {IoIosArrowDropdownCircle} from "react-icons/io"
import ProfileDropdown from '../cores/Auth/ProfileDropDown'
import {apiConnector} from '../../services/apiconnector';
import {catogories} from '../../services/apis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setIshover} from '../../slices/authSlice';
// import {  useNavigate } from "react-router-dom"
// import { logout } from '../../services/operations/authAPI';
import { setUser } from '../../slices/profileSlice';
import { IoIosArrowDown } from "react-icons/io";

   




const NavBar = () => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    
    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    // const {totalItems} = useSelector( (state) => state.cart )
    // console.log("USER...................>>>>>>>>>>>>>>>>>>>>>>",user)
    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath({path:route},location.pathname)
    }
    


    // const [subLinks,setSubLinks] = useState([]);

    // const fetchSubLinks =async ()=>{
    //     try {
    //         const result = await apiConnector("GET",catogories?.CATEGORIES_API);
    //         console.log("printing SubLinks Result :",result);
    //         setSubLinks(result.data.Category)
    //         // console.log(result.data.data);
    //     } catch (error) {
    //         console.log("Error Hai",error)
    //     }
    // }
    
    // useEffect(() => {
    //     fetchSubLinks();
    //     if (!user && localStorage.getItem('user')) {
    //         const storedUser = JSON.parse(localStorage.getItem('user'));
    //         dispatch(setUser(storedUser));
    //     }
    // }, [dispatch, user]); // Include fetchSubLinks in the dependency array

    
    const {ishover} = useSelector( (state) => state.auth );
    return (
        <div className='z-50 flex items-center pt-2 pb-2 gap-42 text-white justify-around '
        onMouseEnter={() =>{
            dispatch(setIshover(true))
            console.log("Someevent occured",ishover)
        } }
        onMouseLeave={() =>dispatch(setIshover(false)) }
        >
            {/* Image */}
            {/* {console.log("Length----------",subLinks.length)}
            { */}
            {/* // console.log("4252:",subLinks)} */}
            <div className='flex '>
                {/* Part 1 */}
                <div className='z-20'>
                    <Link to={"/"} className=''>
                    
                        <img loading='lazy' src={ImageLogo} alt=""  className=' w-20 flex items-center -translate-x-48' />
                    </Link>
                        
                </div>
                {/* Mid */}
                <div className='text-black items-center flex -translate-x-40 text-semibold text-[16px] gap-5' >
                    {/* LI link */}
             {/* 1 */}      

                            <div className='relative group hover:cursor-pointer '>
                            <div className='flex items-center gap-1' onClick={() => setOpen(false)}>Who we are <IoIosArrowDown className='group-hover:-rotate-180 transition-all duration-500 ' /></div>
                            
                            <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover:w-full'></div>

                            <div className='invisible absolute text-black z-10 items-center shadow-2xl shadow-richblack-25
                                opacity-0 transition-all duration-200 group-hover:z-50 group-hover:visible flex justify-evenly
                                group-hover:opacity-100 w-[1600px] translate-y-1 -translate-x-36 h-[100px] bg-richblack-5'>
                                    <div className='relative group/edit'>
                                        Our actions
                                    <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover/edit:w-full'></div>

                                    </div>
                                    <div className='relative group/edit'>
                                    Our executives
                                    <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover/edit:w-full'></div>

                                    </div>
                                    <div className='relative group/edit'>
                                    Learn about who we are
                                    <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover/edit:w-full'></div>

                                    </div>
                            </div>
                            </div>

                            {/* 2 */}
                            <div className='relative group hover:cursor-pointer'>
                            <div className='flex items-center gap-1'>Our Coummunity <IoIosArrowDown className='group-hover:-rotate-180 transition-all duration-500' /></div>
                            
                            <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover:w-full'></div>

                            <div className='invisible absolute text-black z-0 items-center shadow-2xl shadow-richblack-25
                                opacity-0 transition-all duration-200 group-hover:visible flex justify-evenly
                                group-hover:opacity-100 w-[1600px] translate-y-1 -translate-x-64 h-[100px] bg-richblack-5'>
                                    <div className='relative group/edit'>
                                        Our actionsnp
                                    <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover/edit:w-full'></div>

                                    </div>
                                    <div className='relative group/edit'>
                                    Our executives
                                    <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover/edit:w-full'></div>

                                    </div>
                                    <div className='relative group/edit'>
                                    Learn about who we are
                                    <div className='absolute right-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 overflow-hidden group-hover/edit:w-full'></div>

                                    </div>
                            </div>
                            </div>
{/* ---3--------- */}
                    <Link>
                            <div className='relative group '>
                            <div className='flex items-center gap-1'>Let's Connect With us</div>
                            
                            <div className='absolute right-0 w-0 h-[1px] bg-black transition-all duration-500 overflow-hidden group-hover:w-full'></div>
                            </div>
                    </Link>


                    
                </div>
            </div>
           
                    {/* Login/SignUp/Dashboard Part 3*/}
        <div className='flex gap-x-4 items-center'>
            

{
    user && user?.accountType !== "Instructor" && (
        <div>
            {/* To seen something */}
        </div>
       
    )
}
{
    token === null && (

            <Link to="/login">
                <button className=' text-black'>
                   <pre className='font-inter'>Login</pre> 
                </button>
            </Link>        
    )
}
{
    token === null && (
            <Link to="/signup">
            <button className=' text-black'>
                   <pre className='font-inter'>| Sign Up</pre> 
                </button>
            </Link>
        
    )
}
{/* <div onClick={()=>dispatch(logout(navigate))}>Hello</div> */}

{console.log("Profile---------------------------------",token)}

{
    token !== null && <ProfileDropdown/>
}

</div>
        </div>
    )
}

export default NavBar;