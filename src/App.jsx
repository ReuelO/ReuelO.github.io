import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home data-aos="fade-up" />
      <About data-aos="fade-up" />
      <Projects data-aos="fade-up" />
      <Skills data-aos="fade-up" />
      <Contact data-aos="fade-up" />
      <Footer />
    </>
  );
}

export default App;
