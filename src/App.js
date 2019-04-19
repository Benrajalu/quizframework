import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Phase1 from "./phases/Phase1/Phase1";
import Phase2 from "./phases/Phase2/Phase2";
import Shop from "./phases/Shop/Shop";

import styles from "./App.module.scss";

import shape6 from "./media/shape6.svg";
import shape5 from "./media/shape5.svg";
import shape4 from "./media/shape4.svg";
import shape3 from "./media/shape3.svg";
import shape2 from "./media/shape2.svg";
import shape1 from "./media/shape1.svg";
import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    return (
      <main className={styles.mainContainer}>
        <Router>
          <Route path="/" exact component={Phase1} />
          <Route path="/phase2" component={Phase2} />
          <Route path="/shop" component={Shop} />
          <Menu />
        </Router>

        <div className={styles.scene}>
          <img src={shape1} alt="" className={styles.image1} />
          <img src={shape2} alt="" className={styles.image2} />
          <img src={shape3} alt="" className={styles.image3} />
          <img src={shape4} alt="" className={styles.image4} />
          <img src={shape5} alt="" className={styles.image5} />
          <img src={shape6} alt="" className={styles.image6} />
        </div>
      </main>
    );
  }
}

export default App;
