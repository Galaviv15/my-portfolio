import React from "react";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./main.css";

function Main() {
  return (
    <div className="Main">
      <div className="first-container">
        <Home />
      </div>

      <div className="second-container">
        <Skills />
      </div>

      <div className="third-container">
        <Projects />
      </div>
    </div>
  );
}

export default Main;
