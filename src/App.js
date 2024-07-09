import React, { useEffect, useRef } from "react";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./Components/Skills";
import Loader from "./Components/Loader";
import Contact from "./Components/Contact";

function App() {
  const scrollContainerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll instance
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1, // Adjust scroll speed multiplier as needed
      // Add any other options you need
    });

    // Destroy Locomotive Scroll instance on unmount
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  return (
    <div className="App" ref={scrollContainerRef} data-scroll-container>
      <Loader />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
