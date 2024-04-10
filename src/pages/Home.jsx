import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import image12 from '../data/Images/R.jpeg'
import Footer from "../components/common/Footer";
import { useDispatch, useSelector } from 'react-redux';


import Video from "../pages/BUGATTI_CENTODIECI_at_the_Wind_Tunnel.mp4";
// import h from '../assets/Images/bghome.svg'
const Home = () => {
  const customGradientStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(32,64,96,1) 1%, rgba(18,24,19,1) 6%, rgba(33,47,1,0.887920133873862) 12%, rgba(34,36,26,1) 34%, rgba(74,21,62,0.8627100498402486) 62%, rgba(9,9,121,1) 89%, rgba(0,212,255,1) 100%);`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const customGradientStyle2 = {
    backgroundImage: `linear-gradient(to right, #2F4F4F, #000080, #1E90FF, #87CEEB, #000000)`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  const {ishover} = useSelector( (state) => state.auth );
  console.log("Hover",ishover)
  return (
    <div className={`${ishover ? 'blur' : ''} transition-all duration-300 mt-[89px] -z-10
    `}>
      <div className="flex justify-around -z-10">
        {/* Video */}
        <div className="">
          <video
            src={Video}
            type="video/mp4"
            className="w-[900px] rounded-xl  shadow-2xl shadow-blue-500"
            autoPlay
            muted
            loop
          />
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-28">
          <div className="text-7xl translate-y-20 -translate-x-12 drop-shadow-2xl flex flex-col gap-3 ">
            <span>
              <span className="font-bold text-richblack-900">B</span>
              <span className="text-richblack-600 font-semibold">
                uild Future
              </span>
            </span>
            <span className="font-medium text-richblack-700">With Us</span>
          </div>
          <div className="w-96 text-lg">
            <span className="font-bold">~"</span> Unlock the Journey: Where
            Every Mile Feels Like Your Own. Your Perfect Adventure Starts Here
            at your Own Store. Drive Beyond <br /> Dreams!{" "}
            <span className="font-bold">"</span>
          </div>
          <div className="flex justify-center mb-5 -translate-y-12">
            <Link to={'/login'}>
            <button className="p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black  rounded-md">
              Let's Come for a ride!
            </button>
            </Link>
            
          </div>
        </div>
      </div>

      {/* Now Down Section */}
<div className="flex justify-center">
      <div className="flex justify-center mt-36 w-[1080px] bg-richblack-25 p-2 rounded-2xl ">
              <div className=" bg-black w-[1080px] border-pure-greys-200  translate-x-10 -translate-y-12 shadow-black shadow-2xl h-[500px] rounded-2xl p-20">
                <div className="flex gap-12">
                  {/* Left */}
                  <div className="text-white text-4xl font-bold flex flex-col">
                      <div className="text-pure-greys-5">About <br /> Our History
                      <div className="w-28 translate-x-6 bg-white h-1"></div>
                      </div>


                          <img src={image12} alt="" className="w-[28rem] rounded-xl mt-10 shadow-2xl shadow-white" />
                  </div>
                  {/* right */}
                  <div className="flex flex-col w-[40rem] gap-6 text-white">
                      <div>
                        
                    <li> Inception and Establishment: RentalStore was born
                    out of a vision for providing unparalleled mobility solutions.
                    Established in 2001.</li> 
                      </div>
                      <div>
                    <li>Founding Principles: Founded on the principles of
                    reliability and innovation, Rental Vehical emerged as
                    a local leader in the rental industry.</li> 
                      </div>
                      <div>
                  <li>Geographic Presence: Starting in Ayodhya, Your
                    Vehicle Rental Store quickly expanded its footprint to become a
                    trusted name in the region. Our strategic locations in Delhi,
                    Kolkata, and Mumbai make us easily accessible.
                      </li>   
                      </div>
                      <div>
                      <li>
                      Community Impact: Beyond providing rental services, Your Vehicle Rental
                    Store takes pride in its role as a community partner. 
                      </li>
                      
                      </div>
                      
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>

</div>


        {/* <div className="text-7xl font-semibold">
            OUR Vehicals for RENT
        </div> */}




      {/* Footer */}

      <Footer/>
    </div>
  );
};

export default Home;
