import React, { Component } from "react";

// import PropTypes from "prop-types";

import "../index.css";

import questions from "../data/questions.json";

class FlippeCard extends Component {
  state = {
    currId: null,
    questions: questions,
    flipToggle: true
  };

  cardMouseEnterHandler = () => {
    this.setState(
      {
        currId: this.props.id
      },
      () => {}
    );
  };

  componentDidMount = () => {
    console.log("[componentDidMount] - FlippeCard");
  };

  render() {
    const rndNum = Math.floor(Math.random() * questions.length + 0);
    const qTxt = questions[rndNum];

    return (
      <div className="col-md-6" onMouseEnter={this.cardMouseEnterHandler}>
        <div className="card">
          <div className="card__side card__side--front" />
          <div className="card__side card__side--back">
            <div>{qTxt}</div>
          </div>
        </div>
      </div>
    );
  }
}

// FlippeCard.propTypes = {};

export default FlippeCard;
