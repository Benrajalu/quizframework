import React, { Component } from 'react';
import background from './phase4.jpg';

import layout from '../../layoutStyles/layout.module.scss';
import Scores from '../../components/Scores/Scores';

class ScoresP4 extends Component {
  render() {
    return (
      <>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.centeredContents}>
          <Scores title='Le dernier élement' next='/case' />
        </div>
      </>
    );
  }
}

export default ScoresP4;
