import * as React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import projectImg from "../assets/images/projects.jpg";
// import youth from "../assets/images/youth-community.jpg"
import { useState } from "react";
const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "10px",
    boxShadow: "0px 0px 5px white",
  },
}));
const ProjectSlider = (props) => {
  const { title, desc, imgSrc } = props.projectContent;
  const [shadow, setShadow] = useState(1);
  const classes = useStyles();
  const onMouseOver = () => {
    setShadow(3);
  };
  const onMouseOut = () => {
    setShadow(1);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={classes.card}
      // onMouseOver={onMouseOver}
      // onMouseOut={onMouseOut}
      // zDepth={shadow}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc ? imgSrc : projectImg}
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectSlider;
