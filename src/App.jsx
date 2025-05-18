import { Element } from "react-scroll";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />

      <div className="bg-gray-900 text-white min-h-screen p-16 space-y-24">
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

      <Footer />
    </div>
  );
}

export default App;

