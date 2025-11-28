import React, { useContext } from "react";
import SearchInput from "./ui/SearchInput";
import ecom2 from "/src/assets/ecom-logo-2.png";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { useNavigate } from "react-router-dom";
import SellerButton from "./SellerButton";
import DropdownButton from "./DropdownButton";
import { AuthContext } from "@/context/AuthProvider";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div className="grid gap-5 px-2 md-flex lg:flex bg-black py-2">
        <div className="grow-2  justify-items-center flex gap-3">
          <img
            src={ecom2}
            alt="ecom.logo"
            className="ml-20 h-11 w-11 rounded-full  shadow-l cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <p className="text-white my-3 font-poppins font-semibold">ECOM</p>
        </div>
        <div className="grow-6 justify-items-center">
          <SearchInput />
        </div>
        <div className="grow-2 px-3 py-2 flex justify-center font-extralight text-my-colour">
          <CartButton />
          {!isAuthenticated && (
            <>
              <div
                onClick={() => {
                  navigate("/login");
                }}
                className="cursor-pointer"
              >
                <LoginButton />
              </div>
              <div
                onClick={() => {
                  navigate("/signup");
                }}
                className="cursor-pointer"
              >
                <SignupButton />
              </div>
            </>
          )}
          <div
            onClick={() => {
              navigate("/seller");
            }}
            className="cursor-pointer"
          >
            <SellerButton />
          </div>
          {isAuthenticated && (
            <div>
              <DropdownButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
