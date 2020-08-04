import { Box, Avatar, Anchor, Button } from  "grommet"
import { Github, Linkedin, Mail } from "grommet-icons"
import React from "react"
import profile from "./profile.jpg"
import "./index.css"
import NextSectionArrow from "../NextSectionArrow"
import SectionHeading from "../SectionHeading"
import TypeWriter from 'react-typewriter';

const SocialButtons = () => (
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
)

const Landing = ({ onNextArrowClick }) => (
    <>
        <Box direction="column" align="center">
            <Avatar 
                size="xlarge" 
                src={profile}
                style= {{
                    width: "250px",
                    height: "250px",
                    border: "6px solid #021226"
                }}
            />
            <SectionHeading uppercase={false} thickness=".3rem" heading="Jacob Windsor" fontSize="2.8rem" />
            <TypeWriter typing={1}>
                <div className="typing">
                    <h2 className="subtitle">Making scientific research faster, easier, &amp; more accessible.</h2>
                    <span className="caret">&nbsp;</span>
                </div>
            </TypeWriter>
            <SocialButtons />
        </Box>
        <Button 
            primary 
            label="Hire me!"
            href="mailto:me@jcbwndsr.com"
            style={{marginTop: "2rem"}}
        />
        <NextSectionArrow sectionName="Skills" onClick={onNextArrowClick} />
    </>
);

export default Landing;