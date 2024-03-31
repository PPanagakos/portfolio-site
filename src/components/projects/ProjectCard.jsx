import React from "react";
import "./Projects.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.name} className="project-image" />
    <div className="project-content">
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        <a href={project.siteUrl} target="_blank" className="project-link">
          Try it out!
        </a>
        <a href={project.repoUrl} target="_blank" className="project-link">
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
