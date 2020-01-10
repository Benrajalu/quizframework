import React, { Component, Fragment } from 'react';
import TeamBar from '../../components/TeamBar/TeamBar';

import { SUSPECTS } from '../../data/phase3';
import background from './phase3.png';

import layout from '../../layoutStyles/layout.module.scss';
import styles from './Phase3.module.scss';
import Witness from '../../components/Witness/Witness';

class Phase2 extends Component {
  render() {
    return (
      <Fragment>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.phaseContentsFull}>
          <TeamBar />
          <div className={styles.phase2}>
            <div className={styles.categories}>
              {SUSPECTS.map(item => (
                <Witness
                  name={item.name}
                  image={item.image}
                  list={item.list}
                  key={item.name}
                  replied={item.replied}
                  questions={item.questions}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase2;
