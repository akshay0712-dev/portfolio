import React from "react";

const navbar = () => {
  return (
    <>
      <div className=" flex flex-row justify-center py-6  md:justify-end md:pr-[10vw] items-center gap-5 md:gap-10 sticky top-0 w-[100vw] z-10 bg-[rgba(255,255,255,0.96)] shadow-md">
        <a
          href="#Home"
          className="md:mx-0 bg-black group text-white px-3 py-1 md:px-5 md:py-3 w-fit font-semibold text-lg md:text-xl rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl scroll-smooth"
        >
          Home
        </a>
        <a
          href="#About"
          className="md:mx-0 bg-black group text-white px-2 py-1 md:px-5 md:py-3 w-fit font-semibold text-lg md:text-xl rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl scroll-smooth"
        >
          About
        </a>
        <a
          href="#Skills"
          className="md:mx-0 bg-black group text-white px-2 py-1 md:px-5 md:py-3 w-fit font-semibold text-lg md:text-xl rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl scroll-smooth"
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="md:mx-0 bg-black group text-white px-2 py-1 md:px-5 md:py-3 w-fit font-semibold text-lg md:text-xl rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl scroll-smooth"
        >
          Project
        </a>
      </div>
    </>
  );
};

export default navbar;
