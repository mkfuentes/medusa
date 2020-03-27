import React from "react";
import axios from "axios";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import classes from "../assets/styles/MakeStyles";
import Button from "@material-ui/core/Button";

export default class getWithCode extends Component {
  state = {
    barCode: '',
    product:[]
  };

  onChange(e) {
    this.setState ({
      barCode: e.target.value
    })
  }

  async componentDidMount() {
    const res = await axios.get(`http://localhost:8080/products/`);
    this.setState({ barCode: res.data.data.product });
    console.log(res.data.data.product);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className={classes.form}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Agregar Producto
            </Button>

        </form>
      </div>
    );
  }
}