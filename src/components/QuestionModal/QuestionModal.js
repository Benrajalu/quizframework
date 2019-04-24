import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './QuestionModal.module.scss';
import ReactAudioPlayer from "react-audio-player";

class QuestionModal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleExit);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleExit);
  }

  handleExit = () => {
    const { closeHandler } = this.props;
    closeHandler();
  };
  render() {
    const { question, points } = this.props;
    return (
      <div className={styles.questionModal}>
        <div className={styles.content}>
          <button
            onClick={() => this.handleExit()}
          >
            <i className="fas fa-times" />
          </button>
          <p>Pour {points} point{points > 1 && 's'}</p>
          <p>{question.text}</p>

          {question.audio && <ReactAudioPlayer src={question.audio} controls />}
          {question.image && <img src={question.image} alt="" />}
          {question.choices && (
            <ul>
              {question.choices.map(choice => (
                <li key={choice.replace(" ", "")}>{choice}</li>
              ))}
            </ul>
          )}

        </div>
      </div>
    );
  }
}

QuestionModal.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  points: PropTypes.number.isRequired,
};

export default QuestionModal;