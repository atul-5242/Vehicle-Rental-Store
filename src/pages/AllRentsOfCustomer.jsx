import React, { useEffect } from 'react'
import { SingleUserDetails, UserDetails } from '../services/operations/AdminCalls'
import { useNavigate, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const AllRentsOfCustomer = () => {

    const [approved,setapproved]=useState([]);
    const [rented,setreneted]=useState([]);
    const [pending,setpending]=useState([]);
    // setapproved(res?.data?.UserDetails_Rented?.ApprovedVehical);
    // setdecline(res?.data?.UserDetails_Rented?.DeclinedVehical);
    // setpending(res?.data?.UserDetails_Rented?.PendingVehical);

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [variable1,setVariable]=useState([]);
    useEffect(() => {
        const funUser = async () => {
            console.log("Hii there")
            let res = await dispatch(UserDetails());
            setVariable(res?.data?.Users)
            console.log("Respose:----OF User<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--",res?.data?.User);
        }
        funUser();
    }, [])
    console.log("Variable 1 :",variable1)
  return (
    <div className='flex justify-center flex-col'>

        <div className='w-[1024] flex justify-center flex-col mx-auto text-4xl mb-20'>
            Your All Customer Ordred...
        </div>
        <div className='w-[1150px] font-bold mb-4 mx-auto  flex justify-around'>
            <div>S.No</div>
            <div>Name</div>
            <div className='ml-20'>Email</div>
            <div className='ml-20'>Rented Vehical</div>
            <div>Verification Submittion</div>
            <div>Uproved Vehical</div>
            <div>View Details</div>
        </div>
        <div className='w-[1200px] shadow-2xl shadow-[#99ebff] h-[500px] flex justify-center mx-auto rounded border-l border-r border-b
            overflow-auto 
        '>
        <table className='text-black '>
    {
        variable1.map((val,index)=>
            <tr className='flex text-black gap-16 text-base p-4 border-b  w-[1100px]' key={index}>
                     <td>{index + 1}</td>
                    <td className='max-w-[100px] flex flex-wrap'>{val.firstName} {" "} {val.lastName}</td>
                    <td className=''>{val.email}</td>
                    <td className='ml-6'>{val.ApprovedVehical.length}</td>
                    <td className='ml-16'>{val.additionalDetails.length==0?<div>Pending</div>:<div>Completed</div>}</td>
                    <td className='ml-16'>{val.RentedVehical.length}</td>
                    <button className='ml-16' onClick={()=>dispatch(SingleUserDetails(navigate,val._id,dispatch))}>View Details</button>
                    
            </tr>
        )
    }
            

        </table>
        </div>
        
    </div>
  )
}

export default AllRentsOfCustomer