import React, { useState } from "react";
import "./Navbar.css";
const DrawerNav = () => {

  return (
    <div className=" border-[1px] lg:hidden block">
      <div className="flex flex-col  justify-between items-center sm:w-80 w-72 h-[524px] absolute right-0  m-auto z-10 py-10 px-8  bg-white  ">
        <div className="flex flex-col justify-between h-[200px]">
          <div className="">
            <a href="#about-us" className="text-gray-800 peer text-sm flex items-center">
              About Us
            </a>
          </div>

          <a href="#contact-us" className="hover:bg-gray-800 transition duration-500 ease-in hover:text-[#FC9500] text-gray-800 peer text-sm flex items-center">
            Contact Us

          </a>
          <button
            type="button"
            className=" text-sm rounded-2xl text-[#18181B] border-[#FC9500] border w-[149px] h-[40px]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
