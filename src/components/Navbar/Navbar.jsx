import React, { useState, useEffect } from "react";
import "./Navbar.css";
import SP from '../../assets/SP.png';
import MidNav from "./MidNav";


const Navbar = () => {
  const [show, setShow] = useState(true)

  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      setShow(false)
    } else {
      setShow(true)
    }
  })
  lastScrollY = window.scrollY



  return (
    <div className="">
      <div className=
        {` ${show ? 'block' : 'hidden'} set-position  fixed bg-[white] z-50 top-0 right-0 left-0 h-[112px] lg:pt-4 items-center shadow-md `}>
        <nav className="hidden xl:block w-[1300px] m-auto">
          <div className="flex justify-between items-center ">
            <div className="  items-center">
              <img src={SP} alt="SP_Logo" className=" w-[30px] h-[30px] lg:w-[60px] lg:h-[80px] " />
            </div>

            <div className="flex w-[180px] m-auto justify-between">
              <div className="">
                <a href="#about-us" className="text-gray-800 peer text-sm flex items-center">
                  About Us </a>
              </div>


              <a href="#services"

                className="text-gray-900 text-sm">
                Services</a>

            </div>
            <a href="#contact-us" >
              <button
                type="button"
                className=" text-sm rounded-2xl transition duration-500 ease-in  hover:bg-gray-800 hover:text-[#FC9500] text-[#18181B] border-[#FC9500] border w-[149px] h-[40px]"
              >
                Contact Us
              </button></a>
          </div>
        </nav>
      </div>


      <MidNav />
    </div>
  );
};

export default Navbar;
