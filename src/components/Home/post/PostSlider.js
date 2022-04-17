import React from "react";
import styled from "styled-components";

const PostSlider = () => {
  return (
    <PostImg>
      <img src="./img/post1.jpg" alt="" />
    </PostImg>
  );
};
const PostImg = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
`;

export default PostSlider;
