import * as React from "react";
import ProjectSlider from "../helper/ProjectSlider";
import { PROJECT_INFO } from "../helper/Constant";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
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

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + totalProjects) % totalProjects;
    setIndex(newIndex);
  };
  return (
    <div className="project-page">
      <Arrow direction="left" handleClick={() => onArrowClick("left")} />
      <ProjectSlider projectContent={projectContent} />
      <Arrow direction="right" handleClick={() => onArrowClick("right")} />
    </div>
  );
};

export default Project;
