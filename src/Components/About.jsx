import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const About = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline({ delay: 5 });

    // Animation setup
    tl.fromTo(
      imageRefs.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.inOut",
      }
    );

    // Clean up GSAP animation
    return () => {
      tl.kill(); // Kill the timeline to prevent memory leaks
    };
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
        <div
          className="imgCntr"
          ref={(el) => (imageRefs.current[0] = el)}
        ></div>
        <div
          className="imgCntr"
          ref={(el) => (imageRefs.current[1] = el)}
        ></div>
        <div
          className="imgCntr"
          ref={(el) => (imageRefs.current[2] = el)}
        ></div>
      </div>
    </div>
  );
};
