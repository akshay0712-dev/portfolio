import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="selection:bg-neutral-800 selection:text-white">
      {/* ........NavBar Section........ */}
      <Navbar />

      {/* ........Intro Section........ */}
      <Intro />

      {/*......About Section......  */}
      <About />

      {/* ........Skills...... */}
      <Skills />

      {/* ........Experience...... */}
      <Experience />

      {/* ........Project Showcase...... */}
      <Projects />

      {/* ........Contect Section ...... */}
      <Contact />
      </div>
  );
}

export default App;
