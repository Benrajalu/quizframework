import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import classnames from 'classnames';
import Duration from './Duration';

import styles from './YoutubeAudio.module.scss';

function YoutubeAudio(props) {
  const { url } = props;
  const [isPlaying, togglePlay] = useState(false);
  const [currentURL, setURL] = useState('');
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleProgress = state => {
    setPlayed(state.played);
  };

  const handleDuration = duration => {
    setDuration(duration);
  };

  const onButtonClick = () => {
    currentURL === '' && setURL(url);
    togglePlay(!isPlaying);
  };

  return (
    <>
      <ReactPlayer
        url={currentURL}
        playing={isPlaying}
        controls={false}
        loop={false}
        light={false}
        className={styles.hiddenIframe}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className={styles.player}>
        <button
          onClick={onButtonClick}
          className={classnames({ [styles.hideButton]: isPlaying })}
        >
          {isPlaying && <i className='fas fa-pause' />}
          {!isPlaying && <i className='fas fa-play' />}
        </button>
        <progress max={1} value={played} />
        <Duration seconds={duration * played} />
      </div>
    </>
  );
}

export default YoutubeAudio;
