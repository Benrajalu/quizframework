import React, { Component } from "react";

class QCM extends Component {
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
