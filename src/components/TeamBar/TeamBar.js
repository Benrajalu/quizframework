import React, { Component } from "react";
import { sortBy, reverse } from "lodash";
import PropTypes from 'prop-types';
import classnames from "classnames";
import { TEAMS } from "../../data/teams";

import cap from './cap.png';
import crown from './crown.png';

import styles from "./TeamBar.module.scss";

class TeamBar extends Component {
  render() {
    const orderedTeams = reverse(sortBy(TEAMS, ["points"]));
    return (
      <div className={classnames(styles.teamBar, {[styles.full] : this.props.size === 'full'})}>
        {orderedTeams.map((team, index) => (
          <div className={styles.team} key={team.name}>
            <div className={styles.presentation}>
              <div className={classnames(styles.badge, styles[team.name])}>
                <p className={styles.points}>{team.points}</p>
                {index === 0 && <img src={crown} alt="" />}
                {index === orderedTeams.length -1 && <img src={cap} alt="" />}
              </div>
            </div>
            <div className={styles.data}>
              <p className={styles.name}>{team.displayName}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

TeamBar.propTypes = {
  size: PropTypes.string,
};

TeamBar.defaultProps = {
  size: null,
};

export default TeamBar;
