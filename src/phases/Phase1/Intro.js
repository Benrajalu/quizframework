import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './context.jpg';

import layout from '../../layoutStyles/layout.module.scss';

class IntroP1 extends Component {
  render() {
    return (
      <div
        className={layout.phaseBackground}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={layout.introTitle}>
          <h1>
            Someone
            <br />
            has
            <br />
            died
          </h1>
          <p>Un quiz-enquête</p>
        </div>
        <Link to='/intro1'>Next</Link>
      </div>
    );
  }
}

export default IntroP1;
