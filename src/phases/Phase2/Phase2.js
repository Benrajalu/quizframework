import React, { Component, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import TeamBar from '../../components/TeamBar/TeamBar';
import Category from './Category';

import { ITEMS } from '../../data/phase2';
import background from './phase2.jpg';
import coin from '../../layoutStyles/coin.png';

import layout from '../../layoutStyles/layout.module.scss';
import styles from './Phase2.module.scss';

class Phase2 extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.phaseContentsFull}>
          <TeamBar />
          <div className={styles.phase2}>
            <ul className={styles.categories}>
              {ITEMS.map(item => (
                <li key={item.name}>
                  <p>
                    {item.points} <img src={coin} alt='' />
                  </p>
                  <figure>
                    <img src={item.image} alt='' />
                  </figure>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>

            <Route path={`${match.path}/:category`} component={Category} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase2;
