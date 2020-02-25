import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import classnames from 'classnames';

import styles from './YoutubeVideo.module.scss';

function YoutubeVideo(props) {
  const { url } = props;
  const [isPlaying, togglePlay] = useState(false);
  const [currentURL, setURL] = useState('');

  const onButtonClick = () => {
    currentURL === '' && setURL(url);
    togglePlay(!isPlaying);
  };

  return (
    <div className={styles.videoWrapper}>
      <ReactPlayer
        url={currentURL}
        playing={isPlaying}
        controls={true}
        loop={false}
        light={false}
        className={styles.player}
        width='100%'
        height='100%'
      />
      <div className={styles.controls}>
        <button
          onClick={onButtonClick}
          className={classnames({ [styles.hideButton]: isPlaying })}
        >
          {isPlaying && <i className='fas fa-pause' />}
          {!isPlaying && <i className='fas fa-play' />}
        </button>
      </div>
    </div>
  );
}

export default YoutubeVideo;
