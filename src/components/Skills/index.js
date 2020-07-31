import React from "react"
import { Box, Meter } from "grommet"
import { Test, Code, Book } from "grommet-icons"
import "./index.css"
import dataScience from "./data-science.svg"

const SkillList = ({ children  }) => (
    <Box align="center" direction="row" gap="large">
        {children}
    </Box>
)

const KnowledgeBar = ({ percentage, language }) => (
    <div className="knowledge-bar">
        <p className="knowledge-bar--language">{language}</p>
        <span className="knowledge-bar--inner" style={{width: "" + percentage + "%"}}>&nbsp;</span>
        <p className="knowledge-bar--percentage">{percentage}%</p>
    </div>
)

const Languages = () => (
    <SkillList>
        <Code size="large"/>
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
                <strong>Other skills: </strong>React, jQuery, Angular, Docker, AWS, Django, Flask, Cloud Computing, High-Performance Clusters, MongoDb,  Django.
            </p>
        </span>
    </SkillList>
)

// <span>
// <p>JavaScript, Python, R, CSS, HTML, Node.js, Nextflow, SQL, PHP, MATLAB, C#, Java.</p>
// <p>React, jQuery, Angular, Docker, AWS, Django, Flask, Cloud Computing, High-Performance Clusters, MongoDb,  Django. </p>
// </span>

const Education = () => (
    <SkillList>
        <Book size="large" />
        <span>
            <p>BSc (<i>cum laude</i>) Maastricht Science Programme, Maastricht University</p>
            <p>MRes Barcelona Institute of Science &amp; Technology, Pompeu Fabra University</p>
        </span>
    </SkillList>
)

const Skills = (props) => (
    <>
        <h1>Skills</h1>
        <Box
            direction="row"
            justify="between"
        >
            <Box pad="medium" style={{maxWidth:"50%"}}>
                <Languages />
                <Education />
            </Box>
            <Box pad="medium" style={{maxWidth: "50%", textAlign: "center"}} justify="center">
                <h2>Who am I?</h2>
                I am passionate about using my scientific background and software engineering experience to advance scientific research.
                By applying the software engineering practices I have learnt in industry, I am able to write useful, maintainable, and well documented software
                that will make research easier for years to come, and not just for the lifetime of a PhD.
            </Box>
        </Box>
    </>
)

export default Skills