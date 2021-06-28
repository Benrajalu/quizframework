import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import classnames from 'classnames';
import layout from '../../layoutStyles/layout.module.scss';
import YoutubeAudio from '../YoutubeAudio/YoutubeAudio';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';

function Slides(props) {
  const {
    slide: { question, audio, image, choices, audioTube, videoTube },
    title,
    index
  } = props;

  return (
    <div className={layout.sliderSlide}>
      <div
        className={classnames(layout.questionSlide, {
          [layout.imageSlide]: !!image,
          [layout.audioSlide]: !!audio || !!audioTube,
          [layout.videoSlide]: !!videoTube
        })}
      >
        <h2 className={layout.slideTitle}>
          {title}-<strong>{index}</strong>
        </h2>
        <p className={layout.questionText}>{question}</p>
        {audio && <ReactAudioPlayer src={audio} controls />}
        {audioTube && <YoutubeAudio url={audioTube} />}
        {videoTube && <YoutubeVideo url={videoTube} />}
        {image && <img src={image} alt='' />}
        {choices && (
          <ul className={layout.choices}>
            {choices.map(choice => (
              <li key={choice.replace(' ', '')}>{choice}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Slides.propTypes = {
  slide: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Slides;
