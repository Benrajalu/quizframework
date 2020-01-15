import React, { Component } from 'react';
import background from './phase3.png';

import layout from '../../layoutStyles/layout.module.scss';
import Scores from '../../components/Scores/Scores';

class ScoresP3 extends Component {
  render() {
    return (
      <>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.centeredContents}>
          <Scores title="L'interrogatoire" next='/intro4' />
        </div>
      </>
    );
  }
}

export default ScoresP3;
