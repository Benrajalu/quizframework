import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Landing from './phases/Landing/Landing';
import IntroP1 from './phases/Phase1/Intro';
import Intro1 from './phases/Phase1/Intro1';
import Intro2 from './phases/Phase2/Intro2';
import Phase1 from './phases/Phase1/Phase1';
import Phase1Scores from './phases/Phase1/Phase1Scores';
import Phase2 from './phases/Phase2/Phase2';
import Phase3 from './phases/Phase3/Phase3';
import Phase4 from './phases/Phase4/Phase4';
import Rankings from './phases/Rankings/Rankings';
import Shop from './phases/Shop/Shop';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <main className={styles.mainContainer}>
        <Router>
          <Route path='/' exact component={Landing} />
          <Route path='/intro' component={IntroP1} />
          <Route path='/intro1' component={Intro1} />
          <Route path='/phase1' component={Phase1} />
          <Route path='/phase1-scores' component={Phase1Scores} />
          <Route path='/intro2' component={Intro2} />
          <Route path='/phase2' component={Phase2} />
          <Route path='/phase3' component={Phase3} />
          <Route path='/phase4' component={Phase4} />
          <Route path='/rankings' component={Rankings} />
          <Route path='/store' component={Shop} />
          <Menu />
        </Router>
      </main>
    );
  }
}

export default App;
