import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore';
import HighlightedText from '../HomePage/HighlightedText';
const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Careers paths",
];

const ExploreSection = () => {
    
    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCard= (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=>course.tag===value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }


    return (
    <div>
        <div className='flex flex-col text-center mt-10 justify-center'>
            {/* Heading */}
            <div className='text-4xl font-semibold text-white text-center flex gap-2 justify-center'>
                Unlock the <HighlightedText text={"Power of Code"}/>    
            </div>
            {/* SubHeading */}
            <div className='text-richblack-300 text-center font-semibold text-lg mt-3'>
                <p>
                Learn to Build Anything You Can Imagine
                </p>
            </div>
        </div>
          
            {/* Tab */}
            <div>
                <div className='flex mt-5 text-richblack-300 gap-5 bg-[#161D29] mb-10 shadow-sm shadow-richblack-200  p-2 rounded-3xl'>
                    {
                        tabsName.map((element,index)=>{
                            return (
                                <div key={index} className='flex gap-3  hover:text-[#E9EAF8] hover:cursor-pointer duration-500' onClick={()=>setMyCard(element)}>
                                    <div className={`${currentTab===element?"bg-[#000814]":"bg-[#161D29]"} hover:bg-[#000814] px-4 py-1 rounded-3xl`}
                                        
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
    </div>
  )
}

export default ExploreSection