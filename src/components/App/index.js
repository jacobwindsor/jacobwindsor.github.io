import React from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import Landing from "../Landing"
import Experience from "../Experience"
import Skills from "../Skills"

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet plain theme={theme} style={{width: "100vw", height: "100%", minHeight: "100vh"}}>
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
            width={size == "small" ? "100%" : "80%"}
            style={{
              margin: "0 auto"
            }}
          >
            <Landing />
            <Skills size={size} />
            <Experience size={size} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App; 
