import "./App.css";

function App() {
  return (
    <>
      {/* ........Intro Section........ */}
      <div className="flex flex-row h-[100vh] items-center justify-center gap-10 ">
        <div className="w-[50vw] min-h-[100vh] flex justify-center  items-center">
          <img
            src="image.png"
            alt=""
            className="w-[45vw] rounded-[50%] border-2 border-white mix-blend-normal"
          />
        </div>
        <div className="max-w-[45vw] ">
          <div className="text-xl pb-4 font-medium text-gray-400">Hello!</div>
          <div className="text-5xl font-extrabold pb-4">
            I'm <span className="text-[red]">Akshay </span>Kumar
          </div>
          <p className="pb-4 text-xl text-gray-500">
            I’m a passionate BTech student with a strong interest in web
            development. I love building sleek, functional websites and
            applications, constantly expanding my skill set with new
            technologies.
          </p>
          <div className="bg-black group text-white px-5 py-3 w-fit font-semibold text-xl my-3 rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl animate-pulse">
            <span className="group-hover:scale-105 transform transition duration-300">
              <a href="#Projects">My Projects</a>
            </span>
          </div>
        </div>
      </div>

      {/*......About Section......  */}
      <div className="min-h-[100vh] flex justify-center items-center flex-col">
        <div className="capitalize text-5xl font-bold w-[80vw] mx-auto pb-20">
          About me
        </div>
        <div className="grid grid-cols-2 justify-between w-[80vw] mx-auto gap-9">
          <div className="">
            <p className="text-lg pb-7 text-[#3a3a3a]">
              Hi, I’m <b>Akshay</b>, an aspiring <b>Full Stack Developer</b>{" "}
              with a passion for building efficient, scalable, and user-focused
              applications. I’m currently pursuing a BTech and diving deep into{" "}
              <b>backend development</b> with <b>Node.js</b> and{" "}
              <b>Express.js</b>, while sharpening my problem-solving skills
              through <b> Data Structures and Algorithms (DSA)</b>.
            </p>
            <p className="text-lg py-7 text-[black]">
              In addition to my development journey, I’m always eager to explore
              the latest trends in technology, whether it’s{" "}
              <b>new features in phones or PC</b>, or the{" "}
              <b>latest tech news</b>. Staying updated with cutting-edge
              advancements fuels my curiosity and inspires me to think about how
              I can incorporate them into my projects.
            </p>
            <p className="text-lg py-7 text-[black">
              Currently, I’m focusing on expanding my knowledge in backend
              technologies and algorithms. I’m also exploring open source by
              contributing to various projects.
            </p>
          </div>
          <div className="text-lg">
            <p className="">
              I’ve built several applications that solve real-world problems,
              including:
            </p>
            <ul className="list-disc ml-6">
              <li className="my-6">
                <b>CampusDocs</b>: A centralized platform for students to access
                important documents and join college WhatsApp groups.
              </li>
              <li className="my-6">
                <b>Expense Tracker</b>: A React-based application that helps
                users track their incomes and expenses efficiently.
              </li>
              <li className="my-6">
                <b>ToDo App</b>: A task management application that allows users
                to organize and categorize their tasks effectively.
              </li>
            </ul>

            <div className="bg-black group text-white px-5 py-3 w-fit font-semibold text-xl my-3 rounded-md hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer shadow-lg transform transition duration-300 hover:shadow-2xl animate-pulse mx-auto">
              <span className="group-hover:scale-105 transform transition duration-300">
                <a href="#Projects">More Projects</a>
              </span>
            </div>
            <p className="text-lg py-4 text-[black">
              When I’m not coding, I’m diving into the latest tech innovations
              or brainstorming my next project. Let’s connect and collaborate on
              exciting projects!
            </p>
          </div>
        </div>
      </div>

      {/* ........Project Showcase...... */}
      <div
        className="min-h-[100vh] flex justify-center items-center flex-col mb-5"
        id="Projects"
      >
        <div className="capitalize text-5xl font-bold w-[80vw] mx-auto pb-20">
          Project Showcase
        </div>
        <div className="grid grid-cols-2 justify-between w-[80vw] mx-auto gap-9">
          <div className="text-lg pb-7 text-[#3a3a3a]">
            <div className="text-3xl font-semibold py-3">1. CampusDocs</div>
            <div className="py-3">
              This web application is designed to simplify access to essential
              documents, the syllabus, and college WhatsApp groups for students.
              With CampusDocs, you can effortlessly find and download important
              forms, join relevant WhatsApp groups, view the syllabus, and stay
              updated on academic events—all in one convenient platform!
            </div>
            <div className="">
              <b className="pr-2">Technologies Used</b>: HTML, CSS, JavaScript,
              React, Tailwind CSS, Node.js
            </div>
            <div className="py-2">
              GitHub:{" "}
              <a
                href="https://github.com/akshay0712-dev/campusDocs"
                target="_blank"
                className="text-blue-700 "
              >
                CampusDocs Repository
              </a>
            </div>
            <div className="py-2">
              Demo:{" "}
              <a
                href="https://akshay0712-dev.github.io/campusDocs/"
                target="_blank"
                className="text-blue-700 "
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="">
            <img src="pic1.png" alt="" className="rounded-lg" />
          </div>
          <div className="">
            <img src="pic2.png" alt="" className="rounded-xl" />
          </div>
          <div className="text-lg pb-7 text-[#3a3a3a]">
            <div className="text-3xl font-semibold py-3">2. Blog Website</div>
            <div className="py-3">
              Here users can explore posts and filter them by category,
              enhancing my skills in routing and dynamic content rendering. Key
              features include category filtering, individual post pages, and a
              fully responsive design.
            </div>
            <div className="">
              <b className="pr-2">Technologies Used</b>: HTML, CSS, JavaScript,
              React, React Router (for navigation), Tailwind CSS
            </div>
            <div className="py-2">
              GitHub:{" "}
              <a
                href="https://github.com/akshay0712-dev/project"
                target="_blank"
                className="text-blue-700 "
              >
                Blog Website Repository
              </a>
            </div>
            <div className="py-2">
              Demo:{" "}
              <a
                href="https://akshay0712-dev.github.io/project/"
                target="_blank"
                className="text-blue-700 "
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="text-lg pb-7 text-[#3a3a3a]">
            <div className="text-3xl font-semibold py-3">3. Weather App</div>
            <div className="py-3">
              Here users can explore posts and filter them by category,
              enhancing my skills in routing and dynamic content rendering. Key
              features include category filtering, individual post pages, and a
              fully responsive design.A dynamic web application that provides
              real-time weather information based on user input. Utilizing APIs,
              this app displays current weather conditions, forecasts, and more,
              making it easy to plan your day.
            </div>
            <div className="">
              <b className="pr-2">Technologies Used</b>:React, Tailwind CSS,
              Weather API
            </div>
            <div className="py-2">
              GitHub:{" "}
              <a
                href="https://github.com/akshay0712-dev/project"
                target="_blank"
                className="text-blue-700 "
              >
                Weather App Repository
              </a>
            </div>
            <div className="py-2">
              Demo:{" "}
              <a
                href="https://akshay0712-dev.github.io/project/"
                target="_blank"
                className="text-blue-700 "
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="">
            <img src="pic3.png" alt="" className="rounded-xl" />
          </div>
          <div className="">
            <img src="pic4.png" alt="" className="rounded-xl" />
          </div>
          <div className="text-lg pb-7 text-[#3a3a3a]">
            <div className="text-3xl font-semibold py-3">
              4. Expense Tracker
            </div>
            <div className="py-3">
              An intuitive React-based application that helps users track their
              incomes and expenses efficiently. With features for adding,
              editing, and deleting transactions, users can visualize their
              spending habits and maintain financial health.
            </div>
            <div className="">
              <b className="pr-2">Technologies Used</b>:React, Tailwind CSS,
              Weather API
            </div>
            <div className="py-2">
              GitHub:{" "}
              <a
                href="https://github.com/akshay0712-dev/project"
                target="_blank"
                className="text-blue-700 "
              >
                Expense Tracker Repository
              </a>
            </div>
            <div className="py-2">
              Demo:{" "}
              <a
                href="https://akshay0712-dev.github.io/project/"
                target="_blank"
                className="text-blue-700 "
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="text-lg pb-7 text-[#3a3a3a]">
            <div className="text-3xl font-semibold py-3">5. ToDo App</div>
            <div className="py-3">
              A task management application that allows users to organize and
              categorize their tasks effectively. Users can add, edit, and
              delete tasks while keeping them organized by categories such as
              work, personal, or study.
            </div>
            <div className="">
              <b className="pr-2">Technologies Used</b>:React, Local Storage,
              Tailwind CSS
            </div>
            <div className="py-2">
              GitHub:{" "}
              <a
                href="https://github.com/akshay0712-dev/project"
                target="_blank"
                className="text-blue-700 "
              >
                ToDo App Repository
              </a>
            </div>
            <div className="py-2">
              Demo:{" "}
              <a
                href="https://akshay0712-dev.github.io/project/"
                target="_blank"
                className="text-blue-700 "
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="">
            <img src="pic5.png" alt="" className="rounded-xl" />
          </div>
        </div>

        {/* ........Skills...... */}
        <div
          className="min-h-[100vh] flex justify-evenly items-center flex-row mb-5 flex-wrap"
          id="Projects"
        >
          <div className="capitalize text-5xl font-bold w-[80vw] mx-auto pb-20 h-fit">
            Skills
          </div>

          <div className="flex flex-col   items-center mb-5 justify-start gap-10 h-[60vh] ">
            <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
              <div className="capitalize text-3xl font-bold  w-fit">
                Language
              </div>
              {/* language */}
              <img
                src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"
                alt="C++"
                className="h-[50px]"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
              />
            </div>
            <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
              <div className="capitalize text-3xl font-bold  w-fit">
                {" "}
                FrontEnd
              </div>
              {/* FrontEnd */}
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="Tailwind CSS"
              />
            </div>

            <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
              <div className="capitalize text-3xl font-bold  w-fit">
                {" "}
                Backend
              </div>
              {/* **Backend**: */}
              <img
                src="https://img.shields.io/badge/Express.js-FEFEFE?logo=express&logoColor=black&style=flat"
                alt="Express"
              />
              <img
                src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="MongoDB"
              />
            </div>

            <div className="flex flex-row justify-start gap-16 w-[80vw] items-center flex-wrap">
              <div className="capitalize text-3xl font-bold  w-fit">
                {" "}
                Other Tools
              </div>
              {/* **Other Tools**: */}
              <img
                src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="VS CODE"
              />
              <img
                src="https://img.shields.io/badge/NPM-2D3136.svg?style=for-the-badge&logo=npm&logoColor=white"
                alt="npm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
