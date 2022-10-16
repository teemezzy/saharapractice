import React, { useState } from "react";
import SP  from '../../assets/SP.png';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerNav from "./DrawerNav";

const MidNav = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true)

  let lastScrollY = window.scrollY;
    window.addEventListener('scroll',() => {
      if (lastScrollY < window.scrollY) {
        setShow(false)
      } else {
        setShow(true)
      } })
      lastScrollY = window.scrollY

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className={` ${show ? 'block' : 'hidden'} set-position bg-white`}>
      <div className=" xl:hidden pt-10 flex justify-between items-center px-5 pb-10 ">
          <img src={SP} alt="eGator_Logo" className="" />

        <div>
          {toggle ? (
            <GrClose onClick={handleClick} />
          ) : (
            <GiHamburgerMenu onClick={handleClick} />
          )}
        </div>
      </div>

      <div>
        {toggle && (
          <div className="flex flex-col justify-end">
            <DrawerNav />
          </div>
        )}
      </div>
    </div>
  );
};

export default MidNav;
