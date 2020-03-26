import React from "react";
import { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import Typography from "@material-ui/core/Typography";
import classes from "../assets/styles/MakeStyles";
import Container from "@material-ui/core/Container";
import Dashboard from "../components/DashBoard";
import axios from "axios";

export default class Add extends Component {
  constructor (props) {
    super(props)

    this.state = {
      barCode: '',
      description: '',
      pricePublic: '',
      priceStore: '',
      department: '',
      cantidad:''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }

  async onSubmit (event) {

    await axios.post("http://localhost:8080/products", {
        ...this.state
    })
    event.preventDefault()

  }

render() {
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
          <form onSubmit={this.onSubmit.bind(this)} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="false"
                  variant="outlined"
                  required
                  fullWidth
                  name="barCode"
                  label="Codigo de Barras"
                  autoFocus
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Descripcion"
                  name="description"
                  autoComplete="Description"
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Precio Publico"
                  name="pricePublic"
                  type="number"
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="priceStore"
                  label="Precio Compra"
                  type="number"
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Departamento"
                  name="department"
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Cantidad"
                  name="cantidad"
                  autoComplete="Cantidad"
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Agregar Producto
              </Button>
            </Grid>
          </form>
        </Container>
      </main>
    </div>
  )
}
}