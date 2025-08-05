import React from "react";
import { workData, assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const work = ({ isdarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo dark:text-white"
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
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:bg-darkTheme">
              <div>
                <h2 className="font-semibold dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-white/80">
                  {project.description}
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition dark:border-white dark:shadow-[2px_2px_0_#fff] dark:bg-white">
                <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover/50"
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
