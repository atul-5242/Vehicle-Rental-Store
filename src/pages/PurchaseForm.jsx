// import React from 'react'
// import ImageButedCar from '../data/Images/R.jpeg'
// import { Link } from 'react-router-dom'
// const PurchaseForm = () => {


//     const paymentCall=()=>{

//     }
//   return (
//     <div>

//     <div className='flex justify-center items-center h-screen w-screen  gap-20  '>
//         <div>
//             <div>
//                 <img src={ImageButedCar} alt="Image" className='w-96'/>
//             </div>
//         </div>
//         <div>
//         {/* Form */}
//         <div className='border -translate-y-14 -z-[1] rounded-2xl p-4 shadow-2xl shadow-richblue-400 px-10'>
//                                             {/* Heading */}
//         <div className='text-4xl mb-10'>
//         Please Submit Your Details:
//         </div>
//         <form action="">
//             <div>


//                     <div>
//                         <p className='mb-2 font-semibold text-lg'>
//                             Select your Aadhar Card:
//                         </p>
//                         <div>
//                         <input type="file" className='
//                         file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                        
//                         file:px-3 file:py-1 file:mb-3 file:mt-3 file:ml-3
//                         file:border-none
//                         file:rounded-full
//                         file:text-white
//                         file:cursor-pointer
//                         file:shadow-lg file: shadow-richblack-500/50
//                         bg-gradient-to-br from-gray-600 to-gray-700
//                         text-black/80
//                         rounded-full
//                         cursor-pointer
//                         shadow-xl shadow-gray-700/60
                        
                        
//                         ' />
//                         </div>
//                     </div>
//                     <div>
//                         <p className='mb-2 mt-4 font-semibold text-lg'>
//                             Select your Aadhar Card:
//                         </p>
//                         <div >
//                             <input type="file" className='
//                          file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                        
//                          file:px-3 file:py-1 file:mb-3 file:mt-3 file:ml-3
//                          file:border-none
//                          file:rounded-full
//                          file:text-white
//                          file:cursor-pointer
//                          file:shadow-lg file: shadow-richblack-500/50
//                          bg-gradient-to-br from-gray-600 to-gray-700
//                          text-black/80
//                          rounded-full
//                          cursor-pointer
//                          shadow-xl shadow-gray-700/60
                         
                        
//                         ' />
//                         </div>
//                     </div>
//                     <div>
//                         <p className='mb-2 mt-4 font-semibold text-lg'>
//                             Select your Aadhar Card:
//                         </p>
//                         <div>
//                         <input type="file" className='
//                         file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                        
//                         file:px-3 file:py-1 file:mb-3 file:mt-3 file:ml-3
//                         file:border-none
//                         file:rounded-full
//                         file:text-white
//                         file:cursor-pointer
//                         file:shadow-lg file: shadow-richblack-500/50
//                         bg-gradient-to-br from-gray-600 to-gray-700
//                         text-black/80
//                         rounded-full
//                         cursor-pointer
//                         shadow-xl shadow-gray-700/60
                        
//                         ' />
//                         </div>
//                     </div>

//                     <div>
//                         <p className='mb-2 mt-4 font-semibold text-lg'>Enter your Contact Number</p>
//                         <input
//                         type="tel"
//                         className='
                                                    
//                             file:bg-white text-center file:px-10 h-10 w-64 file:py-4 file:m-20 file:mb-4 
//                             file:mt-4 file:ml-4 file:border-none file:rounded-full 
//                             file:cursor-pointer file:shadow-lg shadow-richblack-500/50
//                              bg-gradient-to-br from-gray-600 to-gray-700
//                               text-black/80 rounded-full 
//                               cursor-pointer shadow-xl shadow-gray-700/60'
//                             />

//                     </div>

//                     <div>
//                 <Link to={'/MainPaymentPage'}>
                
//                 <button onClick={paymentCall} className="translate-x-14  mb-2 mt-10 p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black  rounded-md">
//                 Submit 
//             </button>
//                 </Link>    
                
           
//                     </div>
//             </div>
                   
//         </form>
       
//         </div>

//         </div>




//     </div>

//     </div>
//   )
// }

// export default PurchaseForm

// -----------------------------------------------------------------
import React from 'react';
import ImageButedCar from '../data/Images/R.jpeg';
import { Link,useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVerificationDetails_Slice } from '../slices/VerificationDetails_Slice'; // Replace with the correct path
import { useForm } from 'react-hook-form';
import { verifyDocument } from '../services/operations/AdminCalls';
const PurchaseForm = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {token} = useSelector( (state) => state.auth );
  
  const { id } = useParams();
  const onSubmit = (data) => {
    const formData = new FormData()
    console.log("token",token)
    formData.append("aadharCard", data.aadharCard[0])
    formData.append("drivingLicence", data.drivingLicence[0])
    formData.append("photograph", data.photograph[0])
    formData.append("phoneNumber", data.phoneNumber)
    console.log("HHHHHHHHHHHHHHHHH",data.phoneNumber);
    // Dispatch the form data to Redux
    dispatch(setVerificationDetails_Slice(formData));
    console.log("FFFFFFFFFFFFFFFFFFFDDDDDDDDDDDDD",formData)
    dispatch(verifyDocument(formData,navigate,id))
    // dispatch(verifyDocument(data));
    // Add the rest of your logic here
  };

  return (
    <div>
      <div className='flex justify-center items-center h-screen w-screen gap-20'>
        <div>
          <div>
            <img src={ImageButedCar} alt='Image' className='w-96' />
          </div>
        </div>
        <div>
          <div className='border -translate-y-14 -z-[1] rounded-2xl p-4 shadow-2xl shadow-richblue-400 px-10'>
            <div className='text-4xl mb-10'>Please Submit Your Details:</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div>
                  <p className='mb-2 font-semibold text-lg'>Select your Aadhar Card:</p>
                  <div>
                    <input
                      type='file'
                      name='aadharCard'
                      {...register('aadharCard')}
                      className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 ...'
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Select your Driving License:</p>
                  <div>
                    <input
                      type='file'
                      name='drivingLicence'
                      {...register('drivingLicence')}
                      className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 ...'
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Select your Photograph:</p>
                  <div>
                    <input
                      type='file'
                      name='photograph'
                      {...register('photograph')}
                      className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 ...'
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Enter your Contact Number:</p>
                  <input
                    type='tel'
                    name='phoneNumber'
                    {...register('phoneNumber')}
                    className='file:bg-white text-center file:px-10 h-10 w-64 file:py-4 file:m-20 file:mb-4 file:mt-4 file:ml-4 file:border-none file:rounded-full file:cursor-pointer file:shadow-lg shadow-richblack-500/50 bg-gradient-to-br from-gray-600 to-gray-700 text-black/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60'
                  />
                </div>
                <div>
                  
                    <button
                      type='submit'
                      className='translate-x-14 mb-2 mt-10 p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black rounded-md'
                    >
                      Submit
                    </button>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseForm;
