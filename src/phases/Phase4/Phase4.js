import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import classnames from "classnames";
import { SLIDES } from "../../data/phase1";

import layout from "../../layoutStyles/layout.module.scss";
import Slides from "../../components/Slides/Slides";

class Phase4 extends Component {
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

    return (
      <Fragment>
        <div className={layout.phaseTitle}>
          <h1>Manche 4</h1>
          <p>
            Question <strong>{this.state.activeSlide + 1}</strong>/
            {SLIDES.length}
          </p>
        </div>
        <div className={classnames(layout.phaseContents)}>
          <div className={layout.contents}>
            <Slider {...settings}>
              {SLIDES.map((slide, index) => (
                <Slides slide={slide} key={slide.question + index} />
              ))}
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase4;
