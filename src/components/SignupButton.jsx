import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";

function SignupButton() {
  return (
    <div className="flex px-2">
      <MdPersonAddAlt1
        style={{ height: "30px", width: "30px", color: "#FF9C00" }}
      />
      <span className="px-2 font-poppins lg:text-xl">sign up</span>
    </div>
  );
}

export default SignupButton;
