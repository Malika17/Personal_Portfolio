import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css";
const Skills = () => {
  return (
    <data-scroll data-scroll-speed="2">
      <div className="help">
        <motion.h1
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="mar_tech"
        >
          TECH STACK * TECH STACK * TECH STACK * TECH STACK * TECH STACK * TECH
          STACK
        </motion.h1>
        <motion.h1
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="mar_tech"
        >
          TECH STACK * TECH STACK * TECH STACK * TECH STACK * TECH STACK * TECH
          STACK
        </motion.h1>
      </div>
      <div className="mar1">
        <div className="mar2">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="mar3"
          >
            HTML * CSS * JAVASCRIPT * REACT * NEXT *
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="mar3"
          >
            HTML * CSS * JAVASCRIPT * REACT * NEXT *
          </motion.h1>
        </div>
      </div>
      <div className="mar1">
        <div className="mar2">
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="mar3"
          >
            TAILWIND * BOOTSTRAP * RESPONSIVE WEB DESIGN * UI/UX *
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="mar3"
          >
            TAILWIND * BOOTSTRAP * RESPONSIVE WEB DESIGN * UI/UX *
          </motion.h1>
        </div>
      </div>
    </data-scroll>
  );
};

export default Skills;
