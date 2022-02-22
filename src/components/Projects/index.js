import React, { useState } from "react";
import { Box, Image, Button } from "grommet";
import { Motion, spring, presets } from "react-motion";
import SectionHeading from "../SectionHeading";
import NextSectionArrow from "../NextSectionArrow";
import tmerge from "./images/tmerge.webp";
import tmergeJpg from "./images/tmerge.jpg";
import sqantiExplorer from "./images/SQANTI-Explorer.webp";
import sqantiExplorerJpg from "./images/SQANTI-Explorer.jpg";
import jReact from "./images/jReact.webp";
import jReactJpg from "./images/jReact.jpg";
import webpackify from "./images/webpackify.webp";
import webpackifyJpg from "./images/webpackify.jpg";
import pathwayPresenter from "./images/PathwayPresenter.webp";
import pathwayPresenterJpg from "./images/PathwayPresenter.jpg";
import metabMaster from "./images/MetabMaster.webp";
import metabMasterJpg from "./images/MetabMaster.jpg";
import pubchem from "./images/pubchem.webp";
import pubchemJpg from "./images/pubchem.jpg";
import react from "./images/react.webp";
import reactJpg from "./images/react.jpg";
import projectCatalogue from "./images/project-catalogue.png";
import projectCataloguePng from "./images/project-catalogue.png";
import gitlab from "./images/gitlab.webp";
import gitlabPng from "./images/gitlab.png";
import monitoring from "./images/monitoring.webp";
import monitoringPng from "./images/monitoring.png";
import portfolio from "./images/portfolio.webp";
import portfolioPng from "./images/portfolio.png";

import "./index.css";

const CardContentSimple = ({ heading, hidden }) => (
  <Motion
    defaultStyle={{
      // opacity: hidden ? 0: 1
      left: hidden ? -1000 : 0,
    }}
    style={{
      // opacity: spring(!hidden ? 1 : 0, presets.noWobble)
      left: spring(hidden ? -500 : 0, presets.gentle),
    }}
  >
    {(value) => (
      <h2 className="card--simple--heading" style={{ marginLeft: value.left }}>
        {heading}
      </h2>
    )}
  </Motion>
);

const CardContentDetails = ({ hidden, heading, body, link, tags }) => (
  <Motion
    defaultStyle={{
      overlayOpacity: hidden ? 0 : 0.9,
      textPosition: hidden ? -300 : 0,
    }}
    style={{
      overlayOpacity: spring(!hidden ? 0.9 : 0, presets.noWobble),
      textPosition: spring(!hidden ? 0 : -300, presets.gentle),
    }}
  >
    {(value) => (
      <>
        <div
          className="card--overlay"
          style={{ opacity: value.overlayOpacity }}
        >
          &nbsp;
        </div>
        <div
          className="card--details--text"
          style={{ top: value.textPosition }}
        >
          <h2 className="card--details--heading">{heading}</h2>
          <ul className="card--details--tags">
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          <p className="card--details--body">{body}</p>
        </div>
        {link ? (
          <Button
            target="_blank"
            label="Learn More"
            className="card--details--link"
            href={link}
            primary
            style={{ bottom: value.textPosition }}
          />
        ) : (
          <></>
        )}
      </>
    )}
  </Motion>
);

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const getWidth = () => {
    switch (props.size) {
      case "xxsmall":
        return "100%";
      case "xsmall":
        return "100%";
      case "small":
        return "100%";
      case "medium":
        return "50%";
      case "large":
        return "25%";
      default:
        return "25%";
    }
  };

  const getPadding = () => {
    switch (props.size) {
      case "xxsmall":
        return "56.25%";
      case "xsmall":
        return "56.25%";
      case "small":
        return "56.25%";
      case "medium":
        return "75%";
      case "large":
        return "75%";
      default:
        return "75%";
    }
  };

  const getfontSize = () => {
    switch (props.size) {
      case "xxsmall":
        return "0.7em";
      case "xsmall":
        return "0.8em";
      case "small":
        return "0.9em";
      case "medium":
        return "1em";
      case "large":
        return "1em";
      default:
        return "1em";
    }
  };

  return (
    <div
      className="card"
      direction="column"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      style={{
        width: getWidth(),
        fontSize: getfontSize(),
      }}
    >
      <div
        className="card--content"
        style={{
          paddingTop: getPadding(),
        }}
      >
        <Image src={props.imgSrc} fallback={props.fallbackSrc} fit="contain" />
        <CardContentDetails hidden={!showDetails} {...props} />
        <CardContentSimple hidden={showDetails} {...props} />
      </div>
    </div>
  );
};

const Projects = ({ onNextArrowClick, ...props }) => (
  <>
    <SectionHeading heading="Projects" />
    <Box direction="row" fill wrap>
      <Card
        heading="HCA Project Catalogue"
        imgSrc={projectCatalogue}
        fallbackSrc={projectCataloguePng}
        body="A comprehensive list of cellular resolution datasets for the Human Cell Atlas."
        tags={["Angular", "Riot.js", "JavaScript", "TypeScript", "Java"]}
        link="https://www.ebi.ac.uk/humancellatlas/project-catalogue/"
        {...props}
      />
      <Card
        heading="Cluster Monitoring"
        imgSrc={monitoring}
        fallbackSrc={monitoringPng}
        body="High end monitoring solution for EBI allowing the tracking of performance degradation and error logs across the entire range of clusters and environments."
        tags={["Grafana", "Prometheus", "Loki", "Kubernetes", "Helm"]}
        {...props}
      />
      <Card
        heading="Advanced CI/CD"
        imgSrc={gitlab}
        fallbackSrc={gitlabPng}
        body="Continuous integration &amp; deployment for EBI bringing the team into the modern era of application deployment. Created new development flows for the team and gave various presentations and Q&amp;A sessions to aid the transition."
        tags={["GitLab", "Helm", "Kubernetes", "GNU Make", "Bash"]}
        {...props}
      />
      <Card
        heading="tmerge"
        imgSrc={tmerge}
        fallbackSrc={tmergeJpg}
        body="Builds highly accurate transcripts from long-read RNA data. More accurate than competing tools."
        tags={["Bioinformatics", "RNA-Seq", "Python", "R", "Nextflow"]}
        link="https://github.com/jacobwindsor/tmerge"
        {...props}
      />
      <Card
        heading="SQANTI Explorer"
        imgSrc={sqantiExplorer}
        fallbackSrc={sqantiExplorerJpg}
        body="Explore isoform classifications with SQANTI Explorer."
        tags={["Bioinformatics", "R", "Shiny", "Docker", "RNA-Seq", "Plotly"]}
        link="https://github.com/jacobwindsor/SQANTIExplorer"
        {...props}
      />
      <Card
        heading="Portfolio"
        body="This website. Click the link to view the code."
        tags={["React", "JavaScript", "GitHub Actions", "SVG", "CSS", "UI"]}
        link="https://github.com/jacobwindsor/jacobwindsor.github.io"
        imgSrc={portfolio}
        fallbackSrc={portfolioPng}
        {...props}
      />
      <Card
        heading="jReact"
        imgSrc={jReact}
        fallbackSrc={jReactJpg}
        body="Use React style components with jQuery and support down to IE9. Done for abcam."
        tags={["JavaScript", "Functional Programming", "jQuery"]}
        {...props}
      />
      <Card
        heading="Webpackify"
        imgSrc={webpackify}
        fallbackSrc={webpackifyJpg}
        body={"Overhauled abcam.com to use Webpack."}
        tags={["JavaScript", "Webpack"]}
        {...props}
      />
      <Card
        heading="Pathway Presenter"
        imgSrc={pathwayPresenter}
        fallbackSrc={pathwayPresenterJpg}
        body="Create dynamic &amp; beautiful presentations from the pathways on WikiPathways!"
        tags={["Bioinformatics", "JavaScript", "SVG", "React", "Angular"]}
        link="https://github.com/jacobwindsor/pathway-presenter"
        {...props}
      />
      <Card
        heading="MetabMaster"
        imgSrc={metabMaster}
        fallbackSrc={metabMasterJpg}
        body="Create stories for the pathways on WikiPathways! Award winning piece of work."
        tags={["Bioinformatics", "JavaScript", "SVG", "React", "Angular"]}
        link="https://github.com/jacobwindsor/MetabMaster"
        {...props}
      />
      <Card
        heading="PubChem Ranker"
        imgSrc={pubchem}
        fallbackSrc={pubchemJpg}
        body={[
          "Rank compounds by the abundance of information found on PubChem and other databases.",
        ]}
        tags={["Cheminformatics", "Flask", "Python", "Web Scraping"]}
        link="https://github.com/jacobwindsor/pubchem-ranker"
        {...props}
      />
      <Card
        heading="React Aspectral"
        imgSrc={react}
        fallbackSrc={reactJpg}
        body="Simple higher order component that allows for the dynamic resizing of React components to a given aspect ratio."
        tags={["React", "JavaScript"]}
        link="https://github.com/jacobwindsor/react-aspectral"
        {...props}
      />
    </Box>

    <NextSectionArrow sectionName="Experience" onClick={onNextArrowClick} />
  </>
);

export default Projects;
