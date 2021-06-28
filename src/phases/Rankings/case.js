import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './results.jpg';

import layout from '../../layoutStyles/layout.module.scss';
import coin from '../../layoutStyles/coin.png';

class Case extends Component {
  render() {
    return (
      <div
        className={layout.phaseBackground}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={layout.finalTitle}>
          <p>Étape 05 -</p>
          <h1>
            Résoudre
            <br />
            l'affaire
          </h1>
          <ul>
            <li>
              Qui ? (20 <img src={coin} alt='' />)
            </li>
            <li>
              Comment ? (20 <img src={coin} alt='' />)
            </li>
            <li>
              Pourquoi ? (20 <img src={coin} alt='' />)
            </li>
          </ul>
        </div>
        <Link to='/rankings'>Résultats</Link>
      </div>
    );
  }
}

export default Case;
