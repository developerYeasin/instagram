import React from "react";
import styled from "styled-components";

const StorySlider = () => {
  return (
    <Slide>
      <SliderImg>
        <div>
          <img src="./img/user-story.jpg" alt="" />
        </div>
      </SliderImg>
      <span>sarker.arohi</span>
    </Slide>
  );
};

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 8px;
  span {
    font-size: 12px;
    margin-top: 2px;
    color: #403d3d;
  }
`;

const SliderImg = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
 
  padding: 2px;
  box-sizing: border-box;
  background: linear-gradient(45deg, #fd923b, #ff0098 100px);
  div {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #fff;
    padding: 2px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

export default StorySlider;
