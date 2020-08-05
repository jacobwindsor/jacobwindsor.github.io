import React, { useRef, forwardRef } from "react";
import { Grommet, Box, ResponsiveContext } from "grommet";
import Landing from "../Landing";
import Experience from "../Experience";
import Skills from "../Skills";
import "./index.css";
import Projects from "../Projects";
import Background from "../Background";
import Contact from "../Contact";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const Section = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    direction="column"
    align="center"
    justify="evenly"
    className="section"
  >
    {children}
  </Box>
));

const Sections = ({ scrollTo, size }) => {
  const skillsSection = useRef(null);
  const projectSection = useRef(null);
  const experienceSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <>
      <Section>
        <Landing
          onNextArrowClick={() => scrollTo(skillsSection.current.offsetTop)}
        />
      </Section>
      <Section ref={skillsSection}>
        <Skills
          size={size}
          onNextArrowClick={() => scrollTo(projectSection.current.offsetTop)}
        />
      </Section>
      <Section ref={projectSection}>
        <Projects
          size={size}
          onNextArrowClick={() => scrollTo(experienceSection.current.offsetTop)}
        />
      </Section>
      <Section ref={experienceSection}>
        <Experience
          size={size}
          onNextArrowClick={() => scrollTo(contactSection.current.offsetTop)}
        />
      </Section>
      <Section ref={contactSection}>
        <Contact size={size} />
      </Section>
    </>
  );
};

function App() {
  const setScrollPos = (pos) => {
    window.scroll({
      top: pos,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grommet
      plain
      theme={theme}
      style={{ width: "100%", height: "100%", minHeight: "100vh" }}
    >
      <Background />
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box
            flex
            direction="column"
            align="center"
            justify="center"
            pad="small"
            background="#181E40"
            fill="vertical"
            width={size === "small" ? "100%" : "80%"}
            style={{
              margin: "0 auto",
            }}
          >
            <Sections scrollTo={(pos) => setScrollPos(pos)} size={size} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
