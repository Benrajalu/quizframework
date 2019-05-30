import React, { Component } from "react";
import { sortBy, reverse, isEmpty } from "lodash";
import PropTypes from 'prop-types';
import classnames from "classnames";
import { TEAMS } from "../../data/teams";

import styles from "./TeamBar.module.scss";
import Item from "../Items/Item";

class TeamBar extends Component {
  render() {
    const orderedTeams = reverse(sortBy(TEAMS, ["points"]));
    return (
      <div className={classnames(styles.teamBar, {[styles.full] : this.props.size === 'full'})}>
        {orderedTeams.map(team => (
          <div className={styles.team} key={team.name}>
            <div className={styles.presentation}>
              <div className={classnames(styles.badge, styles[team.name])}>
                <p className={styles.points}>{team.points}</p>
              </div>
            </div>
            <div className={styles.data}>
              <p className={styles.name}>{team.displayName}</p>
              {!isEmpty(team.items) && (
                <div className={styles.items}>
                  {team.items.map(item => (
                    <Item size="small" type={item} key={item} />
                  ))}
                </div>
              )}
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
