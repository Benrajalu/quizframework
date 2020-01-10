import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './phase3.png';

import layout from '../../layoutStyles/layout.module.scss';

class IntroP3 extends Component {
  render() {
    return (
      <div
        className={layout.phaseBackground}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={layout.introTitle}>
          <p>Étape 03-</p>
          <h1>
            Interrogation
            <br />
            des suspects
          </h1>
        </div>
        <Link to='/phase3'>Next</Link>
      </div>
    );
  }
}

export default IntroP3;
