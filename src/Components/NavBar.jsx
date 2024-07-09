import React, { useRef } from "react";
import ResumeFile from "./Resume.pdf"; // Import your resume file

const NavBar = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    window.open(ResumeFile, "_blank");
  };

  return (
    <div className="nav">
      {[
        { label: "Malika Sharma", sectionRef: aboutRef },
        { label: "Download Resume", action: downloadResume },
        { label: "Projects", sectionRef: projectsRef },
        { label: "Contact", sectionRef: contactRef },
      ].map((item, index) => (
        <button
          onClick={() => {
            if (item.action) {
              item.action();
            } else if (item.sectionRef) {
              scrollToSection(item.sectionRef);
            }
          }}
          key={index}
        >
          {item.label}
          <span className="line"></span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
