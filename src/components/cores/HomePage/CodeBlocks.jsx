import React from 'react'
import ButtonComponent from './ButtonComponent';
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
    position,headingP1,headingP2,subHeading,butncontent1,butncontent2,codeBlock,backgroundGradient,codeColor
}) => {

    // const myElement = {
    //     background: 'orange',
    //     width: '372.95px',
    //     height: '257.05px',
    //     transform: 'rotate(-0deg)', /* Rotation */
    //     opacity:'0.2', /* Opacity */
    //   }
  return (
    <div className={`flex flex-row mt-4 gap-10 ${position}`}>
        {/* Static CodeText And Button: */}
        <div className='ml-14 w-[45rem] flex flex-col gap-2'>
            <div className='text-[#F1F2FF] text-4xl flex flex-col'>
                   <span className='flex gap-2'>{headingP1} </span> {headingP2}
            </div>
            <div className='text-[#838894] '>
                <p>{subHeading}</p>
            </div>
            {/* Button */}
            <div className='flex flex-row gap-4 mt-10'>

                <div>
                    <ButtonComponent active={butncontent1.active} text={butncontent1.text} linkto={butncontent1.linkto}/>
                </div>

                <div>
                    <ButtonComponent active={butncontent2.active} text={butncontent2.text} linkto={butncontent2.linkto}/>
                </div>

            </div>
        </div>

{/* --------------Section 2 Type Animation-------------------------------- */}

           {/* <div className='myElement rounded-full relative' style={myElement}> */}

        <div className=' font-mono relative flex flex-row lg:w-[500px] lg:h-[300px] bg-transparent border shadow-lg shadow-richblack-600 border-richblack-600 p-4'>
           {/* BG gradient HW */}
           <img src={backgroundGradient} alt="H" className='absolute -translate-y-24  -translate-x-32'/>
            {/* Number */}
           <div className={`flex flex-col  text-richblack-300`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div className='mr-2'>10</div>
                <div className='mr-2'>11</div>
           </div>
        {/* Type */}
           <div>
        <TypeAnimation className={`${codeColor} w-[90%] flex flex-col  `}
        sequence={[codeBlock,3000,""]}
        repeat={Infinity}
        cursor={true}
        style={
            {
                whiteSpace:"pre-line",
                display:"block",
            }
        }
        omitDeletionAnimation={true}
        />
           </div>
          
        </div>
        {/* </div> */}

   
    </div>
  )
}

export default CodeBlocks