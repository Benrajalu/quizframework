import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Landing.module.scss';
import background from './intro.jpg';

function Landing() {
  return (
    <div
      className={styles.landing}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>Are you ready?</h1>
      <Link to='/intro'>Yes</Link>
    </div>
  );
}

export default Landing;
