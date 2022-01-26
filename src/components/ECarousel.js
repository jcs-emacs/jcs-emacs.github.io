/**
 * $File: ECarousel.js $
 * $Date: 2022-01-26 15:46:20 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Container } from 'react-bootstrap';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import screenshot_1 from '../etc/screenshot/1.png';
import screenshot_2 from '../etc/screenshot/2.png';
import screenshot_3 from '../etc/screenshot/3.png';
import screenshot_4 from '../etc/screenshot/4.png';
import screenshot_5 from '../etc/screenshot/5.png';

class ECarousel extends React.Component {
  state = {};
  render () {
    return (
      <>
        <div className="p-4">
          <Container className="p-5">
            <Splide options={{
              autoplay: true,
              lazyLoad: 'nearby',
              speed: 2000,
              interval: 2000,
              rewind: true,
            }} renderControls={() => (
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev"
                        style={{ width: '25px', height: '25px' }}>
                  ⮜
                </button>
                <button className="splide__arrow splide__arrow--next"
                        style={{ width: '25px', height: '25px' }}>
                  ⮞
                </button>
              </div>
            )} className="px-5 pb-4">
              <SplideSlide>
                <img src={ screenshot_1 } alt="Slide 1" width="100%"/>
              </SplideSlide>
              <SplideSlide>
                <img src={ screenshot_2 } alt="Slide 2" width="100%"/>
              </SplideSlide>
              <SplideSlide>
                <img src={ screenshot_3 } alt="Slide 3" width="100%"/>
              </SplideSlide>
              <SplideSlide>
                <img src={ screenshot_4 } alt="Slide 4" width="100%"/>
              </SplideSlide>
              <SplideSlide>
                <img src={ screenshot_5 } alt="Slide 5" width="100%"/>
              </SplideSlide>
            </Splide>
          </Container>
        </div>
      </>);
  }
}

export default ECarousel;
