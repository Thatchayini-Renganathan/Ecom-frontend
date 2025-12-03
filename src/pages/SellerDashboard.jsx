import React from 'react'
import { CgProfile } from "react-icons/cg";
function SellerDashboard() {
  return (
    <>
    <div className="flex h-screen w-full bg-white text-black">
      <aside className="w-56 bg-black text-white flex flex-col py-6 px-4">
        <h1 className="text-xl font-bold mb-6">Hello, UserName</h1>

        <nav className="space-y-3 text-sm">
          <button className="w-full text-left py-2 px-3 rounded hover:bg-white hover:text-black transition">
            Overview
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-white hover:text-black transition">
            Orders
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-white hover:text-black transition">
            Add Product
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-white hover:text-black transition">
            Payment
          </button>
          <button className="w-full text-left py-2 px-3 rounded hover:bg-white hover:text-black transition">
            Stock
          </button>
          <div class="relative mt-95 pt-6">
          <button class="absolute bottom-1 w-full text-left py-2 px-3 rounded hover:bg-white hover:text-black transition">
            Setting
          </button>
          </div>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="w-full h-16 bg-black text-white flex items-center justify-end px-6">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="-w-20 -h-200"><CgProfile /></div>
            <span className="font-medium text-sm sm:text-base">Profile</span>
          </div>
        </header>

      </div>
    </div>
    </>
  )
}

export default SellerDashboard