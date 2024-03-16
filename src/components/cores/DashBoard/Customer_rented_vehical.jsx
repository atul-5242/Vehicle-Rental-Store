// import React from 'react'
// import { useSelector } from 'react-redux'

// const Customer_rented_vehical = () => {
//     const {singleUserData}= useSelector((state)=>state.auth);
//     console.log("Atul",singleUserData);


    

//   return (
//     <div>


//         <div className='flex flex-row gap-20 mt-10 ml-20'>
//             {/* left */}
//             <div className='flex justify-center flex-col'>

//                     {/* profile */}
//                     <div>
//                         <img src={singleUserData.image} alt="" className='w-48 rounded-3xl' />
//                     </div>
//                     {/* name */}
//                     <div className='text-black text-lg flex justify-center mt-5'>
//                         {singleUserData.firstName} {" "} {singleUserData.lastName}
//                     </div>

//                     {/* Vefication Documnets */}
//                     <div className='flex justify-center flex-col mx-auto mt-20 gap-5'>
//                         {/* Aadhar */}
//                         <div className=''>Aadhar Card <span>View</span></div>
//                         {/* Driving Lincenece */}
//                         <div>Driving Lincenece <span>View</span></div>
//                         {/* Pan Card */}
//                         <div>Pan Card <span>View</span></div>
//                     </div>
                
//             </div>
//             {/* right */}


//             {/* Rented Vehical */}
//             {
//                     // singleUserData.RentedVehical[0]
//             }
//             <div>

//             {/* Cards */}
//             <div>
//                 <div className='w-[1024px] overflow-auto h-[570px]'>
                    
                     

//                 </div>
//             </div>

//             </div>
//         </div>





//     </div>
//   )
// }

// export default Customer_rented_vehical


import React from 'react';
import { useSelector } from 'react-redux';

const CustomerRentedVehicles = () => {
  const { singleUserData } = useSelector((state) => state.auth);
  console.log("Atul", singleUserData);

  return (
    <div>
      <div className='flex flex-row gap-20 mt-10 ml-20'>
        {/* left */}
        <div className='flex justify-center flex-col'>
          {/* profile */}
          <div>
            <img src={singleUserData.image} alt="" className='w-48 rounded-3xl' />
          </div>
          {/* name */}
          <div className='text-black text-lg flex justify-center mt-5'>
            {singleUserData.firstName} {singleUserData.lastName}
          </div>
          {/* Verification Documents */}
          <div className='flex justify-center flex-col mx-auto mt-20 gap-5'>
            {/* Aadhar */}
            <div>Aadhar Card <span>View</span></div>
            {/* Driving License */}
            <div>Driving License <span>View</span></div>
            {/* Pan Card */}
            <div>Pan Card <span>View</span></div>
          </div>
        </div>
          {/* right */}
        <div>
          {/* Cards */}
          <div>
            <div className='w-[1024px] overflow-auto h-[570px] flex flex-wrap gap-5'>
              {singleUserData.RentedVehical.map(vehicle => (
                <div key={vehicle._id} className='card flex flex-col justify-center'>
                  <img src={vehicle.VehicalImage} alt={vehicle.Name} className='w-96 rounded-3xl' />
                  <div className='flex'>
                      <div className='flex mx-auto'>{vehicle.Name}</div>
                      <div className='flex mx-auto'>{vehicle.Price}</div>
                      <div className='flex mx-auto'>{vehicle.Type}</div>
                      <div className='flex mx-auto'>{vehicle.Description}</div>
                    </div>
                  </div>
                  
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRentedVehicles;
