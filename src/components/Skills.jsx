import React from "react";
const SkillTopic = [
  {
    topic: "Language",
    image: [
      "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    ],
  },
  {
    topic: "FrontEnd",
    image: [
      "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    ],
  },
  {
    topic: "Backend",
    image: [
      "https://img.shields.io/badge/Express.js-FEFEFE?logo=express&logoColor=black&style=flat",
      "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    ],
  },
  {
    topic: "Other Tools",
    image: [
      "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
      "https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white",
      "https://img.shields.io/badge/NPM-2D3136.svg?style=for-the-badge&logo=npm&logoColor=white",
    ],
  },
];
const Skills = () => {
  return (
    <>
      <div id="Skills" className="flex flex-col py-20 justify-center ">
        <div className="capitalize text-5xl font-bold w-[90vw] md:w-[80vw] mx-auto pb-10 h-fit">
          Skills
        </div>

        {SkillTopic.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex flex-row gap-6 md:items-center w-[90vw] md:w-[80vw] mx-auto py-6"
            >
              <div className="capitalize text-xl font-bold w-fit">
                {skill.topic}:{" "}
              </div>
              <div className="flex flex-row flex-wrap gap-6 items-center">
                {skill.image.map((image) => {
                  return <img src={image} alt="" className="" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;

//   <div
//   className="min-h-[100vh] flex justify-evenly items-center flex-row mb-5 flex-wrap"
//   id="Projects"
// >
//   <div className="capitalize text-5xl font-bold w-[80vw] mx-auto pb-20 h-fit">
//     Skills
//   </div>

//   <div className="flex flex-col   items-center mb-5 justify-start gap-10 h-[60vh] ">
//     <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
//       <div className="capitalize text-3xl font-bold  w-fit">Language</div>
//       {/* language */}
//       <img
//         src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"
//         alt="C++"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
//         alt="JavaScript"
//         className="h-[50px]"
//       />
//     </div>
//     <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
//       <div className="capitalize text-3xl font-bold  w-fit">
//         {" "}
//         FrontEnd
//       </div>
//       {/* FrontEnd */}
//       <img
//         src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
//         alt="HTML"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
//         alt="CSS"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
//         alt="JavaScript"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
//         alt="React"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
//         alt="Tailwind CSS"
//         className="h-[50px]"
//       />
//     </div>

//     <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
//       <div className="capitalize text-3xl font-bold  w-fit"> Backend</div>
//       {/* **Backend**: */}
//       <img
//         src="https://img.shields.io/badge/Express.js-FEFEFE?logo=express&logoColor=black&style=flat"
//         alt="Express"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
//         alt="MongoDB"
//         className="h-[50px]"
//       />
//     </div>

//     <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
//       <div className="capitalize text-3xl font-bold  w-fit">
//         {" "}
//         Other Tools
//       </div>
//       {/* **Other Tools**: */}
//       <img
//         src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
//         alt="Git"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
//         alt="GitHub"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
//         alt="VS CODE"
//         className="h-[50px]"
//       />
//       <img
//         src="https://img.shields.io/badge/NPM-2D3136.svg?style=for-the-badge&logo=npm&logoColor=white"
//         alt="npm"
//         className="h-[50px]"
//       />
//     </div>
//   </div>
// </div>
