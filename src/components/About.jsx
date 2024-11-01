import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="md:min-h-[100vh] flex justify-center items-center flex-col mdflex-col "
    >
      <div className="capitalize text-5xl font-bold w-[90vw] md:w-[80vw] mx-auto pb-6 md:pb-20">
        About me
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-[90vw] md:w-[80vw] mx-auto md:gap-9">
        <div className="">
          <p className="text-base md:text-lg pb-7 text-[#3a3a3a]">
            Hi, I’m <b>Akshay</b>, an aspiring <b>Full Stack Developer</b> with
            a passion for building efficient, scalable, and user-focused
            applications. I’m currently pursuing a BTech and diving deep into{" "}
            <b>backend development</b> with <b>Node.js</b> and <b>Express.js</b>
            , while sharpening my problem-solving skills through{" "}
            <b> Data Structures and Algorithms (DSA)</b>.
          </p>
          <p className="text-base md:text-lg pb-7 text-[#3a3a3a]">
            In addition to my development journey, I’m always eager to explore
            the latest trends in technology, whether it’s{" "}
            <b>new features in phones or PC</b>, or the <b>latest tech news</b>.
            Staying updated with cutting-edge advancements fuels my curiosity
            and inspires me to think about how I can incorporate them into my
            projects.
          </p>
          <p className="text-base md:text-lg pb-7 text-[#3a3a3a]">
            Currently, I’m focusing on expanding my knowledge in backend
            technologies and algorithms. I’m also exploring open source by
            contributing to various projects.
          </p>
        </div>
        <div className="text-base md:text-lg">
          <p className="font-medium pb-7">
            I’ve built several applications that solve real-world problems,
            including:
          </p>
          <ul className="list-disc text-base md:text-lg">
            <li className="pb-7">
              <b>CampusDocs</b>: A centralized platform for students to access
              important documents and join college WhatsApp groups.
            </li>
            <li className="pb-7">
              <b>Expense Tracker</b>: A React-based application that helps users
              track their incomes and expenses efficiently.
            </li>
            <li className="pb-7">
              <b>ToDo App</b>: A task management application that allows users
              to organize and categorize their tasks effectively.
            </li>
          </ul>
          <a href="#Projects">
          <div
            className="bg-black group text-white px-5 py-3 w-fit font-semibold text-xl mb-3 rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl animate-pulse mx-auto scroll-smooth"
          >
            <span className="group-hover:scale-105 transform transition duration-300">
              More Projects
            </span>
          </div>
          </a>
          <p className="text-base md:text-lg py-4 text-[#3a3a3a">
            When I’m not coding, I’m diving into the latest tech innovations or
            brainstorming my next project. Let’s connect and collaborate on
            exciting projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
