import React from "react";
import { skillsData, assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Skills = ({ isdarkMode }) => {
  return (
    <motion.div
      id="skills"
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
        Technical Expertise
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 dark:from-blue-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        As a passionate IT undergraduate, I've developed proficiency across
        multiple technologies and frameworks. From full-stack development to
        modern design tools, I continuously expand my skillset to deliver
        comprehensive solutions. Here are the key technologies I work with to
        bring ideas to life.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {skillsData.map(({ icon, title, description, level }, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800/70 dark:via-blue-900/30 dark:to-teal-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-2xl px-8 py-12 cursor-pointer hover:bg-gradient-to-br hover:from-blue-100 hover:via-teal-100 hover:to-cyan-100 dark:hover:from-blue-800/50 dark:hover:via-teal-800/50 dark:hover:to-cyan-800/50 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 group hover:border-blue-300 dark:hover:border-blue-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white to-blue-50/80 dark:from-gray-700 dark:to-blue-900/50 p-3 rounded-xl w-fit group-hover:scale-110 transition-all duration-300">
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="w-10 h-10 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg mb-2 text-gray-700 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 font-bold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-3">
              {description}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                Proficiency:
              </span>
              <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs rounded-full font-medium">
                {level}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
