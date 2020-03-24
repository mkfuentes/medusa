import React from "react";
import axios from "axios";
import { Component } from "react";
import Dashboard from "../components/DashBoard";
import CssBaseline from "@material-ui/core/CssBaseline";

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
      <div className="row">
        <Dashboard />
        <CssBaseline />

        <div className="col-md-4">Productos</div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.product.map(products => (
              <li list-group-item list-group-item0-action key={products._id}>
                {products.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
