import React from "react";
import axios from "axios";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import classes from "../assets/styles/MakeStyles";
import Button from "@material-ui/core/Button";

const data = []
const dataClean = []

export default class getWithCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barCode: '',
      product: []
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this)
  }

  onChange(e) {
    this.setState ({
      barCode: e.target.value
    })
  }

  componentDidUpdate() {
    console.log(this.state.barCode)
  }

  async onClick() {
    const res = await axios.get(`http://localhost:8080/products/code/${this.state.barCode}`)
    this.setState({ product: res.data.data.code })
    data.push(res.data.data.code);
    this.createTable()
  }

  createTable = () => {
     for (let n = 0; n < data.length; n++) {
       dataClean.push(data[n][0]);
       n += 1;
     }
  }

  render() {
    return (
      <div>
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
          onClick={this.onClick}
        >
          Agregar Producto
        </Button>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Barcode</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Fecha</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {dataClean.map(sales => (
              <tr>
                <th>{sales.barCode}</th>
                <td key={sales._id}>Temporal</td>
                <td>{sales.fechaVenta}</td>
                <td>{sales.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}