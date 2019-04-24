import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './CategoryQuestion.module.scss';
import QuestionModal from "../QuestionModal/QuestionModal";

function CategoryQuestion (props) {
  const {
    replied,
    points,
    question,
  } = props;

  const [isSecret, setSecret] = useState(props.status === "hidden");

  return (
    <div className={styles.categoryQuestion}>
      <button
        onClick={() => setSecret(false)}
        className={classnames(
            styles.overlay,
            {[styles.disabled]: replied},
          )
        }
        disabled={replied}
      >
        <span>Cette question vaut...</span>
        <strong>{points} point{points > 1 && 's'}</strong>
      </button>
      {!isSecret &&
        <QuestionModal
          closeHandler={() => setSecret(true)}
          question={question}
          points={points}
        />
      }
    </div>
  );
}

CategoryQuestion.propTypes = {
  status: PropTypes.string.isRequired,
  replied: PropTypes.bool.isRequired,
  points: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
}


export default CategoryQuestion;