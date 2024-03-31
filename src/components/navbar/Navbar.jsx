import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="navbar">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          activeClass="active"
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
