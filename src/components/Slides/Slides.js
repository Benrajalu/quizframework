import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from "react-audio-player";
import layout from "../../layoutStyles/layout.module.scss";
import ShapeChoice from "../ShapeChoice/ShapeChoice";

class Slides extends Component {
  render() {
    const {
      slide: {
        question,
        audio,
        image,
        choices,
      }
    } = this.props;
    return (
      <div className={layout.sliderSlide}>
        <div className={layout.questionSlide}>
          <p className={layout.questionText}>{question}</p>
          {audio && <ReactAudioPlayer src={audio} controls />}
          {image && <img src={image} alt="" />}
          {choices && (
            <ul className={layout.choices}>
              {choices.map(choice => (
                <li key={choice.replace(" ", "")}>{choice}</li>
              ))}
            </ul>
          )}
          <ShapeChoice question={question} className={layout.decorator}/>
        </div>
      </div>
    );
  }
}

Slides.propTypes = {
  slide: PropTypes.object.isRequired,
};


export default Slides;
