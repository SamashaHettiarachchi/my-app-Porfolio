import React from "react";
import { highlightsData, assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Highlights = ({ isdarkMode }) => {
  return (
    <motion.div
      id="highlights"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20"
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
        Latest Updates
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Highlights & Blog Posts
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Stay updated with my latest achievements, insights, and thoughts on
        technology. From project milestones to technical blog posts, here's what
        I've been working on recently.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {highlightsData.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 dark:from-gray-800/90 dark:via-emerald-900/40 dark:to-teal-900/40 backdrop-blur-lg border border-emerald-200/60 dark:border-emerald-600/40 rounded-3xl overflow-hidden cursor-pointer group hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-700 hover:border-emerald-400/70 dark:hover:border-emerald-400/60"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            {/* Content Image/Icon */}
            <div className="relative h-48 overflow-hidden">
              {item.image ? (
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {item.type === "achievement"
                      ? "🏆"
                      : item.type === "blog"
                      ? "📝"
                      : item.type === "event"
                      ? "🎯"
                      : "✨"}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Type Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full shadow-lg capitalize">
                  {item.type}
                </span>
              </div>

              {/* Date Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Read More Button */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300">
                  <Image
                    src={assets.send_icon}
                    alt="Read More"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>

            {/* Content Info */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 mb-2">
                  {item.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-white/80 mb-4 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-white/90 mb-3 uppercase tracking-wide">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="flex gap-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2.5 px-4 rounded-xl font-medium text-sm hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  {item.type === "blog"
                    ? "Read Post"
                    : item.type === "achievement"
                    ? "View Details"
                    : "Learn More"}
                </a>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-3xl"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Posts Button */}
      <motion.a
        href="https://www.linkedin.com/in/samasha-hettiarachchi-635a79270/recent-activity/all/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-2 border-emerald-500 rounded-full py-4 px-12 mx-auto my-20 hover:from-teal-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-500 font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        View All Posts{" "}
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

export default Highlights;
