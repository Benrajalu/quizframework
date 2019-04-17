import React, { Component } from "react";
import { sortBy, reverse } from "lodash";
import { TEAMS } from "../../data/teams";

class TeamBar extends Component {
  render() {
    const orderedTeams = reverse(sortBy(TEAMS, ["points"]));
    return (
      <div>
        {orderedTeams.map(team => (
          <div key={team.name}>
            <p>
              {team.name} ({team.points})
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default TeamBar;
