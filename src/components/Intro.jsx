import React from 'react'

const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-[100vh] items-center justify-center gap-4 md:gap-10 ">
        <div className="w-[90vw] md:w-[50vw] md:min-h-[100vh] flex justify-center  items-center">
          <img src="image.png" alt="" className="w-[90vw] md:w-[45vw] " />
        </div>
        <div className="max-w-[90vw] md:max-w-[45vw] ">
          <div className="text-xl pb-4 font-medium text-gray-400">Hello!</div>
          <div className="text-4xl md:text-5xl font-extrabold pb-4">
            I'm <span className="text-[red]">Akshay </span>Kumar
          </div>
          <p className="pb-4 text-lg md:text-xl text-gray-500">
            I’m a passionate BTech student with a strong interest in web
            development. I love building sleek, functional websites and
            applications, constantly expanding my skill set with new
            technologies.
          </p>
          <div className="bg-black group text-white px-5 py-3 w-fit font-semibold text-xl my-3 rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl animate-pulse">
            <span className="group-hover:scale-105 transform transition duration-300">
              <a href="#Projects">My Projects</a>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Intro
