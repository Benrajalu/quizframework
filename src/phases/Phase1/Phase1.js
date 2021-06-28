import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';
import background from './phase1.jpg';
import { SLIDES } from '../../data/phase1';

import layout from '../../layoutStyles/layout.module.scss';
import Slides from '../../components/Slides/Slides';

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

    const position = ((this.state.activeSlide + 1) * 100) / SLIDES.length;

    return (
      <Fragment>
        <div
          className={layout.phaseBackgroundActive}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={classnames(layout.phaseContents)}>
          <div className={layout.contents}>
            <Slider {...settings}>
              {SLIDES.map((slide, index) => (
                <Slides
                  slide={slide}
                  key={slide.question + index}
                  title='Question'
                  index={index + 1}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className={layout.slidePosition}>
          <div
            className={layout.indicator}
            style={{
              left: `${position}%`
            }}
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.00003 17.2947L6.43053e-05 1.70627L6.03079 2.44858L9.00001 7.64471L11.9692 2.44858L18 1.70628L9.00003 17.2947Z'
                fill='white'
              />
              <path
                d='M8.99993 6.90234L5.1428 0.2216L12.8571 0.221601L8.99993 6.90234Z'
                fill='#DFDFDF'
                fillOpacity='0.85'
              />
            </svg>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Phase1;
