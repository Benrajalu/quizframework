import React, { Component } from "react";

class Regular extends Component {
  render() {
    const { question } = this.props;
    return <div>{question}</div>;
  }
}

export default Regular;
