import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import wikipathways from "./wikipathways.png"
import "./index.css"
import gsoc from "./gsoc.png"
import abcam from "./abcam.png"
import crg from "./crg.png"
import SectionHeading from "../SectionHeading";

const WorkItem = ({ title, subtitle, iconSrc, date, children }) => (
    <VerticalTimelineElement 
                icon={<img src={iconSrc} alt={title} />}
                className="timeline-element"
                iconClassName="timeline-element--icon"
                dateClassName="timeline-element--date"
                textClassName="timeline-element--text"
                date={date}
            >
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                {children}
            </VerticalTimelineElement>
)

const Experience = ({size}) => (
    <>
        <SectionHeading heading="Experience" />
        <VerticalTimeline layout={size !== "large" ? "1-column" : "2-columns"}>
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
                title="WikiPathways" 
                subtitle="Improving Educational Capabilities with 'Pathway Stories'" 
                iconSrc={wikipathways}
                date="January 2017 - June 2017">
                    <p>Worked with <a href="wikipathways.org">WikiPathways</a> to improve the educational capabilities of the pathway diagrams by creating "pathway stories".
                    Was part of bachelor thesis work for Maastricht University and I was awarded <strong>best thesis</strong> and received the <strong>Student Award</strong> for this work.
                    Thesis can be found <a href="goo.gl/vzx9i4">here</a>.</p>
            </WorkItem>
        </VerticalTimeline>
    </>
)

export default Experience