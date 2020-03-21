import React from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dashboard from "../components/DashBoard";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Medusa Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  containerbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Edit() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
     <div className={classes.root}>
      <Dashboard />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.containerbox}>
        <Avatar className={classes.avatar}>
          <EditOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Modificar Producto
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="false"
                name="fCodigo de Barras"
                variant="outlined"
                required
                fullWidth
                id="barCode"
                label="Codigo de Barras"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Description"
                label="Descripcion"
                name="Description"
                autoComplete="Description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pricePublic"
                label="Precio Publico"
                name="price public"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="priceStore"
                label="Precio Compra"
                type="number"
                id="priceStore"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="departmento"
                label="Departamento"
                name="departamento"
                autoComplete="departamento"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="succes"
            className={classes.submit}
          >
            Modificar Producto
          </Button>
        </form>
        </Container>
        </main>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
  }
// import React from 'react'

// import FormEdit from '../components/FormEdit'

// //import api from '../lib/api'

// function Edit (props) {
//   // async function onSubmit (post) {
//   //   const payload = await api.newPost(post)
//   //   console.log(payload)

//   //   window.alert(payload.data.post._id)

//   //   props.history.push('/')
//   // }

//   return (
//     <FormEdit
     
//     />
//   )

