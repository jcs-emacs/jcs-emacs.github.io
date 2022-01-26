/**
 * $File: ECarousel.js $
 * $Date: 2022-01-26 15:46:20 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

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
        <Container className="p-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" alt="Slide 1"
                   src= { screenshot_1 } />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" alt="Slide 2"
                   src= { screenshot_2 } />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" alt="Slide 3"
                   src= { screenshot_3 } />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" alt="Slide 4"
                   src= { screenshot_4 } />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" alt="Slide 5"
                   src= { screenshot_5 } />
            </Carousel.Item>
          </Carousel>
        </Container>
      </>);
  }
}

export default ECarousel;
