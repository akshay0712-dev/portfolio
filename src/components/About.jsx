import React from "react";
import { delay, motion } from "framer-motion";
import { fadeIn } from "./varient";

const About = () => {
  return (
    <div
      id="About"
      className="md:min-h-[100vh] flex justify-center items-center flex-col mdflex-col "
    >
      <motion.div
        variants={fadeIn("up", 80, 0.3)}
        initial="hidden"
        whileInView={"show"}
        transition={{ ease: "linear", duration: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="capitalize text-5xl font-bold w-[90vw] md:w-[80vw] mx-auto pb-6 md:pb-20"
      >
        About me
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-[90vw] md:w-[80vw] mx-auto md:gap-9">
        <motion.div
          variants={fadeIn("right", 80, 0.3)}
          initial="hidden"
          whileInView={"show"}
          transition={{ ease: "linear", duration: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <p className="text-base md:text-lg pb-7 text-[#3a3a3a]">
            Hi, I’m <b className="text-neutral-700">Akshay</b>! I’m an aspiring{" "}
            <b className="text-neutral-700">Full Stack Developer</b> with a
            passion for building <b className="text-neutral-700">efficient</b>,{" "}
            <b className="text-neutral-700">scalable</b>, and{" "}
            <b className="text-neutral-700">user-centric</b> applications.
            Currently pursuing my <b className="text-neutral-700">BTech</b>, I’m
            diving deep into{" "}
            <b className="text-neutral-700">backend development</b> with
            <b className="text-neutral-700"> Node.js</b> and{" "}
            <b className="text-neutral-700">Express.js</b>, while also exploring
            the world of{" "}
            <b className="text-neutral-700">Artificial Intelligence</b>.
            Alongside that, I’m improving my{" "}
            <b className="text-neutral-700">problem-solving skills </b>
            through{" "}
            <b className="text-neutral-700">
              Data Structures and Algorithms (DSA)
            </b>{" "}
            to become a well-rounded developer.
          </p>

          <p className="text-base md:text-lg pb-7 text-[#3a3a3a]  ">
            In addition to my development journey, I’m always eager to explore
            the latest trends in technology, whether it’s{" "}
            <b className="text-neutral-700">new features in phones or PC</b>, or
            the <b className="text-neutral-700">latest tech news</b>. Staying
            updated with cutting-edge advancements fuels my curiosity and
            inspires me to think about how I can incorporate them into my
            projects.
          </p>
          <p className="text-base md:text-lg pb-7 text-[#3a3a3a]">
            Currently, I’m focusing on expanding my knowledge in backend
            technologies and algorithms. I’m also exploring open source by
            contributing to various projects.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 80, 0.3)}
          initial="hidden"
          whileInView={"show"}
          transition={{ ease: "linear", duration: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-base md:text-lg"
        >
          <p className="font-medium pb-7">
            I’ve built several applications that solve real-world problems,
            including:
          </p>
          <ul className="list-disc text-base md:text-lg">
            <li className="pb-7">
              <b className="text-neutral-700">CampusDocs</b>: A centralized
              platform for students to access important documents and join
              college WhatsApp groups.
            </li>
            <li className="pb-7">
              <b className="text-neutral-700">Expense Tracker</b>: A React-based
              application that helps users track their incomes and expenses
              efficiently.
            </li>
            <li className="pb-7">
              <b className="text-neutral-700">ToDo App</b>: A task management
              application that allows users to organize and categorize their
              tasks effectively.
            </li>
          </ul>
          <a href="#Projects">
            <div className="bg-black group text-white px-5 py-3 w-fit font-semibold text-xl mb-3 rounded-md hover:text-black hover:bg-white border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl animate-pulse mx-auto scroll-smooth">
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
