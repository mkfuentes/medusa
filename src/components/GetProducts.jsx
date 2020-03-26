import React from "react"
import axios from "axios";
import { Component } from "react";


export default class Resumen extends Component {
  state = {
    sales: [],
    products: []
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/sales")
    const pro = await axios.get("http://localhost:8080/products")
    console.log(res.data.data.sale)
    console.log(pro.data.data.product);
    this.setState({ sales: res.data.data.sale })
    this.setState({ products: pro.data.data.product})
  }

  render() {
    return (
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
          {this.state.sales.map(sales => (
            <tr>
              <th>{sales.barCode}</th>
              <td key={sales._id}>
                Temporal
              </td>
              <td>{sales.fechaVenta}</td>
              <td>{sales.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}