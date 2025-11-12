import React from 'react'
import { CgProfile } from "react-icons/cg";
import LogoutButton from './LogoutButton';

function DropdownButton() {
  return (
    <>    
    <div className="relative group inline-block text-left">
      <button className="bg-transparent text-white px-4 rounded-md font-medium">
        <CgProfile size={30}/>
      </button>

      <div
        className="absolute left-0 mt-2 w-30 bg-white rounded-lg shadow-lg opacity-0 invisible 
                   group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
      >
        <ul className="py-2 text-gray-700">
          <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
          <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
          <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer">logout</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default DropdownButton