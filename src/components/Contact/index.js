import React from "react";
import { Box, Button } from "grommet";
import SectionHeading from "../SectionHeading"
import SocialButtons from "../SocialButtons";

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
            <SocialButtons />
        </Box>
    </>
)

export default Contact;