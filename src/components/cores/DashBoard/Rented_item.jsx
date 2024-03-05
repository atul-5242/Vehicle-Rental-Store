import React from 'react'
import img1 from "../../../data/Images/carlogo.png"
import img2 from "../../../data/Images/logo.jpg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { get_A_Vehical } from '../../../services/operations/AdminCalls'
import { useEffect } from 'react'



const Rented_item = () => {
    const {user} = useSelector( (state) => state.profile );
    // const [variablehere1,setVariablehere1]=useState([]);
    // useEffect(() => {
    //     const getAllVehical_ = async () => {
    //         console.log("Hii there")
    //         res = await dispatch(get_A_Vehical());
    //         setVariablehere1(res?.data?.allVehicals)
    //         console.log("Respose:----------->>>>>>>>>",res);
    //     }
    //     getAllVehical_();
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //       }, [])
    console.log("T------------------------>",user?.RentedVehical[0]);
  return (
    <div className=''>

        <div className=''>
            
            <div className='text-richblack-600 text-center font-semibold text-4xl mt-3'>
                <p>
               <span className='text-black font-bold'>"</span>Your All Rented Items...<span className='text-black font-bold'>"</span>
                </p>
            </div>
        </div>
        <div className='flex flex-wrap gap-5 mt-20 justify-around'>


            {/* Cards */}


            <div className='bg-white w-96 flex flex-col rounded-3xl'>
                    
            <img src={user?.RentedVehical[0]} alt=""  className='w-96' />

                           
                <Link to={"/buyedProductDetails"}>
                <button className="p-5 w-72 ml-10 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black  rounded-md">
                Get Details
            </button>
                </Link>          
                   
                           </div>
                               </div>


</div>

  )
}

export default Rented_item