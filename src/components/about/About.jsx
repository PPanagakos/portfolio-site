import React from "react";
import astronaut from "../../assets/astronaut.png";
import "./About.css";

function About() {
  return (
    <div className="about-me">
      <div className="card">
        <div className="bio">
          <h2>About Me</h2>
          <p>
            As a front-end developer, innovation and problem-solving are at the
            heart of what I do. Every project is an opportunity to learn, grow,
            and push the boundaries of what's possible online. I'm all about
            finding that perfect balance between sleek design and intuitive
            usability, making sure every user leaves with lasting impression.
          </p>
        </div>
      </div>
      <img src={astronaut} alt="Astronaut" className="astronaut" />
    </div>
  );
}

export default About;
