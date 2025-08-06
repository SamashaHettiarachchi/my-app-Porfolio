import React from "react";
import { workData, assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Projects = ({ isdarkMode }) => {
  return (
    <motion.div
      id="projects"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent font-medium tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My Projects
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        A selection of projects that showcase my skills in full-stack
        development, problem-solving, and building real-world applications. Each
        project reflects my commitment to clean code, user-centered design, and
        practical solutions.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-10 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/50 dark:from-gray-800/90 dark:via-purple-900/40 dark:to-pink-900/40 backdrop-blur-lg border border-purple-200/60 dark:border-purple-600/40 rounded-3xl overflow-hidden cursor-pointer group hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:border-purple-400/70 dark:hover:border-purple-400/60"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Project Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.duration}
                </span>
              </div>

              {/* View Project Button */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
                  <Image
                    src={assets.send_icon}
                    alt="View Project"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {project.type}
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-white/80 mb-4 leading-relaxed text-sm line-clamp-3">
                {project.fullDescription}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-white/90 mb-3 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5 max-h-20 overflow-hidden">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                {index === 0 || index === 1 ? (
                  <>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 px-4 rounded-xl font-medium text-sm hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-xl font-medium text-sm hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      GitHub
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 px-4 rounded-xl font-medium text-sm hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      View Details
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-xl font-medium text-sm hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-3xl"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.a
        href="https://github.com/SamashaHettiarachchi?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-purple-500 rounded-full py-4 px-12 mx-auto my-20 hover:from-pink-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-500 font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        View All Projects{" "}
        <Image
          src={
            isdarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Arrow Icon"
          width={16}
          height={16}
          className="w-4 inline"
        />
      </motion.a>
    </motion.div>
  );
};

export default Projects;
