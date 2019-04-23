import React, { Component } from "react";

import style from "./Category.module.scss";

class Category extends Component {
  render() {
    const { match } = this.props;
    console.log(this.props);
    return <div className={style.category}>{match.params.category}</div>;
  }
}

export default Category;
