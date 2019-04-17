import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

class Image extends Component {
  render() {
    const { audio } = this.props;
    return (
      <div>
        <p>Quel groupe, quelle chanson ?</p>
        <ReactAudioPlayer src={audio} controls />
      </div>
    );
  }
}

export default Image;
