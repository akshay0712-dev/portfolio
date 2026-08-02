import React from "react";
import { delay, motion } from "framer-motion";
import { fadeIn } from "./varient";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectDetail = [
  {
    tittle: "Notes App",
    detail:
      "A full-stack notes management platform for colleges. Admins can upload multiple PDF notes categorized by branch, semester, and subject. Students can browse, search, preview, and download notes through a modern responsive interface with secure authentication.",
    TechUsed: "React, Tailwind CSS, Express.js, MongoDB, Supabase, JWT",
    TechStack: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Supabase",
      "JWT",
    ],
    featured: true,
    status: "Completed",
    year: "2026",
    githubUrl: "https://github.com/akshay0712-dev/notes_hub",
    liveUrl: "https://notes.akshay-dev.in",
    image: "NotesApp.png",
  },

  {
    tittle: "Chai Code Docs RAG",
    detail:
      "A Retrieval-Augmented Generation (RAG) system that answers questions from Chai aur Code documentation using intelligent collection routing, query expansion, and parallel vector retrieval. The application scrapes documentation, generates embeddings with Google Gemini, stores them in QdrantDB, and delivers fast, context-aware responses through a terminal interface.",
    TechUsed:
      "Python, LangChain, Google Gemini, QdrantDB, BeautifulSoup, ThreadPoolExecutor",
    TechStack: [
      "Python",
      "LangChain",
      "Google Gemini",
      "QdrantDB",
      "BeautifulSoup",
      "ThreadPoolExecutor",
      "RAG",
      "Vector Search",
    ],
    featured: true,
    status: "Completed",
    year: "2026",
    githubUrl:
      "https://github.com/akshay0712-dev/GenAI/blob/main/Rag/Routings/chaicode_docs_rag.py",
    liveUrl: "https://www.youtube.com/watch?v=dtOZUZw3JzA&feature=youtu.be",
    image: "rag.png",
  },

  {
    tittle: "SamaanTrack",
    detail:
      "A React Native application built to simplify shopping management and shared expense tracking. Users can create shopping lists, track purchases, manage friend-wise ledgers, calculate balances automatically, settle transactions, and share ledgers. Designed for offline-first usage and actively used in day-to-day hostel life for managing real expenses and shopping.",
    TechUsed: "React Native, Expo, AsyncStorage, React Navigation",
    TechStack: [
      "React Native",
      "Expo",
      "AsyncStorage",
      "React Navigation",
      "Mobile UI",
    ],
    featured: true,
    status: "In Active Use",
    year: "2026",
    githubUrl: "https://github.com/akshay0712-dev/samaantrack",
    liveUrl: "https://www.youtube.com/shorts/HaATT4eWgJU",
    image: "SamaanTrack.png",
  },
  {
    tittle: "CampusDocs",
    detail:
      "A centralized student portal providing quick access to college documents, syllabus, notices, and WhatsApp groups. Built to simplify resource sharing and improve communication for students.",
    TechUsed: "HTML, CSS, JavaScript, React, Tailwind CSS, Node.js",
    TechStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
    ],
    featured: true,
    status: "Completed",
    year: "2025",
    githubUrl: "https://github.com/akshay0712-dev/campusDocs",
    liveUrl: "https://akshay0712-dev.github.io/campusDocs/",
    image: "pic1.png",
  },
  // {
  //   tittle: "Blog Website",
  //   detail:
  //     "A responsive blogging platform where users can browse posts, filter by category, and navigate dynamic routes. Built to practice React routing and reusable component architecture.",
  //   TechUsed: "HTML, CSS, JavaScript, React, React Router, Tailwind CSS",
  //   TechStack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React",
  //     "React Router",
  //     "Tailwind CSS",
  //   ],
  //   featured: false,
  //   status: "Completed",
  //   year: "2025",
  //   githubUrl: "https://github.com/akshay0712-dev/project",
  //   liveUrl: "https://akshay0712-dev.github.io/project/",
  //   image: "pic2.png",
  // },

  // {
  //   tittle: "Weather App",
  //   detail:
  //     "A responsive weather application that fetches live weather information using a Weather API and displays temperature, humidity, wind speed, and forecasts for searched locations.",
  //   TechUsed: "React, Tailwind CSS, Weather API",
  //   TechStack: ["React", "Tailwind CSS", "Weather API"],
  //   featured: false,
  //   status: "Completed",
  //   year: "2025",
  //   githubUrl: "https://github.com/akshay0712-dev/project",
  //   liveUrl: "https://akshay0712-dev.github.io/project/",
  //   image: "pic3.png",
  // },

  // {
  //   tittle: "Expense Tracker",
  //   detail:
  //     "A personal finance management application that helps users record income and expenses, edit transactions, and monitor spending habits through a clean React interface.",
  //   TechUsed: "React, Tailwind CSS",
  //   TechStack: ["React", "Tailwind CSS"],
  //   featured: false,
  //   status: "Completed",
  //   year: "2025",
  //   githubUrl: "https://github.com/akshay0712-dev/project",
  //   liveUrl: "https://akshay0712-dev.github.io/project/",
  //   image: "pic4.png",
  // },

  // {
  //   tittle: "ToDo App",
  //   detail:
  //     "A task management application with CRUD operations and Local Storage persistence. Users can organize tasks efficiently with a simple and responsive interface.",
  //   TechUsed: "React, Local Storage, Tailwind CSS",
  //   TechStack: ["React", "Local Storage", "Tailwind CSS"],
  //   featured: false,
  //   status: "Completed",
  //   year: "2025",
  //   githubUrl: "https://github.com/akshay0712-dev/project",
  //   liveUrl: "https://akshay0712-dev.github.io/project/",
  //   image: "pic5.png",
  // },
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


        <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto px-4 py-8">
          {projectDetail.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeIn ? fadeIn("up", 40, 0.2) : undefined}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-3xl p-6 sm:p-8 bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out"
              >
                {/* Content Section */}
                <div
                  className={`flex-1 flex flex-col justify-between gap-6 w-full ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Number & Title */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50/80 border border-indigo-100 px-2.5 py-1 rounded-full">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {item.tittle}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.TechStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100/80 hover:bg-slate-200/60 text-slate-700 border border-slate-200/50 text-xs font-medium px-3 py-1 rounded-lg transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 active:scale-95 transition-all duration-200"
                      >
                        <FiGithub className="text-base" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200"
                      >
                        <FiExternalLink className="text-base" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Preview Section */}
                <div
                  className={`flex-1 w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 relative group/img ${
                    !isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <a
                    href={
                      item.tittle === "Chai Code Docs RAG"
                        ? "https://www.linkedin.com/posts/akshay-kumar-93b487215_genai-rag-langchain-activity-7340788715369222144-shbD"
                        : item.liveUrl || item.githubUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden"
                  >
                    <img
                      src={item.image}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/600x400/f8fafc/64748b?text=Project+Preview";
                      }}
                      alt={item.tittle}
                      className="w-full h-64 sm:h-72 object-cover object-top transform group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
