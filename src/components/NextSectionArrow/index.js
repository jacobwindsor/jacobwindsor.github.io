import React from "react";
import { Anchor } from "grommet";
import { Down } from "grommet-icons";

const NextSectionArrow = ({ sectionName, onClick }) => (
    <Anchor 
            icon={<Down size="large" />}
            color="white"
            size="xlarge"
            reverse
            className="experience-arrow"
            onClick={onClick}
        />
)

export default NextSectionArrow