import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactAudioPlayer from "react-audio-player";

class Audio extends Component {
  static propTypes = {
    audio: PropTypes.string.isRequired
  };
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

export default Audio;
