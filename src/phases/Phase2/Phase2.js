import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import TeamBar from "../../components/TeamBar/TeamBar";
import Category from "./Category";

import { CATEGORIES } from "../../data/phase2";

import layout from "../../layoutStyles/layout.module.scss";
import styles from "./Phase2.module.scss";

class Phase2 extends Component {
  render() {
    const { match } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className={layout.phaseTitle}>
          <h1>Manche 2</h1>
          <TeamBar />
        </div>
        <div className={layout.phaseContents}>
          <div className={styles.phase2}>
            <ul className={styles.categories}>
              {CATEGORIES.map(category => (
                <li key={category.url}>
                  <NavLink to={`${match.url}/${category.url}`}>
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Route path={`${match.path}/:category`} component={Category} />
          </div>
        </div>
      </div>
    );
  }
}

export default Phase2;
