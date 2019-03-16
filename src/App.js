import React, { Component } from "react";
import FlippeCard from "./components/FlippeCard";

import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col align-self-center text-center">
                <h1>Flippe</h1>
                <p>
                  Get different jokes each time you hover your mouse over the
                  card.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card__wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <FlippeCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
