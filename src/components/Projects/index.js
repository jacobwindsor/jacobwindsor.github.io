import React, { useState } from "react";
import { Box, Image, Button } from "grommet"
import { Motion, spring, presets } from "react-motion";
import SectionHeading from "../SectionHeading";
import NextSectionArrow from "../NextSectionArrow";
import tmerge from "./images/tmerge.png"
import sqantiExplorer from "./images/SQANTI-Explorer.png"
import jReact from "./images/jReact.png"
import webpackify from "./images/webpackify.png"
import pathwayPresenter from "./images/PathwayPresenter.png"
import metabMaster from "./images/MetabMaster.png"
import pubchem from "./images/pubchem.png"
import react from "./images/react.png"
import "./index.css"

const CardContentSimple = ({ heading, hidden }) =>
   <Motion
         defaultStyle = {{ 
            // opacity: hidden ? 0: 1 
            left: hidden ? -1000 : 0
         }}
         style = {{ 
            // opacity: spring(!hidden ? 1 : 0, presets.noWobble)
            left: spring(hidden ? -500 : 0, presets.gentle)
         }}
   >
      {
         value => <h2 className="card--simple--heading" style={{marginLeft: value.left}}>{heading}</h2>
      }
   </Motion>

const CardContentDetails = ({ hidden, heading, body, link, tags}) => 
   (
      <Motion
         defaultStyle = {{ 
            overlayOpacity: hidden ? 0: 0.9,
            textPosition: hidden ? -300 : 0
         }}
         style = {{ 
            overlayOpacity: spring(!hidden ? 0.9 : 0, presets.noWobble), 
            textPosition: spring(!hidden ? 0: -300, presets.gentle)
         }}
      >
         {
            value =>
               <>
                  <div className="card--overlay" style={{opacity: value.overlayOpacity}}>&nbsp;</div>
                  <div className="card--details--text" style={{top: value.textPosition}}>
                     <h2 className="card--details--heading">{heading}</h2>
                     <ul className="card--details--tags">
                        {
                           tags.map((tag, i) => <li key={i}>{tag}</li>)
                        }
                     </ul>
                     <p className="card--details--body">{body}</p>
                  </div>
                  {
                     link ? <Button label="Learn More" className="card--details--link" href={link} primary style={{bottom: value.textPosition}} /> : <></>
                  }
               </>
         }
      </Motion>
   )

const Card = (props) => {
   const [showDetails, setShowDetails] = useState(false)
      
   const getWidth = () => {
      switch (props.size) {
         case "xxsmall":
            return "100%"
         case "xsmall":
            return "100%"
         case "small":
            return "100%"
         case "medium":
            return "50%"
         case "large":
            return "25%"
         default:
            return "25%"
      }
   }

   const getPadding = () => {
      switch (props.size) {
         case "xxsmall":
            return "56.25%"
         case "xsmall":
            return "56.25%"
         case "small":
            return "56.25%"
         case "medium":
            return "75%"
         case "large":
            return "75%"
         default:
            return "75%"
      }
   }

   const getfontSize = () => {
      switch (props.size) {
         case "xxsmall":
            return "0.7em"
         case "xsmall":
            return "0.8em"
         case "small":
            return "0.9em"
         case "medium":
            return "1em"
         case "large":
            return "1em"
         default:
            return "1em"
      }
   }

   return (
      <div 
         className="card"
         direction="column"
         onMouseEnter={() => setShowDetails(true)}
         onMouseLeave={() => setShowDetails(false)}
         style={{
            width: getWidth(),
            fontSize: getfontSize()
         }}
      >
         <div
            className="card--content"
            style={{
               paddingTop: getPadding()
            }}
         >
            <Image src={props.imgSrc} fit="contain" />
            <CardContentDetails hidden={!showDetails} {...props} />
            <CardContentSimple hidden={showDetails} {...props} />
         </div>
      </div>
   )
}

const Projects = ({ onNextArrowClick, ...props }) => (
 <>
    <SectionHeading heading="Projects" />
    <Box direction="row" fill wrap>
       <Card
         heading="tmerge"
         imgSrc={tmerge}
         body="Builds highly accurate transcripts from long-read RNA data. More accurate than competing tools."
         tags={["Bioinformatics", "RNA-Seq", "Python", "R", "Nextflow"]}
         link="https://github.com/jacobwindsor/tmerge"
         {...props}
      />
      <Card
         heading="SQANTI Explorer"
         imgSrc={sqantiExplorer}
         body="Explore isoform classifications with SQANTI Explorer."
         tags={["Bioinformatics", "R", "Shiny", "Docker", "RNA-Seq", "Plotly"]}
         link="https://github.com/jacobwindsor/SQANTIExplorer"
         {...props}
      />
      <Card
         heading="jReact"
         imgSrc={jReact}
         body="Use React style components with jQuery and support down to IE9. Done for abcam."
         tags={["JavaScript", "Functional Programming", "jQuery"]}
         {...props}
      />
      <Card
         heading="Webpackify"
         imgSrc={webpackify}
         body={"Overhauled abcam.com to use Webpack."}
         tags={["JavaScript", "Webpack"]}
         {...props}
      />
      <Card
         heading="Pathway Presenter"
         imgSrc={pathwayPresenter}
         body="Create dynamic &amp; beautiful presentations from the pathways on WikiPathways!"
         tags={["Bioinformatics", "JavaScript", "SVG", "React", "Angular"]}
         link="https://github.com/jacobwindsor/pathway-presenter"
         {...props}
      />
      <Card
         heading="MetabMaster"
         imgSrc={metabMaster}
         body="Create stories for the pathways on WikiPathways! Award winning piece of work."
         tags={["Bioinformatics", "JavaScript", "SVG", "React", "Angular"]}
         link="https://github.com/jacobwindsor/MetabMaster"
         {...props}
      />
      <Card
         heading="PubChem Ranker"
         imgSrc={pubchem}
         body={["Rank compounds by the abundance of information found on PubChem and other databases."]}
         tags={["Cheminformatics", "Flask", "Python", "Web Scraping"]}
         link="https://github.com/jacobwindsor/pubchem-ranker"
         {...props}
      />
      <Card
         heading="React Aspectral"
         imgSrc={react}
         body="Simple higher order component that allows for the dynamic resizing of React compontnets to a given aspect ratio."
         tags={["React", "JavaScript"]}
         link="https://github.com/jacobwindsor/react-aspectral"
         {...props}
      />
    </Box>


    <NextSectionArrow sectionName="Experience" onClick={onNextArrowClick} />
 </>
)

export default Projects