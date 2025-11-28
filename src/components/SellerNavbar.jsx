import React from "react";
import ecom2 from "/src/assets/ecom-logo-2.png";
import { Button } from "./ui/button";

function SellerNavbar({openLogin}) {
  return (
    <div className="grid gap-5 px-2 md-flex lg:flex bg-black py-2 justify-between">
      <div className="justify-items-center flex gap-3">
        <img
          src={ecom2}
          alt="ecom.logo"
          className="ml-20 h-11 w-11 rounded-full  shadow-l cursor-pointer"
        />
        <p className="text-white my-3 font-poppins font-semibold">
          ECOM Seller Hub
        </p>
      </div>
      <div className="text-white flex gap-5 my-1 mr-10">
        <a href="#about" className="py-2">
          About
        </a>
        <a href="#contact" className="py-2">
          Contact
        </a>
        <Button 
            style={{ background: "#FF9C00", margin: "2px",cursor:"pointer"}}
            onClick={()=>{openLogin(true)}}
        >
            Login
        </Button>
      </div>
    </div>
  );
}

export default SellerNavbar;
