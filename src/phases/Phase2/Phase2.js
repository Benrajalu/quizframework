import React, { Component, Fragment } from 'react';
import TeamBar from '../../components/TeamBar/TeamBar';

import { ITEMS } from '../../data/phase2';
import background from './phase2.jpg';
import coin from '../../layoutStyles/coin.png';

import layout from '../../layoutStyles/layout.module.scss';
import styles from './Phase2.module.scss';

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
              {ITEMS.map(item => (
                <button key={item.name}>
                  <p className={styles.points}>
                    +{item.points} <img src={coin} alt='' />
                  </p>
                  <figure>
                    <img src={item.image} alt='' />
                  </figure>
                  <p>{item.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase2;
