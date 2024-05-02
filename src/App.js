import logo from "./logo.svg";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./Components/Skills";
// import "./portfolio.css";
import Loader from "./Components/Loader";
import Contact from "./Components/Contact";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="App">
      <Loader />
      <About />
      <Skills />
      <Projects />

      <Contact />
    </div>
  );
}

export default App;
