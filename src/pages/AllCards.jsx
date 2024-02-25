import React from 'react'
import { Link, useNavigate } from "react-router-dom"
const AllCards = () => {
  return (
    <div>AllCards
        <br />
    <Link to={'/dashboard/home-page'}>
    <button>Go to</button>
    </Link>
    
    </div>
  )
}

export default AllCards