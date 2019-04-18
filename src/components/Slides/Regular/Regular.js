import React, { Component } from "react";
import PropTypes from "prop-types";

class Regular extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired
  };
  render() {
    const { question } = this.props;
    return <div>{question}</div>;
  }
}

export default Regular;
