import React from "react";
import { serviceData, assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = ({ isdarkMode }) => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-blue-900/20 dark:via-teal-900/20 dark:to-cyan-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-medium tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 dark:from-blue-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        My Services
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
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800/70 dark:via-blue-900/30 dark:to-teal-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-2xl px-8 py-12 cursor-pointer hover:bg-gradient-to-br hover:from-blue-100 hover:via-teal-100 hover:to-cyan-100 dark:hover:from-blue-800/50 dark:hover:via-teal-800/50 dark:hover:to-cyan-800/50 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 group hover:border-blue-300 dark:hover:border-blue-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Image
              src={icon}
              alt=""
              className="w-10 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-300"
            >
              Read more
              <Image
                src={
                  isdarkMode ? assets.right_arrow_bold_dark : assets.right_arrow
                }
                alt="arrow"
                className="w-4 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
