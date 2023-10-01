import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

const Navbar = () => { 
  const navigate = useNavigate()

  const handleSignOut = async()=>{
    console.log("---------------------------")
    try{
      signOut(auth)
      toast.success("Log Out successful!");
      navigate('/login')
    } catch (err) {
      toast.error(err.message);
  }
  }
  return (
    <nav className="bg-[#07091E]">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-white text-center font-poppins font-semibold text-2xl leading-[32px] pt-2"
        >
          <span className="text-[#00B6BD] text-shadow-custom text-shadow-lg">
            GPT
          </span>{" "}
          <span className="text-shadow-custom text-shadow-lg">Guider</span>
        </a>
        <div className="lg:flex space-x-4">
          <a
            href="/"
            className="text-white text-center font-poppins font-medium text-base leading-[24px]"
          >
            Home
          </a>
          <a
            href="/"
            className="text-white text-center font-poppins font-medium text-base leading-[24px]"
          >
            Features
          </a>
          <a
            href="/"
            className="text-white text-center font-poppins font-medium text-base leading-[24px]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white text-center font-poppins font-medium text-base leading-[24px]"
          >
            About Us
          </a>
        </div>
        <div className="flex xl:gap-8 lg:gap-6">
          {!auth.currentUser ? (
            <>
          <button className="py-[14px] px-8 border border-[#00B6BD] rounded-[50px] text-white font-poppins font-medium text-base leading-6">
            Sign in
          </button>
          <button className="py-[14px] px-8 border bg-Green-gradient border-[#07091E] rounded-[50px] text-white font-poppins font-medium text-base leading-6">
            Sign up
          </button>
            </>
          ):(
          <button onClick={handleSignOut} className="py-[14px] px-8 border bg-Green-gradient border-[#07091E] rounded-[50px] text-white font-poppins font-medium text-base leading-6">
           Log out
          </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
