import { Box, Avatar, Anchor, Button } from  "grommet"
import { Github, Linkedin, Mail, Down } from "grommet-icons"
import React from "react"
import profile from "./profile.jpg"
import "./index.css"

const Landing = (props) => (
    <Box
        direction="column"
        align="center"
    >
        <Avatar 
            size="xlarge" 
            src={profile}
            style= {{
                width: "250px",
                height: "250px",
                border: "6px solid #021226"
            }}
        />
        <h1 className="title">Jacob Windsor</h1>
        <h2 className="subtitle">Making scientific research faster, easier, & more accessible.</h2>
        <Box
            direction="row"
            gap="small"
        >
            <Anchor
                icon={<Github/>}
                href="https://github.com/jacobwindsor"
                color="white"
            />
            <Anchor
                icon={<Linkedin/>}
                href="https://www.linkedin.com/in/jcbwndsr/"
                color="white"
            />
            <Anchor
                icon={<Mail/>}
                href="mailto:me@jcbwndsr.com"
                color="white"
            />
        </Box>
        <Button 
            primary 
            label="Hire me!"
            href="mailto:me@jcbwndsr.com"
            style={{marginTop: "2rem"}}
        />
        <Anchor 
            icon={<Down size="large" />}
            color="white"
            size="xlarge"
            reverse
            className="experience-arrow"
        />
    </Box>
);

export default Landing;