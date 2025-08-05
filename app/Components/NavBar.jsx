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
        <a href="#top" className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <Image
            src={isdarkMode ? assets.logo_dark : assets.logo}
            className="w-20 cursor-pointer mr-4 relative z-10 transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg hover:drop-shadow-purple-500/30"
            alt=""
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-4 py-2 backdrop-blur-sm ${
            isScroll
              ? "bg-white/80 shadow-lg border border-purple-200/30 dark:border-purple-700/50 dark:bg-gray-800/80"
              : "bg-white/70 shadow-md border border-purple-100/20 dark:border-purple-800/30 dark:bg-gray-900/70"
          }`}
        >
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-1 rounded-full hover:scale-105"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-1 rounded-full hover:scale-105"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-1 rounded-full hover:scale-105"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-1 rounded-full hover:scale-105"
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-1 rounded-full hover:scale-105"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            suppressHydrationWarning={true}
            className="p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-110"
          >
            <Image
              src={isdarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isdarkMode ? "Light mode" : "Dark mode"}
              className="w-5"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 border border-purple-300 dark:border-purple-600 rounded-full ml-1 font-Ovo bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-800/20 dark:to-pink-800/20 hover:from-purple-500 hover:to-pink-500 hover:text-white dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
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
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:bg-gradient-to-br dark:from-purple-900/90 dark:via-pink-900/90 dark:to-rose-900/90 backdrop-blur-sm border-l border-purple-200/50 dark:border-purple-700/50 dark:text-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isdarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-2 rounded-lg hover:scale-105 block"
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-2 rounded-lg hover:scale-105 block"
              onClick={closeMenu}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-2 rounded-lg hover:scale-105 block"
              onClick={closeMenu}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-2 rounded-lg hover:scale-105 block"
              onClick={closeMenu}
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 px-3 py-2 rounded-lg hover:scale-105 block"
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
