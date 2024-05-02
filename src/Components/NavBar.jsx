import React from "react";
import ResumeFile from "./Resume.pdf"; // Import your resume file

const NavBar = () => {
  const scrollToSection = (id) => {
    const contactSection = document.getElementById(id);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="nav">
      {["Malika Sharma", "Download Resume", "Projects", "Contact"].map(
        (item, index) => (
          <a
            href={index === 1 ? ResumeFile : "#"}
            download={index === 1}
            key={index}
            onClick={() => {
              if (index === 2) {
                scrollToSection("Project_view");
              } else if (index === 3) {
                scrollToSection("page14");
              } else if (index === 0) {
                scrollToSection("About_view");
              }
            }}
          >
            {item}
            <span className="line"></span>
          </a>
        )
      )}
      {/* <span className="line"></span> */}
    </div>
  );
};

export default NavBar;
