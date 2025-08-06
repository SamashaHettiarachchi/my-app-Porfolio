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
            width={144}
            height={144}
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
            width={24}
            height={24}
            className="w-6 opacity-80"
          />
          sashinisamasha@gmail.com
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium px-3 py-1 rounded-full hover:scale-105"
            whileHover={{ y: -1 }}
          >
            About
          </motion.a>
          <motion.a
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium px-3 py-1 rounded-full hover:scale-105"
            whileHover={{ y: -1 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium px-3 py-1 rounded-full hover:scale-105"
            whileHover={{ y: -1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#highlights"
            className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium px-3 py-1 rounded-full hover:scale-105"
            whileHover={{ y: -1 }}
          >
            Highlights
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium px-3 py-1 rounded-full hover:scale-105"
            whileHover={{ y: -1 }}
          >
            Contact
          </motion.a>
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
          className="flex items-center gap-4 justify-center mt-6 sm:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/samasha-hettiarachchi-635a79270/"
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm shadow-md hover:shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-gray-600/50 hover:border-blue-300 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <Image
                src={assets.linkedin_icon}
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 filter group-hover:brightness-110 dark:brightness-110 dark:group-hover:brightness-125 transition-all duration-300"
              />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="_blank"
              href="https://github.com/SamashaHettiarachchi"
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm shadow-md hover:shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-gray-600/50 hover:border-gray-400 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-300"
            >
              <Image
                src={assets.github_icon}
                alt="GitHub"
                width={24}
                height={24}
                className="w-6 h-6 filter group-hover:brightness-110 dark:brightness-110 dark:group-hover:brightness-125 transition-all duration-300"
              />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="_blank"
              href="https://medium.com/@sashinisamasha"
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm shadow-md hover:shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-gray-600/50 hover:border-green-300 dark:hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
            >
              <Image
                src={assets.medium_icon}
                alt="Medium"
                width={24}
                height={24}
                className="w-6 h-6 filter group-hover:brightness-110 dark:brightness-110 dark:group-hover:brightness-125 transition-all duration-300"
              />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              target="_blank"
              href="https://www.facebook.com/samasha.hettiarachchi"
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm shadow-md hover:shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-gray-600/50 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <Image
                src={assets.facebook_icon}
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6 filter group-hover:brightness-110 dark:brightness-110 dark:group-hover:brightness-125 transition-all duration-300"
              />
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
