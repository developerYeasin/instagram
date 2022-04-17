import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const LoginSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ReactSlider>
      <Slider {...settings}>
        <div>
          <img src="./img/slider-item1.png" alt="" />
        </div>
        <div>
          <img src="./img/slider-item2.png" alt="" />
        </div>
        <div>
          <img src="./img/slider-item3.png" alt="" />
        </div>
        <div>
          <img src="./img/slider-item4.png" alt="" />
        </div>
      </Slider>
    </ReactSlider>
  );
};

const ReactSlider = styled.div`
  width: 250px;
  position: absolute;
  top: 55px;
  left: 396px;
  overflow: hidden;
  border-radius: 26px;
`;

export default LoginSlider;
