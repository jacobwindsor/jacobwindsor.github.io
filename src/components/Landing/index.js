import { Box, Button, Image } from "grommet";
import React from "react";
import profile from "./profile.webp";
import profileJpg from "./profile.jpg";
import "./index.css";
import NextSectionArrow from "../NextSectionArrow";
import SectionHeading from "../SectionHeading";
import TypeWriter from "react-typewriter";
import SocialButtons from "../SocialButtons";

const Avatar = ({ imgSrc, fallbackImgSrc }) => (
  <Box
    style={{
      width: "250px",
      height: "250px",
      border: "6px solid #021226",
      borderRadius: "100%",
      overflow: "hidden",
    }}
  >
    <Image
      src={imgSrc}
      fallback={fallbackImgSrc}
      alt="Jacob Windsor"
      fit="cover"
    />
  </Box>
);

const Landing = ({ onNextArrowClick }) => (
  <>
    <Box direction="column" align="center">
      <Avatar imgSrc={profile} fallbackImgSrc={profileJpg} />
      <SectionHeading
        uppercase={false}
        thickness=".3rem"
        heading="Jacob Windsor"
        fontSize="2.8rem"
      />
      <TypeWriter typing={1}>
        <div className="typing">
          <h2 className="subtitle">
            Making scientific research faster, easier, &amp; more accessible.
          </h2>
          <span className="caret">&nbsp;</span>
        </div>
      </TypeWriter>
      <SocialButtons />
    </Box>
    <Button
      primary
      label="HGet in touch"
      href="mailto:me@jcbwndsr.com"
      style={{ marginTop: "2rem" }}
    />
    <NextSectionArrow sectionName="Skills" onClick={onNextArrowClick} />
  </>
);

export default Landing;
