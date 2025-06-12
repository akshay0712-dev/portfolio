import React from "react";
import { delay, motion } from "framer-motion";
import { fadeIn } from "./varient";

const nav = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Experience", href: "#Experience" },
  { name: "Projects", href: "#Projects" },
];

const navbar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.4, y: -50, filter: "blur(6px)" }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.1 }} 
        className="bg-neutral-900 w-[90vw] mx-auto rounded-full px-[3vw] py-4 flex items-center justify-center md:justify-between top-2 md:top-8 fixed left-[5vw] z-10 "
      >
        <div className="text-xl md:text-xl font-[500] text-white ">
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-transparent bg-clip-text tracking-wide">
            Akshay Kumar
          </h1>
        </div>
        <div className="flex items-center justify-between gap-7 ">
          {nav.map((item) => (
            <a
              key={item}
              href={item.href}
              className="text-white text-xl font-semibold hidden md:block hover:text-[#ccc] cursor-pointer shadow-lg transform transition duration-300 hover:scale-110 "
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default navbar;
