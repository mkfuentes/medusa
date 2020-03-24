import React from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dashboard from "../components/DashBoard";
import FormAdd from '../components/FormAdd'
import { makeStyles } from "@material-ui/core/styles";

//import api from '../lib/api'

 /* class Add extends Component{
  async  onSubmit (product) {
    const payload = await api.newProducts(product)
    console.log(payload)
      window.alert(payload.data.product._id)

  }
};
 */
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

export default function Add() {
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
            <AddShoppingCartOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Producto
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
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
              <Grid item xs={12} md={12}>
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
              <Grid item xs={12} md={12}>
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
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="priceStore"
                  label="Precio Compra"
                  type="number"
                  id="priceStore"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="departmento"
                  label="Departamento"
                  name="departamento"
                  autoComplete="departamento"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="succes"
                className={classes.submit}
              >
                Agregar Producto
              </Button>
            </Grid>
          </form>
        </Container>
      </main>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}
