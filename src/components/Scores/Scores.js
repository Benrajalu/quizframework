import React from 'react';
import { sortBy, reverse } from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { TEAMS } from '../../data/teams';
import styles from './Scores.module.scss';
import coin from '../../layoutStyles/coin.png';
import star from './sherif.png';

function Scores(props) {
  const { title, next, finish, noClue } = props;

  const orderedTeams = reverse(sortBy(TEAMS, ['points']));

  return (
    <div className={styles.scores}>
      <h1 className={styles.title}>
        {title}{' '}
        <span>
          Mission accomplie | Scores {!finish && !noClue && '| indices'}
        </span>
      </h1>
      <ul
        className={classnames(styles.table, {
          [styles.finish]: finish
        })}
      >
        {orderedTeams.map((team, index) => (
          <li
            key={team.name}
            className={classnames(styles.line, {
              [styles.first]: index === 0
            })}
          >
            {index === 0 && <img src={star} alt='' />}
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
      {!finish && (
        <ul className={styles.links}>
          <li>
            <Link to='/store'>Shop</Link>
          </li>
          <li>
            <Link to={next}>Next</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

Scores.defaultProps = {
  finish: false,
  noClue: false
};

Scores.propTypes = {
  title: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  finish: PropTypes.bool,
  noClue: PropTypes.bool
};

export default Scores;
