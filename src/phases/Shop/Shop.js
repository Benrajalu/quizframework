import React, { Component, Fragment } from "react";
import classnames from 'classnames';
import TeamBar from "../../components/TeamBar/TeamBar";
import { SHOPDATA } from "../../data/shop";

import layout from "../../layoutStyles/layout.module.scss";
import styles from "./Shop.module.scss";

class Shop extends Component {
  stockIndicator = (number) => {
    let availables = +number;
    const marks = [];
    while (availables > 0) {
      availables = availables - 1;
      marks.push(1);
    }
    return marks;
  };
  render() {
    return (
      <Fragment>
        <div className={layout.phaseTitle}>
          <h1>Le magasin</h1>
          <TeamBar />
        </div>
        <div className={layout.phaseContents}>
          <ul className={styles.shopList}>
            {SHOPDATA.map(item => (
              <li key={item.name}>
                <div className={classnames({[styles.notVisible]: item.available === 0})}>
                  <figure>
                    <img src={item.image} alt=""/>
                    <p><strong>{item.cost}</strong> points</p>
                    <div>{this.stockIndicator(item.available).map((item, index) => <i key={index} />)}</div>
                  </figure>
                  <article>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </article>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </Fragment>
    );
  }
}

export default Shop;
