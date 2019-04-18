import React, { Component } from "react";
import PropTypes from "prop-types";

class QCM extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  render() {
    const { question, choices } = this.props;
    return (
      <div>
        <p>{question}</p>
        <ul>
          {choices.map(choice => (
            <li key={choice.replace(" ", "")}>{choice}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QCM;
