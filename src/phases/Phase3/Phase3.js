import React, {Component, Fragment} from "react";
import { NavLink, Route } from "react-router-dom";
import { isEmpty } from 'lodash';
import TeamBar from "../../components/TeamBar/TeamBar";
import Category from "../Phase2/Category";

import { CATEGORIES } from "../../data/phase2";

import layout from "../../layoutStyles/layout.module.scss";
import styles from "../Phase2/Phase2.module.scss";

class Phase3 extends Component {
  render() {
    const { match } = this.props;
    const availableCategories = CATEGORIES.filter(category => !isEmpty(category.questions.filter(question => question.replied === false)));
    return (
      <Fragment>
        <div className={layout.phaseTitle}>
          <h1>Manche 3</h1>
          <TeamBar />
        </div>
        <div className={layout.phaseContents}>
          <div className={styles.phase2}>
            <ul className={styles.categories}>
              {availableCategories.map(category => (
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
      </Fragment>
    );
  }
}

export default Phase3;
