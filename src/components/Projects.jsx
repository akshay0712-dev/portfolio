import React from "react";
import { delay, motion } from "framer-motion";
import { fadeIn } from "./varient";

const projectDetail = [
  {
    tittle: "CampusDocs",
    detail:
      "This web application is designed to simplify access to essential documents, the syllabus, and college WhatsApp groups for students. With CampusDocs, you can effortlessly find and download important forms, join relevant WhatsApp groups, view the syllabus, and stay updated on academic events—all in one convenient platform!",
    TechUsed: "HTML, CSS, JavaScript, React, Tailwind CSS, Node.js",
    TechStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
    ],
    URL: "campusDocs",
  },
  {
    tittle: "Blog Website",
    detail:
      "Here users can explore posts and filter them by category, enhancing my skills in routing and dynamic content rendering. Key features include category filtering, individual post pages, and a fully responsive design.",
    TechUsed:
      "HTML, CSS, JavaScript, React, React Router (for navigation), Tailwind CSS",
    TechStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Tailwind CSS",
    ],
    URL: "project",
  },
  {
    tittle: "Weather App",
    detail:
      "A dynamic web application that provides real-time weather information based on user input. Utilizing APIs, this app displays current weather conditions, forecasts, and more, making it easy to plan your day.",
    TechUsed: "React, Tailwind CSS, Weather API",
    TechStack: ["React", "Tailwind CSS", "Weather API"],
    URL: "project",
  },
  {
    tittle: "Expense Tracker",
    detail:
      "An intuitive React-based application that helps users track their incomes and expenses efficiently. With features for adding, editing, and deleting transactions, users can visualize their spending habits and maintain financial health.",
    TechUsed: "React, Tailwind CSS",
    TechStack: ["React", "Tailwind CSS"],
    URL: "project",
  },
  {
    tittle: "ToDo App",
    detail:
      "A task management application that allows users to organize and categorize their tasks effectively. Users can add, edit, and delete tasks while keeping them organized by categories such as work, personal, or study.",
    TechUsed: "React, Local Storage, Tailwind CSS",
    TechStack: ["React", "Local Storage", "Tailwind CSS"],
    URL: "project",
  },
];

const Projects = () => {
  return (
    <>
      <div className="scroll-smooth py-10" id="Projects">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="capitalize text-3xl md:text-5xl font-bold ml-[5vw] md:ml-[10vw] w-fit pb-4 md:pb-10 origin-center"
          style={{
            fontFamily: "'Pacifico', 'Great Vibes', 'DynaPuff', cursive",
          }}
        >
          Project Showcase
        </motion.div>

        <div className="flex flex-col gap-10 w-[95vw] md:w-[80vw] mx-auto">
          {projectDetail.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 80, 0.3)}
              initial="hidden"
              whileInView="show"
              transition={{ ease: "linear", duration: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-6 rounded-xl shadow-lg bg-white p-4 hover:shadow-2xl transition duration-300`}
            >
              <div className="flex-1 flex flex-col justify-between gap-4 text-[#3a3a3a]">
                <div className="text-xl font-semibold text-black">
                  {`${index + 1}. ${item.tittle}`}
                </div>
                <div className="text-sm text-gray-600">{item.detail}</div>

                <div className="flex flex-wrap gap-2">
                  {item.TechStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 py-2">
                  <a
                    href={`https://github.com/akshay0712-dev/${item.URL}`}
                    target="_blank"
                    className="inline-block px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300"
                  >
                    🔗 GitHub Repo
                  </a>
                  <a
                    href={`https://akshay0712-dev.github.io/${item.URL}`}
                    target="_blank"
                    className="inline-block px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-300"
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <a
                  href={`https://akshay0712-dev.github.io/${item.URL}`}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    src={`pic${index + 1}.png`}
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/500x300?text=Project+Preview")
                    }
                    alt={item.tittle}
                    className="w-full h-auto rounded-lg hover:scale-105 transform transition duration-300 shadow-md"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
