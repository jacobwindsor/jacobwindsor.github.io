import React from "react"
import { Box, Image } from "grommet";
import { Motion, spring, presets } from "react-motion";
import { useInView } from "react-intersection-observer"
import wikipathways from "./wikipathways.png"
import "./index.css"
import gsoc from "./gsoc.png"
import abcam from "./abcam.png"
import crg from "./crg.png"
import SectionHeading from "../SectionHeading";
import NextSectionArrow from "../NextSectionArrow";

const WorkItem = ({ title, subtitle, iconSrc, date, children, right }) => {
    const [ref, inView] = useInView({ triggerOnce: true })

    return (
        <div
            className="work-item"
            ref={ref}
        >
            <Box className="work-item--image">
                <Image src={iconSrc} fit="contain" />
            </Box>
            <Motion
                defaultStyle={{offset: -1500}}
                style={{offset:spring(inView ? 0 : -1500, presets.gentle)}}
            >
                { value => 
                    <div className="work-item--text" style={{[right ? "left": "right"]: value.offset + "px"}}>
                        <div className="work-item--arrow">&nbsp;</div>
                        <h3 className="work-item--title">{title}</h3>
                        <h4 className="work-item--subtitle">{subtitle}</h4>
                        {children}
                        <span className="work-item--date" fit="contain">{date}</span>
                    </div>
                }
            </Motion>
        </div>
    )
}

const VerticalTimeline = ({ children, columns = 2 }) => {
    if (columns > 2 || columns < 1) {
        throw new Error("Number of columns can only be one or 2.")
    }
    return (
        <div className={`timeline ${columns === 1 ? "one-column": "two-columns"}`}>
            <div className="line">&nbsp;</div>
            <Box direction="column">
                {children}
            </Box>
        </div>
    )
}

const Experience = ({size, onNextArrowClick}) => (
    <>
        <SectionHeading heading="Experience" />
        <VerticalTimeline columns={size !== "large" ? 1 : 2}>
            <WorkItem
                title="Centre for Genomic Regulation"
                subtitle="RNA Sequencing Analysis tools"
                iconSrc={crg}
                date="September 2019 - September 2020"
            >
                <p>
                Developed two tools for effectively analyzing long read RNA sequencing
                datasets: <a href="github.com/jacobwindsor/tmerge">tmerge</a> and <a href="github.com/jacobwindsor/SQANTI-Explorer">SQANTI Explorer</a>
                . Papers currently being written.
                </p>
            </WorkItem>
            <WorkItem
                title="Abcam"
                subtitle="Software Engineer"
                date="November 2017 - January-2019"
                iconSrc={abcam}
                right={size=="large"}
            >
                <p>Responsible for the front-end of <a href="http://www.abcam.com">abcam.com</a>. Led a major
                modernisation of the front-end to use modern JavaScript practices.
                Trained other team members in adopting a functional approach to
                JavaScript programming.
                </p>
            </WorkItem>
            <WorkItem
                title="Google Summer of Code"
                subtitle="WikiPathways 'Pathway Presenter'"
                iconSrc={gsoc}
                date="June 2017 - September 2017"
            >
                <p>
                Successfully passed the Google Summer of Code by completing a three
                month project to develop a tool for biologists to create presentations of
                biological pathways on <a href="wikipathways.org">WikiPathways</a> (details: <a href="goo.gl/vZWS2H">here</a>).
                </p>
            </WorkItem>
            <WorkItem
                right={size=="large"}
                title="WikiPathways" 
                subtitle="Improving Educational Capabilities with 'Pathway Stories'" 
                iconSrc={wikipathways}
                date="January 2017 - June 2017">
                    <p>Worked with <a href="wikipathways.org">WikiPathways</a> to improve the educational capabilities of the pathway diagrams by creating "pathway stories".
                    Was part of bachelor thesis work for Maastricht University and I was awarded <strong>best thesis</strong> and received the <strong>Student Award</strong> for this work.
                    Thesis can be found <a href="goo.gl/vzx9i4">here</a>.</p>
            </WorkItem>
        </VerticalTimeline>
        <NextSectionArrow onClick={onNextArrowClick} sectionName="Contact" />
    </>
)

export default Experience