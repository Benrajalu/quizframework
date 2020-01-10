import React, { Component, Fragment } from 'react';
import TeamBar from '../../components/TeamBar/TeamBar';

import { ITEMS } from '../../data/phase2';
import background from './phase2.jpg';

import layout from '../../layoutStyles/layout.module.scss';
import styles from './Phase2.module.scss';
import ItemQuestion from '../../components/ItemQuestion/ItemQuestion';

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
                <ItemQuestion
                  name={item.name}
                  image={item.image}
                  points={item.points}
                  question={item.question}
                  replied={item.replied}
                  key={item.name}
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
