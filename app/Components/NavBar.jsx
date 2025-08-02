import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const NavBar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="" />
        </a>
     <ul className="hidden md:flex items-center gap-6 lg:gap-8  rounded-full px-12 py-3">
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#contact">Contact</a></li>
</ul>


        <div>
            <a href="#contact"  className="hidden lg:flex item-center gap-3 px-10 py-2.5 border-gray-500 rounded-full ml-4">Contact<Image src={assets.arrow_icon} className='w-3' alt=""/></a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
