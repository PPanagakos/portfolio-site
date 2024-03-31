import React, { useState } from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";
import rocketShip from "../../assets/rocket.gif";
import githubIcon from "../../assets/icon-github.svg";
import "./Introduction.css";

const shakeAnimation = {
  rotate: [0, -10, 10, -10, 0],
  transition: {
    duration: 0.3,
    repeat: 7,
    ease: "linear",
  },
};

function Introduction() {
  const [animationState, setAnimationState] = useState("idle");
  const [animationCount, setAnimationCount] = useState(0);

  const handleRocketClick = () => {
    if (animationState === "idle") {
      setAnimationState("shaking");
      setAnimationCount(1);
    }
  };

  const flyAnimation = {
    x: ["0vw", "100vw", "-100vw", "0vw"],
    transition: {
      duration: 0.3,
      ease: "linear",
      onComplete: () => {
        if (animationCount < 5) {
          setAnimationState("shaking");
          setAnimationCount((c) => c + 1);
        } else {
          setAnimationState("idle");
        }
      },
    },
  };

  return (
    <div className="intro-section">
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="name-title"
        >
          Hi, My Name is <span>Peter</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="role-title"
        >
          Front End Developer
        </motion.p>
        <a
          href="https://github.com/ppanagakos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </a>
      </div>
      <img className="avatar" src={avatar} alt="avatar" />
      <motion.img
        src={rocketShip}
        className="rocket-ship"
        onClick={handleRocketClick}
        animate={
          animationState === "shaking"
            ? shakeAnimation
            : animationState === "flying"
            ? flyAnimation
            : {}
        }
        initial={{ x: "0vw" }}
        onAnimationComplete={() =>
          animationState === "shaking" && setAnimationState("flying")
        }
      />
    </div>
  );
}

export default Introduction;
