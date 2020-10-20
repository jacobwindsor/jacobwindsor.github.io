import React from "react";
import { Box, Button } from "grommet";
import SectionHeading from "../SectionHeading";
import SocialButtons from "../SocialButtons";

const Contact = ({ size }) => (
  <>
    <SectionHeading heading="Contact" />
    <Box
      style={{ textAlign: "center" }}
      direction="column"
      align="center"
      gap="medium"
    >
      <Button
        label="Start a conversation"
        href="mailto:me@jcbwndsr.com"
        primary
        size="large"
      />
      <SocialButtons />
    </Box>
  </>
);

export default Contact;
