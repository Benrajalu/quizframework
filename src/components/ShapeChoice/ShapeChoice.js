import React, {Component} from 'react';
import { reduce } from 'lodash';
import PropTypes from "prop-types";
import classnames from "classnames";

import shape1 from '../../media/shape1.svg';
import shape2 from '../../media/shape2.svg';
import shape3 from '../../media/shape3.svg';
import shape4 from '../../media/shape4.svg';
import shape5 from '../../media/shape5.svg';
import shape6 from '../../media/shape6.svg';

import styles from './ShapeChoice.module.scss';

class ShapeChoice extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  static defaultProps = {
    className: null,
  };
  render() {
    const { question, className } = this.props;
    const shapes = [
      shape1,
      shape2,
      shape3,
      shape4,
      shape5,
      shape6,
    ];
    const getSeedFromString = string => (reduce(string, (sumOfChars, char) => sumOfChars + char.charCodeAt(0), 0) % 6);
    console.log(getSeedFromString(question));
    const shapeToUse = shapes[getSeedFromString(question)];
    const styleClass = styles['shape' + getSeedFromString(question)];
    return (
      <img src={shapeToUse} alt="" className={classnames(styleClass, className)}/>
    );
  }
}

export default ShapeChoice;