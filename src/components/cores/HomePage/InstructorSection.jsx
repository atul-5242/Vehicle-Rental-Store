import React from 'react'
import HighlightedText from '../HomePage/HighlightedText';
import ButtonComponent from '../HomePage/ButtonComponent';
import image_section3 from '../../../assets/Images/Instructor.png';

const InstructorSection = () => {
  return (
    <div className='flex flex-row mx-auto mt-[5%] gap-40 bg-[#000814]'>
        {/* left */}
        <div>
        
            {/* image */}
            <div className='bg-white w-[100%] ml-20' style={{boxShadow: '0px 0px 80px rgb(10, 90, 114)'}}>
        <img src={image_section3}  className='px-1 py-1 -translate-x-4 -translate-y-4' alt='H'
        />
        </div>
        </div>

        {/* right */}
        <div className='flex flex-col gap-10 w-[40%] justify-center '>
            {/* Heading */}
            <div className='text-4xl font-bold'>
                <h1 className='text-white'>Become an <br /> <HighlightedText text={"Instructor"}/></h1>
            </div>
            {/* Para */}
            <div className='text-lg text-richblack-500 font-semibold'>
                <p>Instructors from around the world teach millions 
                    of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            </div>
            {/* Button */}
            <div className='w-fit'>
                <ButtonComponent text={"Start Teaching Today"} active={"yellow"} arrow={true}/>
            </div>
        </div>
        {/* Become an Instructor Section:- */}

        <div>

        </div>
</div>
  )
}

export default InstructorSection