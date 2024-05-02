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
          <button
            // Add or adjust CSS class for button styling
            onClick={() => {
              if (index === 1) {
                window.open(ResumeFile, "_blank");
              } else if (index === 2) {
                scrollToSection("Project_view");
              } else if (index === 3) {
                scrollToSection("page14");
              } else if (index === 0) {
                scrollToSection("About_view");
              }
            }}
            key={index}
          >
            {item}
            <span className="line"></span>
          </button>
        )
      )}
    </div>
  );
};

export default NavBar;
