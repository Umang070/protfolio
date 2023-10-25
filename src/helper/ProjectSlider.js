import * as React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import projectImg from "../assets/images/projects.jpg";
const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "10px",
    boxShadow: "0px 0px 5px white",
  },
}));
const ProjectSlider = (props) => {
  console.log("PROPESS", props);
  const { title, desc } = props.projectContent;
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={projectImg}
          alt="green iguana"
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
