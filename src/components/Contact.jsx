import React, {useState} from "react";


const Contact = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 mx-auto  mt-6 bg-[#00000011]">
        <div className="mx-auto w-full text-center border-b-2 md:border-r-2 border-[#73727285] pb-7">
          <div className="text-2xl md:text-4xl font-bold py-6">
            Get in Touch
          </div>

          <div className="flex flex-cols flex-wrap  justify-evenly gap-6 ">
            {/* ........Gmail......... */}
            <a
              href="mailto:akshayrishu4@gmail.com"
              className="text-black flex items-center gap-4 hover:text-white hover:bg-black rounded-lg px-3"
            >
              <span className="material-symbols-outlined  scale-125 ">mail</span>
              <span className="font-bold">akshayrishu4@gmail.com</span>
            </a>

            {/* ........GitHub.......... */}
            <a
              href="https://github.com/akshay0712-dev"
              className="text-black flex items-center gap-4 hover:text-white hover:bg-black pr-3 rounded-xl"
            >
              <div className=" rounded-[50%]">
                <span className="sr-only">GitHub</span>
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
                </svg>
              </div>
              <span className="font-semibold">GitHub</span>
            </a>

            {/* ........Linkedin......... */}

            <a
              href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
              className="text-black hover:text-[#0077B5] flex items-center gap-4"
            >
              <div className="">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-8 h-8 "
                  aria-hidden="true"
                >
                  <title id="abanrc4ipu9n6u3t38qFenw6h1duni3y2">LinkedIn</title>
                  <g clipPath="url(#clip0_202_91845)">
                    <path
                      d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mx-auto w-full text-center pb-6">
          <div className="text-2xl md:text-4xl font-bold py-6 ">
            Impotant Links
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-evenly pt-3 gap-6">
            {/* ......HOME...... */}
            <a
              href="#Home"
              className="flex justify-center md:justify-normal items-center gap-4 pb-3 relative group"
            >
              <span className="material-symbols-outlined scale-110 lg:scale-125">
                home
              </span>
              <span className="uppercase font-bold">home</span>
              <span className="underline-effect absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>

            {/* ........ABOUT....... */}
            <a
              href="#Home"
              className="flex justify-center md:justify-normal item-center gap-4 pb-4 relative group"
            >
              <span className="material-symbols-outlined scale-110 lg:scale-125">
                auto_stories
              </span>
              <span className="uppercase font-bold">ABOUT</span>
              <span className="underline-effect absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>

            {/* .......SKILLS..... */}
            <a
              href="#Home"
              className="flex justify-center md:justify-normal item-center gap-4 pb-4 relative group"
            >
              <span className="material-symbols-outlined scale-110 lg:scale-125">
                engineering
              </span>
              <span className="uppercase font-bold">SKILLS</span>
              <span className="underline-effect absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>

            {/* .......PROJETS..... */}
            <a
              href="#Home"
              className="flex justify-center md:justify-normal item-center gap-4 pb-4 relative group"
            >
              <span className="material-symbols-outlined scale-110 lg:scale-125">
                fact_check
              </span>
              <span className="uppercase font-bold">PROJETS</span>
              <span className="underline-effect absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
