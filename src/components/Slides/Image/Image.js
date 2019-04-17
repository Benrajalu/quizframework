import React, { Component } from "react";

class Image extends Component {
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
