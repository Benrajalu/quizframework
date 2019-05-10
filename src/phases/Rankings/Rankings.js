import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TeamBar from "../../components/TeamBar/TeamBar";

import styles from './Rankings.module.scss';

class Rankings extends Component {
  render() {
    return (
      <div className={styles.rankings}>
        <h1>Congratulations !</h1>
        <TeamBar
          size="full"
        />
      </div>
    );
  }
}

Rankings.propTypes = {};

export default Rankings;