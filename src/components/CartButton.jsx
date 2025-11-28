import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

function Cart() {
  return (
    <div className='flex ml-2'>
        <FaCartShopping style={{height:"30px",width:"30px",color:"#FF9C00"}}/> 
        <span className='px-2 font-poppins lg:text-xl'>cart</span>
    </div>
  )
}

export default Cart