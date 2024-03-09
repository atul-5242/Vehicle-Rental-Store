import React from "react";
import img1 from "../../../data/Images/carlogo.png";
import img2 from "../../../data/Images/logo.jpg";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Rented_Vehical_fun, get_A_Vehical } from "../../../services/operations/AdminCalls";
import { useEffect, useState } from "react";

const Rented_item = () => {
  const { user } = useSelector((state) => state.profile);
  const [rentedVehical, setrentedVehical] = useState([]);
  const {token} = useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(Rented_Vehical_fun(token));
        console.log("--------------------FFFFFFFFFFFFFFFF------------------", res);
        setrentedVehical(res?.data?.UserDetails_Rented?.RentedVehical);
      } catch (error) {
        console.error("Error fetching rented vehicles:", error);
      }
    };
  
    fetchData();
  }, []);
  

  console.log("rentedVehical??????????????????",rentedVehical)
  return (
    <div className="">
      <div className="">
        <div className="text-richblack-600 text-center font-semibold text-4xl mt-3">
          <p>
            <span className="text-black font-bold">"</span>Your All Rented
            Items...<span className="text-black font-bold">"</span>
          </p>
        </div>
      </div>

{
  rentedVehical.map((val,index)=>{
    return (
<div key={index}>
<div className="flex flex-wrap gap-5 mt-20 justify-around">
  {/* Cards */}

  <div className="bg-white w-96 flex flex-col rounded-3xl">
    <img src={val.VehicalImage} alt="" className="w-96" />

    <Link to={"/buyedProductDetails"}>
      <button className="p-5 w-72 ml-10 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black  rounded-md">
        Get Details
      </button>
    </Link>
  </div>
</div>
</div>
      
    )
  })


}
         
    </div>
  );
};

export default Rented_item;
