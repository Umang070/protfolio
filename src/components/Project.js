import * as React from "react";
import ProjectSlider from "../helper/ProjectSlider";
import { PROJECT_INFO } from "../helper/Constant";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { Slide } from "@mui/material";
const Arrow = (props) => {
  const { direction, handleClick } = props;
  const icon =
    direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />;

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {icon}
    </div>
  );
};
const Project = () => {
  const [index, setIndex] = useState(0);
  const projectContent = PROJECT_INFO[index];
  const totalProjects = PROJECT_INFO.length;
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + totalProjects) % totalProjects;
    // setIndex(newIndex);
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };
  return (
    <div className="project-page">
      <Arrow direction="left" handleClick={() => onArrowClick("left")} />
      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <ProjectSlider projectContent={projectContent} />
        </div>
      </Slide>
      <Arrow direction="right" handleClick={() => onArrowClick("right")} />
    </div>
  );
};

export default Project;
