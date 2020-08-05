import React from "react";
import { Box, Image } from "grommet";
import { Code, Book } from "grommet-icons";
import "./index.css";
import { Motion, spring, presets } from "react-motion";
import { useInView } from "react-intersection-observer";
import NextSectionArrow from "../NextSectionArrow";
import SectionHeading from "../SectionHeading";
import climbing from "./climbing.webp";
import climbingJpg from "./climbing.jpg";

const SkillList = ({ children, size }) => (
  <Box
    align="center"
    direction={size === "large" ? "row" : "column"}
    gap="large"
  >
    {children}
  </Box>
);

const KnowledgeBar = ({ percentage, language }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="knowledge-bar" ref={ref}>
      <p className="knowledge-bar--language">{language}</p>
      <Motion
        defaultStyle={{ width: 0 }}
        style={{ width: inView ? spring(percentage, presets.gentle) : 0 }}
      >
        {(value) => (
          <span
            className="knowledge-bar--inner"
            style={{ width: `${value.width}%` }}
          >
            &nbsp;
          </span>
        )}
      </Motion>
      <p className="knowledge-bar--percentage">{percentage}%</p>
    </div>
  );
};

const Languages = ({ size }) => (
  <SkillList size={size}>
    <Code size="large" />
    <span>
      <KnowledgeBar percentage={90} language="JavaScript" />
      <KnowledgeBar percentage={85} language="Python" />
      <KnowledgeBar percentage={80} language="R" />
      <KnowledgeBar percentage={90} language="HTML" />
      <KnowledgeBar percentage={90} language="CSS" />
      <KnowledgeBar percentage={85} language="Node.js" />
      <KnowledgeBar percentage={70} language="Nextflow" />
      <KnowledgeBar percentage={50} language="SQL" />
      <KnowledgeBar percentage={40} language="PHP" />
      <KnowledgeBar percentage={40} language="MATLAB" />
      <KnowledgeBar percentage={35} language="C#" />
      <KnowledgeBar percentage={35} language="Java" />
      <p>
        <strong>Other skills: </strong>React, jQuery, Angular, Docker, AWS,
        Django, Flask, Cloud Computing, High-Performance Clusters, MongoDb,
        Django.
      </p>
    </span>
  </SkillList>
);

// <span>
// <p>JavaScript, Python, R, CSS, HTML, Node.js, Nextflow, SQL, PHP, MATLAB, C#, Java.</p>
// <p>React, jQuery, Angular, Docker, AWS, Django, Flask, Cloud Computing, High-Performance Clusters, MongoDb,  Django. </p>
// </span>

const Education = ({ size }) => (
  <SkillList size={size}>
    <Book size="large" />
    <span>
      <p>
        BSc (<i>cum laude</i>) Maastricht Science Programme, Maastricht
        University
      </p>
      <p>
        MRes Barcelona Institute of Science &amp; Technology, Pompeu Fabra
        University
      </p>
    </span>
  </SkillList>
);

const Skills = ({ onNextArrowClick, size }) => (
  <>
    <SectionHeading heading="Skills" />
    <Box direction="row" justify="between" wrap>
      <Box pad="small" style={{ width: size === "small" ? "100%" : "50%" }}>
        <Languages size={size} />
        <Education size={size} />
      </Box>
      <Box
        pad="small"
        style={{
          width: size === "small" ? "100%" : "50%",
          textAlign: "center",
        }}
        justify="center"
        direction="column"
        align="center"
      >
        <div>
          <h2>Who am I?</h2>
          <p>
            I am passionate about using my scientific background and years of
            software engineering experience to advance scientific research. By
            applying the software engineering practices I have learnt in
            industry, I am able to write useful, maintainable, and well
            documented software that will make research easier for years to
            come.
          </p>
          <p>
            In my spare time I love to climb, build real-world things (not just
            software), and travel around in my campervan.
          </p>
        </div>
        <Box
          justify="center"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            maxWidth: "300px",
            overflow: "hidden",
            borderRadius: ".1rem",
          }}
        >
          <Image src={climbing} fallback={climbingJpg} fit="cover" />
        </Box>
      </Box>
    </Box>
    <NextSectionArrow sectionName="Projects" onClick={onNextArrowClick} />
  </>
);

export default Skills;
