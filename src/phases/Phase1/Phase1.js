import React, { Component } from "react";
import Slider from "react-slick";
import { SLIDES } from "../../data/phase1";

import { pickAslide } from "../../components/Slides/SlidePicker/SlidePicker";

class Phase1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const slides = pickAslide(SLIDES);
    return (
      <div>
        <h1>Welcome to round 1</h1>
        <Slider {...settings}>{slides.map(slide => slide)}</Slider>
      </div>
    );
  }
}

export default Phase1;
