import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    window.sessionStorage.removeItem("Authorization");

    this.props.history.replace("./login");
  }
  render() {
    return <div />;
  }
}

export default Logout;
