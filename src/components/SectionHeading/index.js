import React from "react";
import { Motion, spring, presets } from "react-motion";
import { useInView } from "react-intersection-observer";

const headingStyle = (uppercase, fontSize) => ({
  textTransform: uppercase ? "uppercase" : "capitalize",
  paddingBottom: 0,
  marginBottom: 0,
  fontSize: fontSize,
  textAlign: "center",
});

const underlineStyle = (thickness) => ({
  borderBottom: `${thickness} solid #D93425`,
  display: "inline-block",
  margin: 0,
  padding: 0,
  height: ".2rem",
});

export default ({
  heading,
  thickness = ".2rem",
  uppercase = true,
  fontSize = "2rem",
}) => {
  const [ref, inView] = useInView({ threshold: 1 });
  return (
    <span>
      <h1 ref={ref} style={headingStyle(uppercase, fontSize)}>
        {heading}
      </h1>
      <Motion
        defaultStyle={{ width: 0 }}
        style={{ width: inView ? spring(100, presets.gentle) : 0 }}
      >
        {(value) => (
          <span
            style={{ width: `${value.width}%`, ...underlineStyle(thickness) }}
          >
            &nbsp;
          </span>
        )}
      </Motion>
    </span>
  );
};
