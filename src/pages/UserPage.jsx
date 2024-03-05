import React, { useEffect, useState } from 'react'
import imageCheck from '../data/Images/R.jpeg'
import { Link ,useParams,useLocation  } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehical } from '../services/operations/AdminCalls';
import PageOfPurcahe from './PageOfPurcahe';
// import {HomePageExplore} from '../../../data/homepage-explore';

    const tabsName = [
        "Car",
        "Bike",
        "BMW",
        "Thar",
        "Rolls Royce",
    ];


    
const UserPage = () => {
    const location = useLocation();
    const dispatch=useDispatch();
    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const {dataofVehical} = useSelector((state)=>state.item)

    const setMyCard= (value) =>{
        setCurrentTab(value);
    }
    let res;
    const [variablehere,setVariablehere]=useState([]);
    useEffect(() => {
    const getAllVehical_ = async () => {
        console.log("Hii there")
        let a=(dataofVehical)?1:await dispatch(getAllVehical());
        console.log("Data comes from:->",a);
        res = (dataofVehical)?dataofVehical:await dispatch(getAllVehical());
        setVariablehere(res?.data?.allVehicals)
        console.log("Respose:----------->>>>>>>>>",res);
    }
    getAllVehical_();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      

    return (
    <div>
        <div className='flex flex-col text-center mt-10 justify-center'>
            {/* Heading */}
            <div className='text-4xl font-semibold text-white text-center flex gap-2 justify-center'>
                
            </div>
            {/* SubHeading */}
            <div className='text-richblack-600 text-center font-semibold text-4xl mt-3'>
                <p>
               <span className='text-black font-bold'>"</span>It's Your Store Choose Your prefered Chioce<span className='text-black font-bold'>"</span>
                </p>
            </div>
        </div>
          
            {/* Tab */}
            <div className='flex justify-center'>
                <div className='flex mt-5 text-white gap-5 bg-[#161D29] mb-10 shadow-sm shadow-richblack-200 w-[35%] justify-center  p-2 rounded-3xl'>
                    {
                        tabsName.map((element,index)=>{
                            return (
                                <div key={index} className='flex gap-3  hover:text-[#E9EAF8] hover:cursor-pointer duration-500' onClick={()=>setMyCard(element)}>
                                    <div className={`${currentTab===element?"bg-[#000814]":"bg-[#161D29]"} hover:bg-[#3c424b] px-4 py-1 rounded-3xl`}
                                        
                                    >
                                        {
                                            element
                                        }
                                    </div>
                                   
                                   
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        {/* Card */}


        <div className=' -translate-y-5 flex  flex-col gap-10 bg-black p-20 shadow-2xl ' style={{ boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.8)' }}>

<div className='flex flex-row flex-wrap justify-center gap-10 w-[1300px]'>
    
{
    
    variablehere.map((val,index)=>{
        console.log("Image is here:",val[0])
        
        return (
            <div className='bg-white w-96 flex flex-col'>
                    
            <img src={val?.VehicalImage} className='shadow-2xl shadow-black w-96 h-60' alt="" />
                   <p className='text-lg text-black flex justify-center'>{val?.Name}</p>
                   <p className='text-lg text-black flex justify-center'>{val?.Price}</p>
                   <div className='flex justify-center'>
                   <Link to={`/purchasePage/${val?._id}`}>
           
                   <button className='text-white text-lg bg-black shadow-2xl shadow-white mb-2 p-4 rounded-xl'>
                       Rent</button>
                   </Link>
                   </div>
                       </div>
        )
    })
}
       
    </div>

    


</div>
    </div>
  )
}
export default UserPage