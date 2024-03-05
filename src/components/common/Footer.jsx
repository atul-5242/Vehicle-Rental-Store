import React from 'react'
import { FooterLink2 } from '../../data/footer-links'
import { Link } from 'react-router-dom'

import google from '../../assets/footer-logo/Google.png'
import facebook from '../../assets/footer-logo/Facebook.png'
import twitter from '../../assets/footer-logo/Twitter.png'
import youtube from '../../assets/footer-logo/Youtube.png'
const Footer = () => {
  return (
    <div className='text-richblack-100 max-h-fit flex flex-row gap-10 w-11/12 max-w-maxContent mx-auto mt-[5%] '>
       
       <div className='flex flex-row gap-20 mt-10 border-r-2 border-richblack-600 p-4 '>
                {/* 1 */}
                <div className='flex flex-col gap-2'>
                    {/* Image */}
                    
                    <div className='font-bold text-richblack-50'>Company</div>
                    <div className='text-richblack-500 '>About</div>
                    <div className='text-richblack-500 '>Careers</div>
                    <div className='text-richblack-500 '>Affiliates</div>
                    <div className='flex flex-row gap-2'>
                            <div><img src={google} alt="H" /></div>
                            <div><img src={facebook} alt="H" /></div>
                            <div><img src={twitter} alt="H" /></div>
                            <div><img src={youtube} alt="H" /></div>
                    </div>
                </div>
                
                {/* 2 */}
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-richblack-50'>Resources</div>
                    <div className='text-richblack-500'>Articles</div>
                    <div className='text-richblack-500'>Blog</div>
                    <div className='text-richblack-500'>Chart Sheet</div>
                    <div className='text-richblack-500'>Code challenges</div>
                    <div className='text-richblack-500'>Docs</div>
                    <div className='text-richblack-500'>Projects</div>
                    <div className='text-richblack-500'>Videos</div>
                    <div className='text-richblack-500'>Workspaces</div>
                    <div className='font-bold'>Support</div>
                    <div>Help Center</div>
                </div>
                
                {/* 3 */}
                <div className='flex flex-col gap-10'>

                    <div className='flex flex-col gap-2'>
                        <div className='font-bold text-richblack-50'>Plans</div>
                        <div className='text-richblack-500'>Paid memberships</div>
                        <div className='text-richblack-500'>For students</div>
                        <div className='text-richblack-500'>Business solutions</div>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <div className='font-bold text-richblack-50'>Community</div>
                        <div className='text-richblack-500'>Forums</div>
                        <div className='text-richblack-500'>Chapters</div>
                        <div className='text-richblack-500'>Events</div>
                    </div>

                </div>
       </div>
        {/* A Line */}

       <div className='flex flex-row gap-20 mt-10'>
                {/* 4 */}
                <div className='flex flex-row gap-10'>
                    {
                        FooterLink2.map((element,index)=>{
                            return (
                                <div className="flex flex-col gap-2" key={index}>
                                    <div div className='text-richblack-50'>
                                    {
                                        element.title
                                    }

                                    </div>
                                    <div className='text-richblack-500 '>

                                    {
                                        element.links.map((element,index)=>{
                                            return <div key={index}>
                                                <Link to={element.link}>
                                                    {
                                                        element.title
                                                    }
                                                    <div className='mb-2'></div>
                                                </Link>
                                            </div>
                                        })
                                    }
                                    </div>
                                    
                                 
                                    
                                </div>
                            )
                        })
                    }
                </div>
                
                {/* 5 */}
                {/* <div className='flex flex-col gap-2'>
                    {
                        FooterLink2.map((element,index)=>{
                            return (
                                <div key={index}>
                                    <Link to={element.links[1].link}>
                                    <div>
                                    {
                                        element.links[1].title
                                    }
                                    </div>
                                    </Link>
                                    <div>
                                        {
                                            element.title
                                        }
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div> */}
                
                {/* 6 */}
                {/* <div className='flex flex-col gap-2'>
                    {
                        FooterLink2.map((element,index)=>{
                            return (
                                <div key={index}>
                                    <Link to={element.links[2].link}>
                                    <div>
                                    {
                                        element.links[2].title
                                    }
                                    </div>
                                    </Link>
                                    <div>
                                        {
                                            element.title
                                        }
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div> */}
       </div>
       {/* A Line */}
       
    </div>
  )
}

export default Footer