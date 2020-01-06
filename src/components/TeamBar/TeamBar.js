import React, { Component } from 'react';
import { sortBy, reverse, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TEAMS } from '../../data/teams';

import styles from './TeamBar.module.scss';
import Item from '../Items/Item';
import coin from '../../layoutStyles/coin.png';

class TeamBar extends Component {
  render() {
    const orderedTeams = reverse(sortBy(TEAMS, ['points']));
    return (
      <div
        className={classnames(styles.teamBar, {
          [styles.full]: this.props.size === 'full'
        })}
      >
        {orderedTeams.map((team, index) => (
          <div className={styles.team} key={team.name}>
            <div className={styles.line}>
              <div className={classnames(styles.number, styles[team.name])}>
                #{index + 1}
              </div>
              <div className={styles.data}>
                <p className={styles.name}>{team.displayName}</p>
                <span>
                  {team.points} <img src={coin} alt='' />
                </span>
              </div>
            </div>
            <div className={styles.life}>
              <div
                className={styles.total}
                style={{ width: `${team.life}%` }}
              ></div>
              <span>{team.life} / 100</span>
            </div>
            {!isEmpty(team.items) && (
              <div className={styles.items}>
                {team.items.map(item => (
                  <Item size='small' type={item} key={item} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

TeamBar.propTypes = {
  size: PropTypes.string
};

TeamBar.defaultProps = {
  size: null
};

export default TeamBar;
