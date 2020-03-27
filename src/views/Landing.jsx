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
import Cards from "../components/Cards";
import { flexbox } from "@material-ui/system";
import { Link } from "react-router-dom";
import Image from "../assets/img/checkout.jpg";
import Image1 from "../assets/img/card1.jpg";
import Image2 from "../assets/img/card2.jpg";
import Image3 from "../assets/img/card3.jpg";
import Grid from "@material-ui/core/Grid";

require("typeface-roboto");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    color: "#E2C792",
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
    background: "#7cd3c3",
    backgroundImage: `url(${Image})`,
    [theme.breakpoints.down("sm")]: {
      background: "#2A2B37",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      align: "center"
    },
    height: 600,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(3, 2),
    display: "inline-block",
  },
  mainSecond: {
    backgroundColor: "#2A2B37",
    color: "#E2C792",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block"
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  appbar: {
    display: "flex"
  },
  typograph: {
    color: "white",
    padding: theme.spacing(4, 4),
    [theme.breakpoints.down("sm")]: {
      alignItems: "center"
    }
  }
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolut"
        style={{ backgroundColor: "#2A2B37" }}
        className={classes.appbar}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Medusa
          </Typography>
          <Link to="/login">
            <Typography className={classes.login}>Iniciar sesion</Typography>
          </Link>
          <Button
            borderRadius={16}
            variant="contained"
            color="primary"
            className={classes.signup}
          >
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Typography
          fontWeight="bold"
          variant="h3"
          className={classes.typograph}
        >
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            Bienvenido al nuevo
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            administrador de tu negocio
          </Grid>
        </Typography>
      </main>
      <main className={classes.mainSecond}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              width="340"
              image={Image1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Card
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur repudiandae nam nostrum excepturi voluptatem,
                exercitationem, et est sint quos odit veritatis numquam quo,
                odio iste in eius eveniet ipsum cum!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/*Separacion de card*/}
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              width="340"
              image={Image2}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Card
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur repudiandae nam nostrum excepturi voluptatem,
                exercitationem, et est sint quos odit veritatis numquam quo,
                odio iste in eius eveniet ipsum cum!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/*Separacion de card*/}
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              width="340"
              image={Image3}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Card
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur repudiandae nam nostrum excepturi voluptatem,
                exercitationem, et est sint quos odit veritatis numquam quo,
                odio iste in eius eveniet ipsum cum!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </main>
    </div>
  );
}
