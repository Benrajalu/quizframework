import React, { Component } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

import style from "./Menu.module.scss";

class Menu extends Component {
  state = {
    isOpened: false
  };

  onClickhandler = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    return (
      <div
        className={classnames(style.menu, {
          [style.isOpened]: this.state.isOpened
        })}
      >
        <button onClick={() => this.onClickhandler()} className={style.button}>
          {this.state.isOpened ? (
            <i className="fas fa-angle-down" />
          ) : (
            <i className="fas fa-angle-up" />
          )}
        </button>
        <nav className={style.entries}>
          <ul className={style.mainNav}>
            <li onClick={() => this.onClickhandler()}>
              <NavLink to="/" exact>
                <span>Landing</span>
              </NavLink>
            </li>
            <li onClick={() => this.onClickhandler()}>
              <NavLink to="/phase1" exact>
                <span>Manche 1</span>
              </NavLink>
            </li>
            <li onClick={() => this.onClickhandler()}>
              <NavLink to="/phase2">
                <span>Manche 2</span>
              </NavLink>
            </li>
            <li onClick={() => this.onClickhandler()}>
              <NavLink to="/phase3">
                <span>Manche 3</span>
              </NavLink>
            </li>
            <li onClick={() => this.onClickhandler()}>
              <NavLink to="/phase4">
                <span>Manche 4</span>
              </NavLink>
            </li>
            <li onClick={() => this.onClickhandler()}>
              <NavLink to="/rankings" exact>
                <span>Classement</span>
              </NavLink>
            </li>
          </ul>
          <NavLink to="/store" className={style.shopLink}>
            <span onClick={() => this.onClickhandler()}>
              <i className="fas fa-shopping-cart" /> Magasin
            </span>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Menu;
