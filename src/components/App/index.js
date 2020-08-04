import React, { useRef } from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import Landing from "../Landing"
import Experience from "../Experience"
import Skills from "../Skills"
import "./index.css";
import Projects from '../Projects';
import Background from "../Background"

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const Sections = ({ scrollTo, size }) => {
  const skillsSection = useRef(null)
  const projectSection = useRef(null)
  const experienceSection = useRef(null)

  return (
    <>
      <Box direction="column" align="center" justify="evenly" className="section">
        <Landing onNextArrowClick={() => scrollTo(skillsSection.current.offsetTop)} />
      </Box>
      <Box ref={skillsSection} id="skills" direction="column" align="center" justify="evenly" className="section">
        <Skills size={size} onNextArrowClick={() => scrollTo(projectSection.current.offsetTop)} />
      </Box>
      <Box ref={projectSection} direction="column" align="center" justify="evenly" className="section">
        <Projects size={size} onNextArrowClick={() => scrollTo(experienceSection.current.offsetTop)} />
      </Box>
      <Box ref={experienceSection} direction="column" align="center" justify="evenly" className="section">
        <Experience size={size} />
      </Box>
    </>
  )
}

function App() {
  const setScrollPos = (pos) => {
    window.scroll({
      top: pos,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <Grommet plain theme={theme} style={{width: "100%", height: "100%", minHeight: "100vh"}}>
      <Background />
      <ResponsiveContext.Consumer>
        {size => (
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
              margin: "0 auto"
            }}
          >
            <Sections scrollTo={(pos) => setScrollPos(pos) } size={size} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App; 
