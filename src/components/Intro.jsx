import React from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { fadeIn } from "./varient";
import { useEffect } from "react";
const Intro = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Run entry animation first
      await controls.start({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Then start continuous floating
      controls.start({
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
        boxShadow: [
          "0px 0px 0px rgba(0, 0, 0, 0)",
          "0px 10px 30px rgba(0, 0, 0, 0.2)",
          "0px 0px 0px rgba(0, 0, 0, 0)",
        ],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      });
    };

    sequence();
  }, [controls]);
  return (
    <div
  id="Home"
  className="flex flex-col-reverse md:flex-row min-h-[100vh] items-center justify-center gap-8 md:gap-10 px-4 mt-[6vh] md:mt-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]"
>
  {/* Image Section */}
  <div className="w-full md:w-[50%] flex justify-center items-center">
    <motion.img
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={controls}
      src="image.jpg"
      alt="Premium Profile"
      className="w-full max-w-[250px] md:max-w-[300px] rounded-full shadow-xl"
    />
  </div>

  {/* Text Section */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "linear", duration: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    className="w-full md:w-[50%] max-w-2xl"
  >
    <div className="text-lg sm:text-xl pb-4 font-medium text-white">
      <img
        src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3500&pause=1000&center=false&vCenter=true&random=false&width=120&lines=Hello!+%F0%9F%91%8B;नमस्ते&color=f9fafb&weight=500"
        alt="Hello"
        className="min-h-[50px]"
      />
    </div>

    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold pb-4 text-white">
      I'm <span className="text-[#facc15]">Akshay Kumar</span>
    </div>

    <img
      src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3500&pause=1000&center=false&vCenter=true&random=false&width=550&lines=Self-taught+Front-End+Developer%2C;Aspiring+Software+Developer%2C;Computer+Science+Student%2C;Tech+Enthusiast%2C;Active+Learner%2FResearcher%2C;Love+to+learn+new+stuffs..&color=f9fafb"
      alt="Web Developer"
      className="h-auto min-h-[50px]"
    />

    <p className="pb-4 text-sm sm:text-base md:text-lg text-white selection:bg-neutral-800 selection:text-white selection:px-3 selection:py-6">
      I’m a passionate BTech student with a strong interest in web development. I love building sleek, functional websites and applications, constantly expanding my skill set with new technologies.
    </p>

    {/* Buttons & Icons */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <a href="#Projects">
        <div className="bg-[#facc15] group text-black px-5 py-3 font-semibold text-base lg:text-xl rounded-full hover:bg-white border-2 hover:border-black cursor-pointer shadow-lg transition duration-300 hover:shadow-2xl animate-pulse text-center">
          <span className="group-hover:scale-105 transition duration-300">
            My Projects
          </span>
        </div>
      </a>
      <a href="https://drive.google.com/uc?export=download&id=1dL6dYhlFhcnZMo1yfISY0qViJ-DjUngX">
        <div className="bg-[#e7963a] group text-black px-5 py-3 font-semibold text-base lg:text-xl rounded-full hover:bg-white border-2 hover:border-black cursor-pointer shadow-lg transition duration-300 hover:shadow-2xl animate-pulse text-center">
          <span className="group-hover:scale-105 transition duration-300">
            Resume
          </span>
        </div>
      </a>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center">
        <a href="https://github.com/akshay0712-dev" className="text-white hover:text-black">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* GitHub SVG path */}
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/akshay-kumar-93b487215/" className="text-white hover:text-black">
          <svg fill="currentColor" viewBox="0 0 16 16" className="w-8 h-8" aria-hidden="true">
            {/* LinkedIn SVG path */}
          </svg>
        </a>
        <a href="https://www.instagram.com/akshay__rishu/" className="text-white hover:text-black">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* Instagram SVG path */}
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
</div>

  );
};

export default Intro;
