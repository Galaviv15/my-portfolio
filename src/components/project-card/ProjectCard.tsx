import React from "react";
import { IProjectCard } from "../../models/IProjectCard";
import "./project-card.css"

function ProjectCard(props: IProjectCard){


  function openGithubLink(url: any){
    window.open(url, "_blank", "noreferrer");
  };

  function openWebsiteLink(url: any){
    window.open(url, "_blank", "noreferrer");
  };

  


    return(
        <div className="ProjectCard">
          <img className="project-img" src={props.imgURL} alt="" />
          <div className="intro">
            <h1 className="project-name">{props.name}</h1>
            <p className="project-description">{props.description}</p>
          <div className="external-link-buttons">
              <button role={"link"} onClick={()=> openGithubLink(props.githubLink)} className="link-button">GitHub</button>
              {props.websiteLink && <button role={"link"} onClick={()=> openWebsiteLink(props.websiteLink)} className="link-button no-website">Website</button>}
          </div>
          </div>
          
        </div>
    );
}

export default ProjectCard;