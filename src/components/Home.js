import React, { Component } from "react";
// import PropTypes from "prop-types";

class Home extends Component {
  //   static propTypes = {};

  componentDidMount = () => {
    console.log("[componentDidMount] - Home");
  };

  render() {
    return (
      <section
        className="row justify-content-md-center"
        style={{ position: "relative" }}
      />
    );
  }
}

export default Home;
