import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <>
      {/* ........Intro Section........ */}
      <Intro />

      {/*......About Section......  */}
     <About />


      {/* ........Skills...... */}
      <Skills />
    
      {/* ........Project Showcase...... */}
      <Projects />
     

    </>
  );
}

export default App;
