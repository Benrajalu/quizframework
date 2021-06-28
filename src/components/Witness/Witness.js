import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Slider from 'react-slick';
import Timer from 'react-compound-timer';

import Slides from '../../components/Slides/Slides';

import styles from './Witness.module.scss';

function Witness(props) {
  const { image, name, list, replied, questions } = props;
  const [isOpen, toggleOpen] = useState(false);

  const open = () => {
    toggleOpen(true);
  };

  const close = () => {
    toggleOpen(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <button
        className={classnames(styles.witness, { [styles.isEmpty]: replied })}
        onClick={open}
      >
        <img src={image} alt='' />
        <article>
          <div>
            <h3>{name}</h3>
            <ul>
              {list.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </article>
      </button>
      {isOpen && (
        <div className={styles.modal}>
          <button onClick={close}>Close</button>
          <div className={styles.slider}>
            <div className={styles.timer}>
              <Timer initialTime={60000} direction='backward' lastUnit='s'>
                {() => (
                  <React.Fragment>
                    <Timer.Seconds />
                  </React.Fragment>
                )}
              </Timer>
            </div>
            <Slider {...settings}>
              {questions.map((slide, index) => (
                <Slides
                  slide={slide}
                  key={slide.question + index}
                  title={name}
                  index={index + 1}
                />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

Witness.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  replied: PropTypes.bool.isRequired
};

export default Witness;
