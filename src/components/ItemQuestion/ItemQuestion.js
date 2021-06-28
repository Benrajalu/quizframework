import React, { useState } from 'react';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';

import styles from './ItemQuestion.module.scss';
import coin from '../../layoutStyles/coin.png';

function ItemQuestion(props) {
  const { name, image, points, question, replied } = props;

  const [isOpen, toggleOpen] = useState(false);

  const handleClick = () => toggleOpen(true);
  const handleClose = () => toggleOpen(false);

  return (
    <>
      <button
        key={name}
        className={classnames(styles.item, {
          [styles.disabled]: replied
        })}
        disabled={replied}
        onClick={handleClick}
      >
        <p className={styles.points}>
          +{points} <img src={coin} alt='' />
        </p>
        <figure>
          <img src={image} alt='' />
        </figure>
        <p>{name}</p>
      </button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.contents}>
            <div className={styles.header}>
              <h3>
                Objet-<strong>{name}</strong>
              </h3>
              <button onClick={handleClose}>Retour</button>
            </div>

            <div className={styles.questionText}>{question}</div>

            <p className={styles.modalPoints}>
              +{points} <img src={coin} alt='' />
            </p>
          </div>
        </div>
      )}
    </>
  );
}

ItemQuestion.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  replied: PropTypes.bool.isRequired
};

export default ItemQuestion;
