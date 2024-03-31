import React from "react";
import { Element } from "react-scroll";

const Section = ({ name, children }) => (
  <Element name={name} id={name}>
    {children}
  </Element>
);

export default Section;
