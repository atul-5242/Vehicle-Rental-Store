import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
const ButtonComponent = ({text,active,linkto}) => {
  return (
    
    <div>{
      active==="yellow"?(
        
        <Link to={linkto}>
        <div  className='font-bold group flex flex-row text-richblack-800   
        rounded-xl p-3
         items-center
         gap-2 hover:scale-95  transition-all duration-300
         bg-yellow-50  shadow-lg shadow-blue-700 '>
                    {text}{ 
                      <TiArrowRight/>
                   }
                   
            </div>
              </Link>
            
            
            ):
            
            
            (
            
            <Link to={linkto}>
            <div  className='font-bold group flex flex-row border rounded-xl p-3 items-center
         gap-2 hover:text-white  hover:scale-95  transition-all duration-300 text-richblack-50
          bg-richblack-800 border-richblack-600 shadow-lg shadow-blue-700 '>
                    {text}

               
            </div>
            
            </Link>
            )
    }
    </div>
    
  )
}

export default ButtonComponent