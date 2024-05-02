import React, { useEffect } from "react";
import { gsap } from "gsap";

export const About = () => {
  useEffect(() => {
    // Create a GSAP timeline for the animation
    const tl = gsap.timeline({ delay: 5 }); // Add a slight delay

    // Target all `.imgCntr` elements within the `.img_right` div
    const imageElements = document.querySelectorAll(".img_right .imgCntr");

    // Apply the stagger animation with customized properties
    tl.fromTo(
      imageElements,
      { opacity: 0, scale: 0 }, // Start with opacity 0 and scale 0
      {
        opacity: 1,
        scale: 1,
        duration: 1, // Adjust duration as needed
        stagger: 0.2, // Set stagger duration between images
        ease: "power3.inOut", // Customize easing if desired
      }
    );
  }, []);
  return (
    <div className="imagery" id="About_view">
      <div className="img_left">
        <h1>
          I AM MALIKA SHARMA, I<br />
          CREATE <span className="text_con"> Unconventional</span>
          <br />
          VISUALLY PLEASING
          <br />
          INTERFACES FOR THE WEB.
          <br />
          <span>"Everyday I learn a little bit more"</span>
        </h1>
      </div>
      <div className="img_right">
        <div className="imgCntr"></div>
        <div className="imgCntr"></div>
        <div className="imgCntr"></div>
      </div>
    </div>
  );
};
