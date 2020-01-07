import React, { useState } from 'react';

import coin from '../../layoutStyles/coin.png';

function ItemQuestion(props) {
  const {
    name, 
    image, 
    points,
    question,
    replied,
  }

  return (
    <>
      <button key={name}>
        <p className={styles.points}>
          +{points} <img src={coin} alt='' />
        </p>
        <figure>
          <img src={image} alt='' />
        </figure>
        <p>{name}</p>
      </button>
    </>
  )
}

ItemQuestion.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  replied: PropTypes.bool.isRequired,
}

export default ItemQuestion;
