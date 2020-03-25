import React from "react"
import axios from "axios";
import { Component } from "react";


export default class Resumen extends Component {
  state = {
    product: []
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/products");
    console.log(res.data.data.product);
    this.setState({ product: res.data.data.product });
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
          {this.state.product.map(products => (
            <tr>
              <th>{products.barCode}</th>
              <td list-group-item list-group-item0-action key={products._id}>
                {products.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}