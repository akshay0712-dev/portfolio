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
      className="flex flex-col-reverse md:flex-row min-h-[100vh] items-center justify-center gap-8 md:gap-10 px-4 mt-[6vh] md:mt-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] my-6"
    >
      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={controls}
          src={"image.jpg" || "https://res.cloudinary.com/detchyy1o/image/upload/f_auto,q_auto,w_400/image_polq7f.png"}
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
        <div className="text-lg xl:text-xl pb-4 font-medium text-white">
          <img
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3500&pause=1000&center=false&vCenter=true&random=false&width=120&lines=Hello!+%F0%9F%91%8B;नमस्ते+🙏&color=f9fafb&weight=500"
            alt="Hello"
            className="min-h-[50px]"
          />
        </div>

        <div className="text-3xl xl:text-4xl md:text-5xl font-extrabold pb-4 text-white">
          I'm <span className="text-[#facc15]">Akshay Kumar</span>
        </div>

        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3500&pause=1000&center=false&vCenter=true&random=false&width=550&lines=Self-taught+Front-End+Developer%2C;Aspiring+Software+Developer%2C;Computer+Science+Student%2C;Tech+Enthusiast%2C;Active+Learner%2FResearcher%2C;Love+to+learn+new+stuffs..&color=f9fafb"
          alt="Web Developer"
          className="h-auto min-h-[50px]"
        />

        <p className="pb-4 text-sm xl:text-base md:text-lg text-white selection:bg-neutral-800 selection:text-white selection:px-3 selection:py-6">
          I’m a passionate BTech student with a strong interest in web
          development. I love building sleek, functional websites and
          applications, constantly expanding my skill set with new technologies.
        </p>

        {/* Buttons & Icons */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-start gap-4">
           <div className="flex gap-6 justify-start">
          <a href="#Projects">
            <div className="bg-[#facc15] group text-black px-3 py-1 xl:px-5 xl:py-3 font-semibold text-sm lg:text-xl rounded-full hover:bg-white border-2 hover:border-black cursor-pointer shadow-lg transition duration-300 hover:shadow-2xl animate-pulse text-center">
              <span className="group-hover:scale-105 transition duration-300">
                My Projects
              </span>
            </div>
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1dL6dYhlFhcnZMo1yfISY0qViJ-DjUngX">
            <div className="bg-[#e7963a] group text-black px-3 py-1 xl:px-5 xl:py-3 font-semibold text-sm lg:text-xl rounded-full hover:bg-white border-2 hover:border-black cursor-pointer shadow-lg transition duration-300 hover:shadow-2xl animate-pulse text-center">
              <span className="group-hover:scale-105 transition duration-300">
                Resume
              </span>
            </div>
          </a>
            </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-start">
            <a
              href="https://github.com/akshay0712-dev"
              className="text-white hover:text-black"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
                {/* GitHub SVG path */}
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
              className="text-white hover:text-black"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <title id="abanrc4ipu9n6u3t38qFenw6h1duni3y2">LinkedIn</title>
                <g clipPath="url(#clip0_202_91845)">
                  <path
                    d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                    fill="currentColor"
                  ></path>
                </g>
                {/* LinkedIn SVG path */}
              </svg>
            </a>
            <a
              href="https://www.instagram.com/akshay__rishu/"
              className="text-white hover:text-black"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
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
