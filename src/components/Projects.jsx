import React from "react";

const projectDetail = [
  {
    tittle: "CampusDocs",
    detail:
      "This web application is designed to simplify access to essential documents, the syllabus, and college WhatsApp groups for students. With CampusDocs, you can effortlessly find and download important forms, join relevant WhatsApp groups, view the syllabus, and stay updated on academic events—all in one convenient platform!",
    TechUsed: "HTML, CSS, JavaScript, React, Tailwind CSS, Node.js",
    URL: "campusDocs",
  },
  {
    tittle: "Blog Website",
    detail:
      "Here users can explore posts and filter them by category, enhancing my skills in routing and dynamic content rendering. Key features include category filtering, individual post pages, and a fully responsive design.",
    TechUsed:
      "HTML, CSS, JavaScript, React, React Router (for navigation), Tailwind CSS",
    URL: "project",
  },
  {
    tittle: "Weather App",
    detail:
      "Here users can explore posts and filter them by category, enhancing my skills in routing and dynamic content rendering. Key features include category filtering, individual post pages, and a fully responsive design.A dynamic web application that provides real-time weather information based on user input. Utilizing APIs, this app displays current weather conditions, forecasts, and more, making it easy to plan your day.",
    TechUsed: "React, Tailwind CSS, Weather API",
    URL: "project",
  },
  {
    tittle: "Expense Tracker",
    detail:
      "An intuitive React-based application that helps users track their incomes and expenses efficiently. With features for adding, editing, and deleting transactions, users can visualize their spending habits and maintain financial health.",
    TechUsed: "React, Tailwind CSS, Weather API",
    URL: "project",
  },
  {
    tittle: "ToDo App",
    detail:
      "A task management application that allows users to organize and categorize their tasks effectively. Users can add, edit, and delete tasks while keeping them organized by categories such as work, personal, or study.",
    TechUsed: "React, Local Storage, Tailwind CSS",
    URL: "project",
  },
];

const Projects = () => {
  return (
    <>
      <div className="">
      <div className="capitalize text-4xl md:text-5xl font-bold w-[90vw] md:w-[80vw] mx-auto pb-4 md:pb-10">
          Project Showcase
        </div>
        {projectDetail.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[95vw] md:w-[80vw] mx-auto md:py-6"
            >
              <div className={`flex flex-col justify-evenly text-lg pb-0 md:pb-7 text-[#3a3a3a] ${index%2 == 1 ? "md:order-last" : ""}`}>
                <div className="text-xl font-semibold py-3 text-black">{`${
                  index + 1
                }. ${item.tittle}`}</div>
                <div className="">{item.detail}</div>
                <div className="py-3">
                  <span className="font-bold ">Technologies Used: </span>
                  <span className="">{item.TechUsed}</span>
                </div>
                <div className="">
                  <span className="font-semibold">GitHub: </span>
                  <a
                    href={`https://github.com/akshay0712-dev/${item.URL}`}
                    target="_blank"
                    className="text-blue-700 "
                  >
                    {` ${item.tittle} Repository`}
                  </a>
                </div>
                <div className="py-2">
                  <span className="font-semibold">Demo: </span>
                  <a
                    href={`https://akshay0712-dev.github.io/${item.URL}`}
                    target="_blank"
                    className="text-blue-700  "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="">
                <img
                  src={`pic${index + 1}.png`}
                  alt=""
                  className="w-[90vw] md:w-[45vw] rounded-lg "
                />
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default Projects;
