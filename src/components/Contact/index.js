import React from "react";
import { Box, Button, Anchor } from "grommet";
import { Mail, Github, Linkedin } from "grommet-icons";
import SectionHeading from "../SectionHeading"


const getWidth = (size) => size === "large" ? "50%" : "100%"

const Contact = ({ size }) => (
    <>
        <SectionHeading heading="Contact"/>
        <Box 
            style={{ textAlign: "center" }}
            direction="column"
            align="center"
            gap="medium"
        >
            <Box direction="column">
                <h1>Interested in working with me?</h1>
                <p>I'm currently available for work. Get in touch if you have a project you'd like to discuss.</p>
            </Box>
            <Button label="Start a converstation" href="mailto:me@jcbwndsr.com" primary size="large" />
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
        </Box>
    </>
)

export default Contact;