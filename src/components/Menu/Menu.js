import React, {Component} from 'react';
import classnames from "classnames";
import {
  Link,
  NavLink
} from "react-router-dom";

import style from './Menu.module.scss';

class Menu extends Component {
  state = {
    isOpened: false,
  };

  onClickhandler = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    })
  };

  render() {
    return (
      <div className={classnames(style.menu, {[style.isOpened] : this.state.isOpened})}>
        <button
          onClick={() => this.onClickhandler()}
          className={style.button}
        >
          Open menu
        </button>
        <nav className={style.entries}>
          <ul>
            <li><NavLink to="/" exact>Manche 1</NavLink></li>
            <li><NavLink to="/phase2">Manche 2</NavLink></li>
            <li><NavLink to="/phase2">Manche 3</NavLink></li>
            <li><NavLink to="/phase2">Manche 4</NavLink></li>
            <li><NavLink to="/phase2">Classement</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/store">Magasin</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
