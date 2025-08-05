import { assets, infoList, toolsData } from "@/Assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About = ({ isdarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent font-medium tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        About me
      </motion.h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-rose-400/20 rounded-3xl blur-lg group-hover:from-yellow-400/30 group-hover:to-red-400/30 transition-all duration-700"></div>
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl relative z-10 shadow-2xl shadow-purple-500/20 group-hover:shadow-3xl group-hover:shadow-pink-500/30 transition-all duration-500 ring-4 ring-white/50 dark:ring-purple-500/30 group-hover:ring-pink-400/50"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.p
            className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/90 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            I am an IT undergraduate at the University of Moratuwa with a strong
            passion for developing scalable, user-centric software solutions.
            Motivated by curiosity and a commitment to continuous learning, I
            actively explore emerging technologies and transform ideas into
            effective, practical applications. I excel in collaborative,
            fast-paced environments and strive to deliver impactful results
            through innovative problem-solving. Beyond coding, I have a creative
            side fueled by interests in music, fashion design, and hand-crafted
            art, which continually inspire my approach to technology and design.
          </motion.p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-gray-800/70 dark:via-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-2xl p-6 cursor-pointer hover:bg-gradient-to-br hover:from-gradient-to-br hover:from-purple-100 hover:via-pink-100 hover:to-cyan-100 dark:hover:from-purple-800/50 dark:hover:via-pink-800/50 dark:hover:to-cyan-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:border-purple-300 dark:hover:border-purple-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={isdarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80 leading-relaxed">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
