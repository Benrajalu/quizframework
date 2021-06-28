import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import cafe from '../../media/store/cafe.png';
import donuts from '../../media/store/donuts.png';
import munitions from '../../media/store/munitions.png';

import styles from './Item.module.scss';

class Item extends Component {
  render() {
    const { size, type } = this.props;
    const images = {
      cafe: cafe,
      donuts: donuts,
      munitions: munitions
    };

    return (
      <figure className={classnames(styles.item, styles[size])}>
        <img src={images[type]} alt='' />
      </figure>
    );
  }
}

Item.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Item;
