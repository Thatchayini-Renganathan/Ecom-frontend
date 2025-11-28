import React from 'react'
import { RiLoginCircleFill } from "react-icons/ri";

function LoginButton() {
  return (
    <div className='flex px-2'>
        <RiLoginCircleFill style={{height:"30px",width:"30px",color:"#FF9C00"}} /> 
        <span className='px-2 font-poppins lg:text-xl'>login</span>
    </div>
  )
}

export default LoginButton