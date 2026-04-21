import React from "react";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiPython,
  SiCplusplus,
  SiC,
  SiCloudinary,
} from "react-icons/si";

import { motion } from "framer-motion";

const skillsData = [
  {
    topic: "Languages",
    icon: <SiCplusplus className="text-xl text-blue-500" />,
    skills: [
      { name: "C++", icon: <SiCplusplus />, tip: "Object-oriented programming and STL" },
      { name: "C", icon: <SiC />, tip: "Procedural logic and memory-level programming" },
      { name: "JavaScript", icon: <SiJavascript />, tip: "DOM manipulation and async programming" },
      { name: "Python", icon: <SiPython />, tip: "Scripting and automation, NumPy/Pandas basics" },
    ],
  },
  {
    topic: "Frontend",
    icon: <FaHtml5 className="text-xl text-orange-500" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 />, tip: "Semantic structure and accessibility" },
      { name: "CSS", icon: <FaCss3Alt />, tip: "Responsive layouts, Flexbox, Grid" },
      { name: "React", icon: <FaReact />, tip: "Component-based architecture and hooks" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, tip: "Utility-first responsive styling" },
    ],
  },
  {
    topic: "Backend",
    icon: <FaNodeJs className="text-xl text-green-600" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, tip: "REST API and server-side scripting" },
      { name: "Express.js", icon: <SiExpress />, tip: "Minimal and flexible Node.js framework" },
      { name: "MongoDB", icon: <SiMongodb />, tip: "Document-based NoSQL database" },
      { name: "Mongoose", icon: <SiMongoose />, tip: "MongoDB ODM for schema modeling" },
    ],
  },
  {
    topic: "Tools",
    icon: <FaGithub className="text-xl text-black" />,
    skills: [
      { name: "GitHub", icon: <FaGithub />, tip: "Version control and collaboration" },
      { name: "Postman", icon: <SiPostman />, tip: "Testing and debugging APIs" },
      { name: "Cloudinary", icon: <SiCloudinary />, tip: "Media storage and transformations" },
      { name: "Docker", icon: <FaDocker />, tip: "Containerizing and deploying applications" },
    ],
  },
  {
    topic: "Areas of Interest",
    icon: <FaCode className="text-xl text-purple-600" />,
    skills: [
      { name: "Web Development", icon: <FaCode />, tip: "Full-stack apps with real-world utility" },
      { name: "Generative AI", icon: <FaCode />, tip: "LLMs, embeddings, RAG, agentic workflows" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="bg-white text-black py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif"
        style={{ fontFamily: "'Pacifico', 'Great Vibes', 'DynaPuff', cursive" }}>
        My Skill
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10">
        {skillsData.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl border border-gray-200 shadow-md p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              {section.icon}
              <h3 className="text-xl font-semibold text-gray-800">{section.topic}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {section.skills.map((skill, j) => (
                <div
                  key={j}
                  className="relative group bg-white p-4 rounded-xl flex flex-col items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="text-3xl mb-2 text-blue-700">{skill.icon}</div>
                  <div className="text-sm font-medium text-center">{skill.name}</div>

                  {/* Tooltip */}
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs px-3 py-1 rounded-full -top-8 z-10 whitespace-nowrap pointer-events-none">
                    {skill.tip}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
