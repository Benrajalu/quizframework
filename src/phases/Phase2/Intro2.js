import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './phase2.jpg';

import layout from '../../layoutStyles/layout.module.scss';

class IntroP2 extends Component {
  render() {
    return (
      <div
        className={layout.phaseBackground}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={layout.introTitle}>
          <p>Étape 02 -</p>
          <h1>
            La scène
            <br />
            du crime
          </h1>
        </div>
        <Link to='/phase2'>Next</Link>
      </div>
    );
  }
}

export default IntroP2;
