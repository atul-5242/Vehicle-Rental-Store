import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setSingleUserData} from '../../../slices/authSlice';
import {Approved, SingleUserDetails} from '../../../services/operations/AdminCalls'
import { useNavigate } from 'react-router-dom';
const CustomerRentedVehicles = () => {



  const { singleUserData } = useSelector((state) => state.auth);
  // const [dataofUser,setdataofUser] = useState(singleUserData);
  console.log("Single uSer Data Setted QQQQQQQQQQQQQQAAAAAAAAAAAAAAAA",singleUserData)
  const navigate=useNavigate();
  const [toggle,settoggle]=useState(false);
  console.log("Atul", singleUserData);
  const [verifiactiondata,setverificationdata]=useState(null);
  const dispatch=useDispatch();  
  const [buttonClicked, setButtonClicked] = useState(false);
  // User Approved Vehical Array:-
  const [approvedArray,setapprovedArray]=useState([]);









  // const [impAPI,setimpAPI] = useState(null);
 async function ApprovedClicked  (id,vehicalId,dispatch,navigate){


    setButtonClicked(true); //
    const result=await dispatch(Approved(id,vehicalId,dispatch,navigate));
    setapprovedArray(singleUserData.ApprovedVehical)
    // setimpAPI()
    window.location.reload();
      
    // console.log("Indian Team",result?.UserDetails);
    // setdataofUser(result?.data?.Users[0]);
    // setSingleUserData(result?.data?.Users[0])
    // console.log("first updated''''''''''''''''",dataofUser)
    // dispatch(setSingleUserData(result?.UserDetails))
    // sessionStorage.setItem("singleUser", JSON.stringify(result?.UserDetails));
    console.log("Approval Single USER Details ")

    
  } 





  console.log("The Approved Data Array:---------",approvedArray)
  console.log("The dataofUser Data Array:---------",singleUserData.ApprovedVehical)
  
  
  // User Approved State:
  const [approved,setApproved]=useState("");
  // const [variable1,setVariable]=useState([]);
  
  useEffect(() => {
      // const res=dispatch(SingleUserDetails(navigate,singleUserData._id,dispatch))
      // setdataofUser(res?.data?.Users[0]);
      setButtonClicked(false); //
      // setSingleUserData(res?.data?.Users[0])
      
      // console.log("first send third",dataofUser.ApprovedVehical)
      setapprovedArray(singleUserData.ApprovedVehical)

      }, [buttonClicked]); // Add toggle as a dependency here
      
      
    // console.log("Now Changed Once",singleUserData.ApprovedVehical[0]);
    
  return (
    <div className=''>


<div className={`${toggle?"bg-white":"bg-[#F1F2FF]"} justify-center flex w-[1000px] rounded-3xl p-10  ${toggle ? 'fixed top-0 z-10' : ''} ml-56 ${toggle?'mt-40':'mt-0'} transition-all z-${toggle?"10":"0"} ${toggle?"visible":"invisible"}`}> 
      <div>
        <img src={verifiactiondata} className={`${toggle?"w-96 h-96":"w-0 h-0"}`} alt="" />
      </div>
        {
          console.log("Toggle here:->+",toggle)
        }
      <div className="text-xl ml-20">
      <button onClick={()=>{settoggle(false)
        toast("Cancel")
      }}>
        ✘
        </button>
      </div>
        


</div>
      <div className='flex flex-row gap-20 mt-10 ml-20'>
        {/* left */}
        <div className='flex justify-center flex-col'>
          {/* profile */}
          <div>
            
            <img src={singleUserData.image} alt="" className='w-48 rounded-3xl' />
            {
              console.log("The image url :" , singleUserData.image)
            }
          </div>
          {/* name */}
          <div className='text-black text-lg flex justify-center mt-5'>
            {singleUserData.firstName} {singleUserData.lastName}
          </div>
          {/* Verification Documents */}
          <div className='flex justify-center flex-col mx-auto mt-6 gap-5'>
            {/* Aadhar */}
            <div>Aadhar Card <span>
              
              <button onClick={()=>{
                settoggle(true);
                setverificationdata(singleUserData.additionalDetails.aadharCard)
              }}>View</button>
              </span></div>
            {/* Driving License */}
            <div>Driving License <span>
              
            <button onClick={()=>{
                settoggle(true);
                setverificationdata(singleUserData.additionalDetails.drivingLicence)
              }}>View</button>
              
              </span></div>
            {/* Pan Card */}
            <div>Pan Card <span>
              
            <button onClick={()=>{
                settoggle(true);
                setverificationdata(singleUserData.additionalDetails.photograph)
              }}>View</button>
              
              </span></div>
          </div>
        </div>
          {/* right */}
        <div>
          {/* Cards */}
          <div>
            <div className='w-[1024px] overflow-auto h-[500px] flex flex-wrap gap-5'>
              {singleUserData.RentedVehical.map(vehicle => (
                <div key={vehicle._id} className='card flex flex-col justify-center border rounded-3xl border-richblack-800 shadow-2xl p-1 h-fit'>
                  <img src={vehicle.VehicalImage} alt={vehicle.Name} className='w-72 rounded-3xl' />
                  <div className='flex flex-col'>
                    <div className='flex gap-1 justify-around'>
                      <div className='flex gap-3'>
                        <div className='flex mx-auto'>{vehicle.Name}</div>
                        <div className='flex mx-auto'>{vehicle.Price}Rs</div>
                      </div>
                      <button className='text-blue-100 underline'>
                        {

                        }
                        Get Details
                      </button>
                        {/* <div className='flex mx-auto'>{vehicle.Type}</div>
                        <div className='flex mx-auto'>{vehicle.Description}</div> */}
                    </div>
                      {
                        // console.log("Approval Chekar:",singleUserData)
                      }

                      <div className='flex justify-end gap-10 mx-auto mt-5 mb-2'>
                        {/* // console.log("Updated Single User}}}}}}}+++++++++++++",singleUserData) */}
                        {
                          approvedArray.includes(`${vehicle._id}`) ? (

<div>Approved</div>

                           
                          ) : (
                            <div>
                            <div className='flex bg-black shadow-black shadow-2xl hover:bg-white  hover:border-black text-white hover:text-black p-2 rounded-3xl transition-all duration-200'>
                              hello
                              <button onClick={()=>ApprovedClicked(singleUserData._id,vehicle._id,dispatch,navigate)}>
                                {
                                  console.log("Here::::::::::::::::::",vehicle)
                                }
                                Accept
                              </button>
                            </div>
                            <div className='flex bg-black shadow-black shadow-2xl hover:bg-white  hover:border-black text-white hover:text-black p-2 rounded-3xl transition-all duration-200'>
                              <button>Decline</button>
                            </div>
                          </div>
                          )
                        }

                        

                      </div>
                    </div>
                  </div>

              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CustomerRentedVehicles;
