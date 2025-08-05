import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { motion } from "motion/react";

const Footer = ({ isdarkMode }) => {
  return (
    <motion.div
      className="mt-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center px-[10%]">
        <motion.div
          className="group cursor-pointer inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 transform scale-150"></div>
          <Image
            src={isdarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-36 mx-auto mb-2 relative z-10 group-hover:drop-shadow-lg group-hover:drop-shadow-purple-500/30 transition-all duration-300"
          />
        </motion.div>
        <motion.div
          className="w-max flex items-center gap-3 mx-auto bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent font-medium text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={isdarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6 opacity-80"
          />
          greatstackdev@gmail.com
        </motion.div>
      </div>
      <motion.div
        className="text-center sm:flex items-center justify-between border-t border-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 dark:border-purple-500/50 mx-[10%] mt-12 py-8 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.p
          className="bg-gradient-to-r from-gray-700 via-purple-600 to-pink-600 dark:from-white/90 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          © 2025 Samasha Hettiarachchi | Portfolio. All rights reserved.
        </motion.p>
        <motion.ul
          className="flex items-center gap-8 justify-center mt-6 sm:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="blank"
              href="https://www.linkedin.com/in/samasha-hettiarachchi-123456789/"
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 bg-clip-text text-transparent font-medium hover:drop-shadow-lg transition-all duration-300 relative group"
            >
              LinkedIn
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="blank"
              href="https://github.com/samasha-hettiarachchi"
              className="bg-gradient-to-r from-gray-700 via-slate-600 to-gray-800 dark:from-gray-300 dark:via-white dark:to-gray-100 hover:from-gray-600 hover:via-slate-500 hover:to-gray-700 dark:hover:from-gray-200 dark:hover:via-gray-50 dark:hover:to-white bg-clip-text text-transparent font-medium hover:drop-shadow-lg transition-all duration-300 relative group"
            >
              GitHub
              <span className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="blank"
              href="https://twitter.com/samasha_hett"
              className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 hover:from-sky-400 hover:via-blue-400 hover:to-cyan-400 bg-clip-text text-transparent font-medium hover:drop-shadow-lg transition-all duration-300 relative group"
            >
              Twitter
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-cyan-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
