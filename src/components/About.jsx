import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varient";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-white text-black"
    >
      <motion.h2
        variants={fadeIn("up", 80, 0.3)}
        initial="hidden"
        whileInView="show"
        transition={{ ease: "linear", duration: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        style={{
          fontFamily: "'Pacifico', 'Great Vibes', 'DynaPuff', cursive",
        }}
      >
        Who is Akshay?
      </motion.h2>

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-800">
        {/* Story */}
        <motion.div
          variants={fadeIn("right", 80, 0.3)}
          initial="hidden"
          whileInView="show"
          transition={{ ease: "linear", duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              I’m <span className="font-semibold text-neutral-700">Akshay Kumar</span>, a creative
              problem solver blending <b>design thinking</b> with <b>developer precision</b>. My
              journey began with curiosity and a blank VS Code window — now I
              design <i>intuitive interfaces</i> and engineer <i>impactful web apps</i>.
            </p>
            <p>
              From UI wireframes to database schemas, I bridge the gap between
              design and development with tools like <b>React.js</b>,{" "}
              <b>Tailwind CSS</b>, and <b>Node.js</b>. I'm driven by user needs,
              performance, and a hint of obsession with aesthetics.
            </p>
            <p>
              Currently exploring the intersection of{" "}
              <b>AI agents</b> and <b>full-stack systems</b>, I’m building
              solutions that don’t just work — they *feel* right.
            </p>
          </div>
        </motion.div>

        {/* Creative Highlights */}
        <motion.div
          variants={fadeIn("left", 80, 0.3)}
          initial="hidden"
          whileInView="show"
          transition={{ ease: "linear", duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6 text-base md:text-lg">
            <p className="font-medium text-lg">🚀 Notable Projects:</p>
            <ul className="list-none space-y-4">
              <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition">
                <b>CampusDocs</b> — a one-stop platform for students to
                discover documents, join WhatsApp groups, and access syllabi.
              </li>
              <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition">
                <b>Expense Tracker</b> — intuitive app that helps users stay on
                top of their finances in real-time.
              </li>
              <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition">
                <b>ToDo App</b> — minimal yet powerful task organizer with
                local storage and category filters.
              </li>
            </ul>

            <a href="#Projects">
              <div className="bg-black text-white px-6 py-3 font-semibold text-lg rounded-md hover:bg-white hover:text-black border-2 hover:border-black shadow transition duration-300 w-fit animate-bounce mx-auto">
                <span className="group-hover:scale-105 transition-transform">
                  View Full Projects →
                </span>
              </div>
            </a>

            <p className="pt-6">
              When I’m not designing or coding, I’m deep-diving into{" "}
              <b>AI tools</b>, analyzing the latest UI patterns, or sketching
              my next big idea on paper. Let’s create something amazing
              together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
