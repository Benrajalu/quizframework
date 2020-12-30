import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./phases/Landing/Landing";
import Phase1 from "./phases/Phase1/Phase1";
import Phase2 from "./phases/Phase2/Phase2";
import Phase3 from "./phases/Phase3/Phase3";
import Phase4 from "./phases/Phase4/Phase4";
import Rankings from "./phases/Rankings/Rankings";
import Shop from "./phases/Shop/Shop";

import styles from "./App.module.scss";

import shape6 from "./media/shape6.svg";
import shape5 from "./media/shape5.svg";
import shape4 from "./media/shape4.svg";
import shape3 from "./media/shape3.svg";
import shape2 from "./media/shape2.svg";
import shape1 from "./media/shape1.svg";

import gift from './media/gift.svg';
import gift2 from './media/gift2.svg';
import santa from './media/santa.svg';
import sock from './media/sock.svg';

import Menu from "./components/Menu/Menu";


class App extends Component {
  render() {
    return (
      <main className={styles.mainContainer}>
        <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/phase1" component={Phase1} />
          <Route path="/phase2" component={Phase2} />
          <Route path="/phase3" component={Phase3} />
          <Route path="/phase4" component={Phase4} />
          <Route path="/rankings" component={Rankings} />
          <Route path="/store" component={Shop} />
          <Menu />
        </Router>

        <div className={styles.scene}>
          <img src={gift} alt="" className={styles.image1} />
          <img src={sock} alt="" className={styles.image2} />
          <img src={gift2} alt="" className={styles.image3} />
          <img src={santa} alt="" className={styles.image5} />
          <img src={sock} alt="" className={styles.image6} />
        </div>
      </main>
    );
  }
}

export default App;
