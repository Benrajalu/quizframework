import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamBar from "../../components/TeamBar/TeamBar";
import { SHOPDATA } from "../../data/shop";

class Shop extends Component {
  render() {
    return (
      <div>
        <nav>
          <TeamBar />
          <Link to="/">Manche 1</Link>
          <Link to="/phase2">Manche 2</Link>
        </nav>

        <div>
          <h1>Le magasin</h1>
          <ul>
            {SHOPDATA.map(item => (
              <li key={item.name}>
                <div className={item.available > 0 ? 'visible' : 'notVisible'}>
                  <h3>{item.name}</h3>
                  <figure>
                    <img src={item.image} alt=""/>
                    <p>{item.cost}</p>
                  </figure>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default Shop;
