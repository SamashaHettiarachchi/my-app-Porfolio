import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const Footer = ({ isdarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isdarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto dark:text-white">
          <Image
            src={isdarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          greatstackdev@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:border-white/50">
        <p className="dark:text-white">
          © 2025 Samasha Hettiarachchi | Portfolio. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="blank"
              href="https://www.linkedin.com/in/samasha-hettiarachchi-123456789/"
              className="dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://github.com/samasha-hettiarachchi"
              className="dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://twitter.com/samasha_hett"
              className="dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
