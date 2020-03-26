import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

require("typeface-roboto");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1
  },
  login: {
    marginRight: theme.spacing(3)
  },
  signup: {
    backgroundColor: "#E2C792",
    "&:hover": {
      backgroundColor: "#E2C792"
    }
  },
  main: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  mainSecond: {
    backgroundColor: "#2A2B37",
    color: "#E2C792"
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(3, 2),
    display: "inline-block"
  }
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <main className={classes.mainSecond}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            width="340"
            image="https://picsum.photos/200/300"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Card
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur repudiandae nam nostrum excepturi voluptatem, exercitationem, et est sint quos odit veritatis numquam quo, odio iste in eius eveniet ipsum cum!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}
