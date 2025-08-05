import React from "react";
import { workData, assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const work = ({ isdarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 dark:from-cyan-900/20 dark:via-teal-900/20 dark:to-emerald-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-medium tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        My latest work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I offer a range of services to help you build and enhance your web
        presence. From responsive web design to front-end development using
        modern frameworks, I am dedicated to delivering high-quality,
        user-friendly solutions tailored to your needs. Whether you need a new
        website, an update to an existing one, or assistance with specific
        features, I am here to help bring your vision to life. Let's work
        together to create something amazing!
      </motion.p>
      <motion.div
        className="grid grid-cols-auto my-10 gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden shadow-xl shadow-teal-500/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-br from-white/95 via-cyan-50/90 to-teal-50/95 dark:from-gray-800/95 dark:via-teal-900/90 dark:to-cyan-900/95 backdrop-blur-sm w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-6 flex items-center justify-between duration-500 group-hover:bottom-7 border border-cyan-200/50 dark:border-teal-700/50 shadow-lg">
              <div>
                <h2 className="font-semibold bg-gradient-to-r from-teal-700 to-cyan-700 dark:from-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  {project.description}
                </p>
              </div>
              <div className="border-2 rounded-full border-teal-500 w-10 aspect-square flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:border-cyan-400 transition-all duration-300 dark:border-teal-400 dark:shadow-teal-400/30">
                <Image
                  src={assets.send_icon}
                  alt="Send Icon"
                  className="w-5 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        href=""
        className="w-max flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-2 border-teal-500 rounded-full py-4 px-12 mx-auto my-20 hover:from-cyan-600 hover:to-teal-600 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all duration-500 font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        show more{" "}
        <Image
          src={
            isdarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Arrow Icon"
          className="w-4 inline"
        />
      </motion.a>
    </motion.div>
  );
};

export default work;
