import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Landing from './phases/Landing/Landing';
import IntroP1 from './phases/Phase1/Intro';
import Intro1 from './phases/Phase1/Intro1';
import Intro2 from './phases/Phase2/Intro2';
import Intro3 from './phases/Phase3/Intro3';
import Intro4 from './phases/Phase4/Intro4';
import Case from './phases/Rankings/case';

import Phase1 from './phases/Phase1/Phase1';
import Phase2 from './phases/Phase2/Phase2';
import Phase3 from './phases/Phase3/Phase3';
import Phase4 from './phases/Phase4/Phase4';

import Rankings from './phases/Rankings/Results';
import Shop from './phases/Shop/Shop';

import Phase1Scores from './phases/Phase1/Phase1Scores';
import Phase2Scores from './phases/Phase2/Phase2Scores';
import Phase3Scores from './phases/Phase3/Phase3Scores';
import Phase4Scores from './phases/Phase4/Phase4Scores';

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
          <Route path='/phase2-scores' component={Phase2Scores} />
          <Route path='/intro3' component={Intro3} />
          <Route path='/phase3' component={Phase3} />
          <Route path='/phase3-scores' component={Phase3Scores} />
          <Route path='/intro4' component={Intro4} />
          <Route path='/phase4' component={Phase4} />
          <Route path='/phase4-scores' component={Phase4Scores} />
          <Route path='/case' component={Case} />
          <Route path='/rankings' component={Rankings} />
          <Route path='/store' component={Shop} />
          <Menu />
        </Router>
      </main>
    );
  }
}

export default App;
