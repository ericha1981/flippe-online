import React, { Component } from "react";
// import PropTypes from "prop-types";

import FlippeCard from "./FlippeCard";

class Home extends Component {
  //   static propTypes = {};

  componentDidMount = () => {
    console.log("[componentDidMount] - Home");
  };

  render() {
    return (
      <section
        className="row justify-content-md-center"
        style={{ backgroundColor: "#272b30" }}
      >
        <FlippeCard />
      </section>
    );
  }
}

export default Home;
