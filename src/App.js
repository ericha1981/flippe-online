import React, { Component } from "react";
import Home from "./components/Home";

import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <header className="jumbotron text-center">
            <h1>Flippe</h1>
            <p>
              Get different jokes each time you hover your mouse over the card.
            </p>
          </header>
        </div>
        <div className="container" style={{ backgroundColor: "#fff" }}>
          <div className="header__title text-center" />
          <Home />
        </div>
      </>
    );
  }
}

export default App;
