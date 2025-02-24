import { Element } from "react-scroll";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </>
  );
}

export default App;
