import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import "./projects.css";

function Projects() {
  const projects = [
    {
      name: "Coupons4U",
      imgURL: "images/projects-images/coupons4u-img.png",
      description:
        "Full Flow Web Application, Developed by using Java (maven, Spring), React.ts with redux," +
        "and MySQL as the DB. I used JWT Token and password encryption on registration and login to ensure security.",
      githubLink: "https://github.com/Galaviv15/coupons-server",
      websiteLink: "http://34.165.22.160/",
    },
    {
      name: "Calculator App",
      imgURL: "images/projects-images/calculator-app.png",
      description:
        "A Calculator App, The UI developed by using React.js, the algorithm and logics developed with Javascript.",
      githubLink: "https://github.com/Galaviv15/calculator-app",
      websiteLink: "",
    },
    {
      name: "Champions League API",
      imgURL: "images/projects-images/champion-league-api-project.png",
      description:
        "A Web App that presents the Champions League Standings, Statistics for both Players & Teams, the results of games been played and the future fixtures.",
      githubLink: "https://github.com/Galaviv15/champions-league-api",
      websiteLink: "",
    },
  ];


  return (
    <div id="projects-section" className="Projects">
      <h1 className="projects-container-heading">My Projects</h1>
      <div className="all-projects">
        <div className="cards-container">
          <ProjectCard
            name={projects[0].name}
            imgURL={projects[0].imgURL}
            description={projects[0].description}
            githubLink={projects[0].githubLink}
            websiteLink={projects[0].websiteLink}
          />
          <ProjectCard
            name={projects[1].name}
            imgURL={projects[1].imgURL}
            description={projects[1].description}
            githubLink={projects[1].githubLink}
          />
          <ProjectCard
            name={projects[2].name}
            imgURL={projects[2].imgURL}
            description={projects[2].description}
            githubLink={projects[2].githubLink}
          />
        </div>
        <h1 className="work-in-progress-heading">More projects are in progress...</h1>
      </div>
    </div>
  );
}

export default Projects;
