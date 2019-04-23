import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './CategoryQuestion.module.scss';

function CategoryQuestion (props) {
  const [isSecret, setSecret] = useState(props.status === "hidden");
  return (
    <div className={styles.categoryQuestion}>
      <button
        onClick={() => setSecret(false)}
        className={classnames(styles.overlay, {[styles.hidden]: isSecret})}
      >
        {props.points}
      </button>
      <div>
        {props.question.text}
        <button
          onClick={() => setSecret(true)}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

CategoryQuestion.propTypes = {
  status: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};

export default CategoryQuestion;