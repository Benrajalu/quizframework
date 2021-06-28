import React, { Component } from 'react';
import background from './phase1.jpg';

import layout from '../../layoutStyles/layout.module.scss';
import Scores from '../../components/Scores/Scores';

class IntroP1 extends Component {
  render() {
    return (
      <>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.centeredContents}>
          <Scores title='Course-poursuite' next='/intro2' noClue />
        </div>
      </>
    );
  }
}

export default IntroP1;
