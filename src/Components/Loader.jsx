import React, { useEffect } from "react";
import "./portfolio.css"; // Importing CSS file
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Expo } from "gsap/all";
import { Circ } from "gsap/all";
import { Power3 } from "gsap/all";
import NavBar from "./NavBar";

const Loader = () => {
  // useEffect hook to run the DOM manipulation logic
  useEffect(() => {
    // Function to manipulate DOM elements
    const revealToSpan = () => {
      document.querySelectorAll(".reveal").forEach(function (elem) {
        //create two spans
        let parent = document.createElement("span");
        let child = document.createElement("span");
        //set span content
        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = "";
        elem.appendChild(parent);
      });
    };
    revealToSpan();
    var tl = gsap.timeline();
    // tl.to(".child span", {
    //   x: 0,
    //   stagger: 0.2,
    //   ease: Power3.easeInOut,
    //   duration: 1,
    //   delay: 1,
    // });
    gsap.fromTo(".child span", { opacity: 0 }, { opacity: 1, duration: 2 });

    tl.to(".parent .child", {
      y: "-100%",
      ease: Circ.easeInOut,
      duration: 1,
      delay: 2,
    });

    tl.to(".loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    });

    gsap.fromTo(
      ".row1 h5",
      { opacity: 0 },
      { opacity: 0.4, duration: 2, delay: 4 }
    ); // Adding a delay of 1 second
    gsap.fromTo(
      ".row1 h1",
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 3.5 }
    );
    gsap.fromTo(
      ".row2 h1",
      { opacity: 0, x: "100vw" }, // Start from extreme right
      { opacity: 1, x: "0", duration: 2, delay: 4 } // Animate opacity & position to left
    );

    gsap.fromTo(
      ".row2 h1 .dev",
      { opacity: 0, y: "100vh" }, // Start from extreme bottom
      { opacity: 1, y: "0", duration: 2, delay: 5 } // Animate opacity & position
    );
    // Call revealToSpan function when component mounts

    // Cleanup function (optional)
    return () => {
      // Any cleanup logic here
    };
  }, []); // Empty dependency array means the effect runs only once, similar to componentDidMount

  return (
    <div className="main">
      <div className="loader">
        <div className="topHeading">
          <h5 className="reveal">Design portfolio</h5>
        </div>
        <h1 className="reveal">
          <span className="cover_font">Malika Sharma is a</span>
        </h1>
      </div>

      <div className="home">
        <NavBar />

        <div className="row1">
          <h1>Creative</h1>
          <div className="text">
            <h5>LOOKING FOR</h5>
            <h5>INTERNSHIP AND GAINING EXPERIENCE</h5>
          </div>
          <div className="text">
            <h5>BASED IN </h5>
            <h5>JAIPUR, INDIA</h5>
          </div>
        </div>
        <div className="row2">
          <h1>
            <span className="text_front">frontend</span>{" "}
            <span className="dev">Developer</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
