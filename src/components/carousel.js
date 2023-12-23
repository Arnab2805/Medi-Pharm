import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Carousel interval={1000}>
        <Carousel.Item>
          <img
            src="/images/mediPharm1.jpg"
            alt="Image 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/mediPharm2.jpg"
            alt="Image 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/mediPharm3.jpg"
            alt="Image 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/mediPharm4.jpg"
            alt="Image 4"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel