import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Contact = ({ isdarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f1e28311-5678-4f8a-8ae5-6426c14e0f34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-900/20 dark:via-pink-900/20 dark:to-purple-900/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-rose-600 via-pink-500 to-purple-500 bg-clip-text text-transparent font-medium tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Get in Touch
      </motion.h4>
      <motion.h2
        className="text-center text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Contact Me
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
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white font-Ovo dark:bg-darkHover dark:border-white/50 dark:text-white dark:placeholder-white/60"
            required
            name="name"
            suppressHydrationWarning={true}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white font-Ovo dark:bg-darkHover dark:border-white/50 dark:text-white dark:placeholder-white/60"
            required
            name="email"
            suppressHydrationWarning={true}
          />
        </motion.div>
        <motion.textarea
          rows="6"
          placeholder="Enter Your Message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 font-Ovo dark:bg-darkHover dark:border-white/50 dark:text-white dark:placeholder-white/60"
          required
          name="message"
          suppressHydrationWarning={true}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        ></motion.textarea>
        <motion.button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white font-medium rounded-full mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border border-white/20 font-Ovo"
          type="submit"
          suppressHydrationWarning={true}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Arrow Icon"
            width={16}
            height={16}
            className="w-4"
          />
        </motion.button>
        {result && (
          <motion.p
            className="mt-4 text-center font-Ovo text-green-600 dark:text-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
