import React from 'react'

const HighlightedText = ({text}) => {

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, rgba(31,162,255,1), rgba(18,216,250,1), rgba(166,255,203,1))`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };



  return (
    <div className='font-bold' style={gradientStyle}>
        {text}
    </div>
  )
}

export default HighlightedText