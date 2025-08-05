import { assets } from "@/Assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Header = ({ isdarkMode }) => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32 ring-4 ring-orange-300 dark:ring-orange-500 shadow-2xl shadow-orange-500/30"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl md-3 font-Ovo bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent font-medium"
      >
        Hi! I'm Samasha Hettiarachchi{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 dark:from-gray-100 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent font-bold"
      >
        Impact-Driven Full-Stack Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-white/90 leading-relaxed"
      >
        Driven by curiosity and passion, I'm an IT undergraduate who transforms
        self-learning into meaningful innovation. I thrive on exploring emerging
        technologies to develop impactful solutions that truly make a
        difference.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border border-white/20"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 rounded-full bg-gradient-to-r from-gray-100 to-white hover:from-white hover:to-gray-50 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 text-gray-800 dark:text-white font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 border border-gray-300 dark:border-gray-600"
        >
          my resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
