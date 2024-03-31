import "./index.css";
import Starfield from "react-starfield";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      <Navbar />
      <Section name="home">
        <Introduction />
      </Section>
      <Section name="about">
        <About />
      </Section>
      <Section name="projects">
        <Projects />
      </Section>
      <Section name="contact">
        <Contact />
      </Section>
    </div>
  );
}

export default App;
