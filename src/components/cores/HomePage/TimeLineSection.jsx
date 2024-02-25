import React from 'react'
import logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import Line from '../../../assets/gradient/Line 3.png'
import ImageOfGirl from '../../../assets/Images/TimelineImage.png'
const TimeLineSection = () => {

    var cnt=0;
    const content = [
        {
            Logo:logo1,
            Heading:"LeaderShip",
            SubHeading:"Fully committed to the success company",
            alt:"Image1",
        },
        {
            Logo:logo2,
            Heading:"Responsibility",
            SubHeading:"Students will always be our top priority",
            alt:"Image1",
        },
        {
            Logo:logo3,
            Heading:"Flexibility",
            SubHeading:"Fully committed to the success company",
            alt:"Image1",
        },
        {
            Logo:logo4,
            Heading:"Solve the problem",
            SubHeading:"Code your way to a solution",
        },
        
    ]


  return (
    // Main Div
    <div className='flex flex-row'>
        {/* Left Side Div */}
        <div>
        {
                
                content.map((element,index)=>{
                    return (
                        <div className='flex flex-col' key={index}>
                            
                            <div className='flex flex-row gap-8'>
                                {/* Image */}
                                <div className='bg-white p-4 rounded-full'>
                                    <img src={element.Logo} alt={element.alt} />
                                </div>
                                
                                {/* Other Things */}
                                <div className='flex flex-col '>
                                {/* Heading */}
                                <div className='font-semibold text-lg'>
                                    {element.Heading}
                                </div>
                                {/* SubHeading or Description */}
                                <div>
                                    {element.SubHeading}
                                </div>
                                </div>
                                {/* Line */}
                                
                        </div>
                        <div className='ml-6'>
                                    {
                                        cnt++ < 3 ? <img src={Line} alt={element.alt} /> : null
                                    }
                                </div>


                        </div>
                        
                    )
                })
            }
        </div>
       
        {/* Right Side Div */}
        <div>
            {/* Image Section */}

            <div className='relative bg-white w-[80%] ml-40' style={{boxShadow: '0px 0px 80px rgb(10, 90, 114)'}}>
        <img src={ImageOfGirl}  className='px-1 py-1 -translate-x-4 -translate-y-4' alt='H'

        />

            {/* YEARS EXPERIENCES and TYPES OF COURSES */}
            <div className="

            w-[32rem] h-[6rem] flex p-10 items-start gap-[13.25rem] absolute -translate-y-20 translate-x-7  bg-caribbeangreen-700">
            <div className='text-white flex gap-10 items-center'>
            <span className='text-3xl font-bold'>10</span> 
                <span className='text-base text-richblack-100'>YEARS <br/>EXPERIENCES</span>
                <div className='bg-white h-12 w-[1px] rotate-180'></div>
                <span className='text-3xl font-bold'>250</span> 
                <span className='text-base text-richblack-100'>TYPES OF <br /> COURSES</span>

            </div>
      
            </div>
            </div>

        </div>
    </div>
  )
}

export default TimeLineSection