import React from "react";
import { Box, Anchor } from "grommet"
import { Github, Linkedin, Mail, Blog } from "grommet-icons"

const SocialButtons = () => (
    <Box
        direction="row"
        gap="small"
    >
        <Anchor
            icon={<Github/>}
            href="https://github.com/jacobwindsor"
            color="white"
            target="_blank"
        />
        <Anchor
            icon={<Linkedin/>}
            href="https://www.linkedin.com/in/jcbwndsr/"
            color="white"
            target="_blank"
        />
        <Anchor
            icon={<Mail/>}
            href="mailto:me@jcbwndsr.com"
            color="white"
            target="_blank"
        />
        <Anchor
            icon={<Blog/>}
            href="http://blog.jcbwndsr.com"
            color="white"
            target="_blank"
        />
    </Box>
)

export default SocialButtons