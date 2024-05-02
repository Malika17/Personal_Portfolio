import { useEffect } from "react";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./Components/Skills";
import Loader from "./Components/Loader";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
      multiplier: 1, // Increase/decrease the scroll speed
      // Add any other options you need
    });

    // Destroy Locomotive Scroll instance on unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="App" data-scroll-container>
      <Loader />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
