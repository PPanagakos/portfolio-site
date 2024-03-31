import React from "react";
import "./Projects.css";
import hangmanGameImg from "../../assets/hangmangame.webp";
import linkSharingImg from "../../assets/linksharingprofile.jpeg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Hangman Game",
      description:
        "A modern rendition of the classic word-guessing game, crafted with Vite, React, and CSS. This interactive experience combines intuitive gameplay with a sleek, responsive design, perfect for testing your vocabulary on any device.",
      image: hangmanGameImg,
      siteUrl: "https://hangman-ppanagakos.vercel.app/",
      repoUrl: "https://github.com/PPanagakos/Hangman",
    },
    {
      name: "Link Sharing App",
      description:
        "Built with React.js and Firebase, this app features secure user authentication, customizable profiles, and efficient link management. With its responsive design and Chakra UI, it provides a user-friendly experience on any device.",
      image: linkSharingImg,
      siteUrl: "https://link-sharing-app-mu.vercel.app/",
      repoUrl: "https://github.com/PPanagakos/link-sharing-app",
    },
  ];

  return (
    <div className="projects-section">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
