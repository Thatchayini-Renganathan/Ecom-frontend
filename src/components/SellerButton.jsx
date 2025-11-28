import React from 'react'
import { CiShop } from "react-icons/ci";

function SellerButton() {
  return (
      <div className='flex px-2'>
          <CiShop style={{height:"30px",width:"30px",color:"#FF9C00"}}/>
          <span className='px-2 font-poppins lg:text-xl'>Become a Seller</span>
      </div>
    )
}

export default SellerButton