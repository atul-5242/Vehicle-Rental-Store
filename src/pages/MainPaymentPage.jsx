import React from 'react'
import { buyPayment } from '../services/operations/PaymentsCall';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const MainPaymentPage = () => {

    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {courseId}  = useParams();
    const handlePayment = () => {
        if(token) {
          buyPayment(navigate) ;
            return;
        }
    }
  return (
    <div>
        <div className='flex justify-center items-center w-screen h-screen gap-5'>
      <div className='text-4xl text-black'>
        PayMent Accepted Here
      </div>
      <button onClick={handlePayment} className='item-center flex mt-10 border-x-pure-greys-500 hover:bg-black hover:text-white text-black text-lg border border-black rounded-lg p-2 shadow-lg shadow-blue-25'>
        PayNow
      </button>
    </div>
    
    </div>
  )
}

export default MainPaymentPage