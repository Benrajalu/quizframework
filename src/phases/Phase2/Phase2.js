import React, { Component } from "react";
import { Link } from "react-router-dom";
import TeamBar from "../../components/TeamBar/TeamBar";

class Phase2 extends Component {
  render() {
    return (
      <div>
        <TeamBar />
        <p>Hey phase 2 is cool too</p>
        <Link to="/">Back to phase 1</Link>
      </div>
    );
  }
}

export default Phase2;
