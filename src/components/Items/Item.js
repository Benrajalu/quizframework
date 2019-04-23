import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import sword from "../../media/store/sword.jpg";
import shield from "../../media/store/shield.jpg";
import poison from "../../media/store/poison.jpg";
import letter from "../../media/store/letter.jpg";
import crystal from "../../media/store/crystal.jpg";
import bow from "../../media/store/bow.jpg";

import styles from "./Item.module.scss";

class Item extends Component {
  render() {
    const { size, type } = this.props;
    const images = {
      sword: sword,
      shield: shield,
      poison: poison,
      letter: letter,
      crystal: crystal,
      bow: bow
    };

    return (
      <figure className={classnames(styles.item, styles[size])}>
        <img src={images[type]} alt="" />
      </figure>
    );
  }
}

Item.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Item;
