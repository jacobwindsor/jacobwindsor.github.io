import React, { useState } from "react";
import { Anchor, Box } from "grommet";
import { Down } from "grommet-icons";
import { Motion, presets, spring } from "react-motion";
import "./index.css"

const Heading = ({ hidden, sectionName }) => 
    <Motion
        defaultStyle={{marginTop: hidden ? -1000 : 0}}
        style={{marginTop: spring(hidden? -1000 : 0, presets.stiff)}}
    >
        {
            value => <h2 className="next-section--heading" style={{marginTop: value.marginTop + "px"}}>{sectionName}</h2>
        }
    </Motion> 

const NextSectionArrow = ({ sectionName, onClick }) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <Box 
            alignSelf="center"
            direction="column"
            align="center"
            className="next-section"
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}              
        >
            <Heading hidden={!showDetails} sectionName={sectionName} />
            <Anchor 
                icon={<Down size="large" />}
                color="white"
                size="xlarge"
                reverse
                className="next-section--arrow"
                onClick={onClick}
            />
        </Box>
    )
}

export default NextSectionArrow