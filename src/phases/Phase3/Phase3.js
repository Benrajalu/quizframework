import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import classnames from "classnames";
import { SLIDES } from "../../data/phase3";

import layout from "../../layoutStyles/layout.module.scss";
import Slides from "../../components/Slides/Slides";
import TeamBar from "../../components/TeamBar/TeamBar";

class Phase3 extends Component {
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
          <TeamBar />
        </div>
        <div className={classnames(layout.phaseContents)}>
          <div className={layout.contents}>
            <Slider {...settings}>
              {SLIDES.map((slide, index) => (
                <Slides slide={slide} index={index + 1} key={slide.question + index} total={SLIDES.length}/>
              ))}
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase3;
