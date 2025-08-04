import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 relative bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/footer-bg-color.png')",
        backgroundSize: "90% auto",
      }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Get in Touch</h4>
      <h2 className="text-center text-5xl font-Ovo">Contact Me</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer a range of services to help you build and enhance your web
        presence. From responsive web design to front-end development using
        modern frameworks, I am dedicated to delivering high-quality,
        user-friendly solutions tailored to your needs. Whether you need a new
        website, an update to an existing one, or assistance with specific
        features, I am here to help bring your vision to life. Let's work
        together to create something amazing!
      </p>
      <form className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white font-Ovo"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white font-Ovo"
            required
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter Your Message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 font-Ovo"
          required
        ></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-Ovo"
          type="submit"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Arrow Icon"
            className="w-4"
          />
        </button>
      </form>
    </div>
  );
};

export default Contact;
