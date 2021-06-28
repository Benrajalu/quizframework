import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './phase1.jpg';

import layout from '../../layoutStyles/layout.module.scss';

class IntroP1 extends Component {
  render() {
    return (
      <div
        className={layout.phaseBackground}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={layout.introTitle}>
          <p>Étape 01 -</p>
          <h1>
            Course-
            <br />
            poursuite
          </h1>
        </div>
        <Link to='/phase1'>Next</Link>
      </div>
    );
  }
}

export default IntroP1;
