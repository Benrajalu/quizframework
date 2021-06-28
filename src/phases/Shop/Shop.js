import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import TeamBar from '../../components/TeamBar/TeamBar';
import { SHOPDATA } from '../../data/shop';
import background from './shopBG.jpg';
import coin from '../../layoutStyles/coin.png';

import layout from '../../layoutStyles/layout.module.scss';
import styles from './Shop.module.scss';

class Shop extends Component {
  stockIndicator = number => {
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
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={layout.phaseContentsFull}>
          <TeamBar />
          <ul className={styles.shopList}>
            {SHOPDATA.map(item => (
              <li key={item.name}>
                <div
                  className={classnames({
                    [styles.notVisible]: item.available === 0
                  })}
                >
                  <figure>
                    <img src={item.image} alt='' />
                  </figure>
                  <article>
                    <h2>{item.name}</h2>
                    <ul className={styles.data}>
                      <li>
                        <h3>effet</h3>
                        <p>{item.description}</p>
                      </li>
                      <li>
                        <h3>cout</h3>
                        <p>
                          {item.cost} <img src={coin} alt='' />
                        </p>
                      </li>
                      <li>
                        <h3>stock</h3>
                        <p>
                          {this.stockIndicator(item.available).map(
                            (item, index) => (
                              <i key={index} />
                            )
                          )}
                        </p>
                      </li>
                    </ul>
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
