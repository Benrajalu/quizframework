import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Phase1 from "./phases/Phase1/Phase1";
import Phase2 from "./phases/Phase2/Phase2";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Phase1} />
        <Route path="/phase2" exact component={Phase2} />
      </Router>
    );
  }
}

export default App;
