import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const NavBar = ({ isdarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translatex(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translatex(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-sm dark:bg-darkTheme/80 dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isdarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-darkTheme/50"
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo dark:text-white" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo dark:text-white" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo dark:text-white" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo dark:text-white" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-Ovo dark:text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            suppressHydrationWarning={true}
          >
            <Image
              src={isdarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isdarkMode ? "Light mode" : "Dark mode"}
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 dark:text-white"
          >
            Contact
            <Image
              src={isdarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            suppressHydrationWarning={true}
          >
            <Image
              src={isdarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/*----------* Mobile Menu*----------*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover dark:text-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isdarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a
              className="font-Ovo dark:text-white"
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white"
              onClick={closeMenu}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white"
              onClick={closeMenu}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white"
              onClick={closeMenu}
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white"
              onClick={closeMenu}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
