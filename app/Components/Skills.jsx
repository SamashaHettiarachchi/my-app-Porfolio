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
        {skillsData.map(({ icon, title, technologies, level }, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 dark:from-gray-800/90 dark:via-blue-900/40 dark:to-teal-900/40 backdrop-blur-lg border border-blue-200/60 dark:border-blue-600/40 rounded-3xl px-8 py-10 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:via-teal-50 hover:to-cyan-50 dark:hover:from-blue-900/60 dark:hover:via-teal-900/60 dark:hover:to-cyan-900/60 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 group hover:border-blue-400/70 dark:hover:border-blue-400/60 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
            whileHover={{ y: -12, transition: { duration: 0.4 } }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-teal-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-300/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>

            {/* Header Section */}
            <div className="relative mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-teal-500/30 to-cyan-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50/80 dark:from-gray-700 dark:via-blue-800 dark:to-teal-800/50 p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-blue-100 dark:border-blue-700/50">
                    <Image
                      src={icon}
                      alt={title}
                      className="w-8 h-8 group-hover:brightness-125 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 mb-1">
                    {title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Technology Icons Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              {technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-white/80 via-blue-50/60 to-cyan-50/40 dark:from-gray-700/60 dark:via-blue-900/40 dark:to-teal-900/30 rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-400 group/tech border border-blue-100/50 dark:border-blue-800/30 hover:border-blue-300/60 dark:hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.3 + index * 0.1 + techIndex * 0.1,
                  }}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                >
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-xl blur-md opacity-0 group-hover/tech:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white to-blue-50/90 dark:from-gray-600 dark:to-blue-800/60 p-3 rounded-xl shadow-md group-hover/tech:scale-110 group-hover/tech:shadow-lg transition-all duration-300 border border-blue-50 dark:border-blue-700/40">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 group-hover/tech:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-white/90 text-center leading-tight group-hover/tech:text-blue-600 dark:group-hover/tech:text-blue-400 transition-all duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-3xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
