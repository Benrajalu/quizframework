import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import classnames from "classnames";
import { SLIDES } from "../../data/phase1";

import { pickAslide } from "../../components/Slides/SlidePicker/SlidePicker";

import layout from "../../layoutStyles/layout.module.scss";

class Phase1 extends Component {
  state = {
    activeSlide: 0
  };
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => this.setState({ activeSlide: current })
    };

    const slides = pickAslide(SLIDES);
    return (
      <Fragment>
        <div className={layout.phaseTitle}>
          <h1>Manche 1</h1>
          <p>
            Question <strong>{this.state.activeSlide + 1}</strong>/
            {slides.length}
          </p>
        </div>
        <div className={classnames(layout.phaseContents)}>
          <div className={layout.contents}>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div className={layout.sliderSlide} key={index}>
                  {slide}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase1;
