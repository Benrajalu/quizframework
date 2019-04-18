import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired
  };
  render() {
    const { image } = this.props;
    return (
      <div>
        <p>Qu'est ce que ceci ?</p>
        <img src={image} alt="" />
      </div>
    );
  }
}

export default Image;
