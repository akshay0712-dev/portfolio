import React from "react";
const timeline = [
  {
    title: "Hacktoberfest 2024",
    date: "Participated and Completed",
    description: "Focus: Open Source Contributions in Computer Science",
  },
];

const Experience = () => {
  return (
    <div id="Experience" className="flex flex-col py-20 justify-center ">
      <div className="capitalize text-5xl font-bold w-[90vw] md:w-[80vw] mx-auto pb-10 h-fit">
        Experience
      </div>
      <section id="resume">
        <div className="container">
          <div className="resume-timeline">
            {timeline.map((item, index) => (
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://drive.google.com/uc?export=download&id=1dL6dYhlFhcnZMo1yfISY0qViJ-DjUngX" className="button mt-5">
            Download Resume
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default Experience;
