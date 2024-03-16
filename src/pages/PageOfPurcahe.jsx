import React from 'react'
import ImageCar from '../data/Images/R.jpeg'
import { Link,useParams  } from 'react-router-dom'
import { get_A_Vehical } from '../services/operations/AdminCalls';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const PageOfPurcahe = () => {
    const { id } = useParams();
    console.log("PPPPPPPPP",id)
    const dispatch = useDispatch()
    const {user}=useSelector((state)=>state.profile);
    console.log("#42...........................................",user.additionalDetails.aadharCard==null)
    // let additionalDetails=user
    let additionalDetails=user.additionalDetails.aadharCard==null;
    const [variablehere,setVariablehere]=useState([]);
    useEffect(() => {
    const getVehical_ = async () => {
        console.log("Hii there")
        let res = await dispatch(get_A_Vehical(id));
        setVariablehere(res?.data?.vehicle)
        console.log("Respose:----OF A<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--",res);
    }
    getVehical_();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      console.log("Here I am Present:+++++++++++++++++++++++++++")
      
  return (
    <div className='flex justify-center h-screen items-center'>

    {/* Main */}
    <div className='flex flex-row gap-28'>
        {/* Left */}
        <div className='flex flex-col gap-10'>
            <div className='text-4xl font-extrabold font-mono'>
                Your Order...
            </div>
            <div className=''>
                <img src={variablehere?.VehicalImage} className='rounded-2xl w-[600px]' alt="" />
            </div>
        </div>
        {/*Right  */}
        <div className='flex flex-col gap-10 w-96'>
            {/* Product name */}
            <div className='text-4xl'>{variablehere?.Name}</div>
            <div >
                {variablehere?.Description}
            </div>
            <div className='font-bold text-lg'>Price:{variablehere?.Price}</div>
            <div>
                {/* <Link to={`${additionalDetails?}/MainPaymentPage/${id}:/purchaseForm/${variablehere?._id}`}>
                <button className="p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black  rounded-md">
                Rent It 
            </button>
                </Link> */}
            <Link to={additionalDetails ? `/purchaseForm/${variablehere?._id}` : `/MainPaymentPage/${variablehere?._id}`}>
                <button className="p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black rounded-md">
                    Rent It
                </button>
            </Link>

            </div>
        </div>
    </div>

    </div>
  )
}

export default PageOfPurcahe

