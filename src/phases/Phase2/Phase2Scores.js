import React, { Component } from 'react';
import background from './phase2.jpg';

import layout from '../../layoutStyles/layout.module.scss';
import Scores from '../../components/Scores/Scores';

class ScoresP2 extends Component {
  render() {
    return (
      <>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.centeredContents}>
          <Scores title='La scène du crime' next='/intro3' />
        </div>
      </>
    );
  }
}

export default ScoresP2;
