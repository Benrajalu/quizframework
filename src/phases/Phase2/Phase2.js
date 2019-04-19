import React, { Component } from "react";
import {
  Link,
  NavLink,
  Route
} from "react-router-dom";
import TeamBar from "../../components/TeamBar/TeamBar";
import Category from "./Category";

import { CATEGORIES } from "../../data/phase2";

class Phase2 extends Component {
  render() {
    const {
      match,
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <nav>
          <TeamBar />
          <Link to="/shop">Magasin</Link>
        </nav>

        <ul>
          {CATEGORIES.map(category => <li key={category.url}><NavLink to={`${match.url}/${category.url}`}>{category.name}</NavLink></li>)}
        </ul>

        <div>
          <Route path={`${match.path}/:category`} component={Category} />
        </div>
      </div>
    );
  }
}

export default Phase2;
