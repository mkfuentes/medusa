import React from "react";
import { Component } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";  
import classes from "../assets/styles/MakeStyles"
import axios from "axios";

export default class formAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barCode: "",
      description: "",
      pricePublic: "",
      priceStore: "",
      department: "",
      cantidad: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  async onSubmit(event) {
    await axios.post("http://localhost:8080/products", {
      ...this.state
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
