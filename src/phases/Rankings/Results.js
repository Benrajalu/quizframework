import React, { Component } from 'react';
import background from './results.jpg';

import layout from '../../layoutStyles/layout.module.scss';
import Scores from '../../components/Scores/Scores';

class Results extends Component {
  render() {
    return (
      <>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.centeredContents}>
          <Scores title='Bravo tout le monde' next='/intro4' finish />
        </div>
      </>
    );
  }
}

export default Results;
