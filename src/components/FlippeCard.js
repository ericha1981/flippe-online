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
      <div
        className="card"
        onMouseEnter={this.cardMouseEnterHandler}
        onClick=""
      >
        <div className="card__side card__side--front" />
        <div className="card__side card__side--back">
          <div className="row card__text">
            <div className="col text-center">{qTxt}</div>
          </div>
        </div>
      </div>
    );
  }
}

// FlippeCard.propTypes = {};

export default FlippeCard;
