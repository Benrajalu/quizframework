import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";

import styles from './QuestionModal.module.scss';
import ReactAudioPlayer from "react-audio-player";
import layout from "../../layoutStyles/layout.module.scss";
import ShapeChoice from "../ShapeChoice/ShapeChoice";

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
        <div className={classnames(styles.content, layout.questionSlide)}>
          <button
            onClick={() => this.handleExit()}
            className={styles.closeButton}
          >
            <i className="fas fa-times" />
          </button>
          <p className={styles.points}><strong>{points}</strong> point{points > 1 && 's'}</p>

          <p className={layout.questionText}>{question.text}</p>
          {question.audio && <ReactAudioPlayer src={question.audio} controls />}
          {question.image && <img src={question.image} alt="" />}
          {question.choices && (
            <ul className={layout.choices}>
              {question.choices.map(choice => (
                <li key={choice.replace(" ", "")}>{choice}</li>
              ))}
            </ul>
          )}
          <ShapeChoice question={question.text} className={layout.decorator}/>
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
