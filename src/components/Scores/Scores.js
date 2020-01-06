import React from 'react';
import { sortBy, reverse } from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { TEAMS } from '../../data/teams';
import styles from './Scores.module.scss';
import coin from '../../layoutStyles/coin.png';

function Scores(props) {
  const { title, next } = props;

  const orderedTeams = reverse(sortBy(TEAMS, ['points']));

  return (
    <div className={styles.scores}>
      <h1 className={styles.title}>
        {title} <span>Mission accomplie | Scores | indices</span>
      </h1>
      <ul className={styles.table}>
        {orderedTeams.map((team, index) => (
          <li key={team.name} className={styles.line}>
            <div className={classnames(styles.number, [styles[team.name]])}>
              #{index + 1}
            </div>
            <div className={styles.content}>
              {team.displayName}{' '}
              <span>
                {team.points} <img src={coin} alt='' />
              </span>
            </div>
          </li>
        ))}
      </ul>
      <ul className={styles.links}>
        <li>
          <Link to='/store'>Shop</Link>
        </li>
        <li>
          <Link to={next}>Next</Link>
        </li>
      </ul>
    </div>
  );
}

Scores.propTypes = {
  title: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired
};

export default Scores;
