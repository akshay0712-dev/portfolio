import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";





function App() {
  return (
    <>

      {/* ........NavBar Section........ */}
      <Navbar />


      {/* ........Intro Section........ */}
      <Intro />

      {/*......About Section......  */}
     <About />


      {/* ........Skills...... */}
      <Skills />
    
      {/* ........Project Showcase...... */}
      <Projects />


      {/* ........Contect Section ...... */}
      <Contact />
     

    </>
  );
}

export default App;
