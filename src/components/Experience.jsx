import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "Hacktoberfest 2024",
    date: "Participated and Completed",
    description: "Focus: Open Source Contributions in Computer Science",
    icon: "💻",
  },
  {
    title: "CampusDocs Project",
    date: "2024 – Ongoing",
    description: "Created a student platform for sharing resources and results.",
    icon: "📄",
  },
];

const fadeIn = (direction = "up", distance = 40, delay = 0.2) => ({
  hidden: { opacity: 0, y: direction === "up" ? distance : -distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Experience = () => {
  return (
    <div id="Experience" className="flex flex-col py-20 justify-center items-center bg-white">
      {/* Heading */}
      <div
        className="text-3xl md:text-5xl font-bold pb-10 text-center"
        style={{ fontFamily: "'Pacifico', 'Great Vibes', 'DynaPuff', cursive" }}
      >
        Experience
      </div>

      {/* Timeline Section */}
      <section id="resume" className="w-full max-w-4xl px-4">
        <div className="relative border-l-[3px] border-gray-300 ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 40, index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
              className="mb-10 pl-6 relative bg-white rounded-xl transition-all duration-300 p-4 md:p-6 cursor-default"
            >
              {/* Dot */}
              <div className="absolute left-[-10px] top-5 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow" />

              {/* Icon */}
              <div className="text-2xl mb-2">{item.icon}</div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{item.date}</p>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <div className="mt-10 text-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1dL6dYhlFhcnZMo1yfISY0qViJ-DjUngX"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-full transition"
            style={{ fontFamily: "'Pacifico', 'Great Vibes', 'DynaPuff', cursive" }}
          >
            📥 Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Experience;
