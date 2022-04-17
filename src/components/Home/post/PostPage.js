import React from "react";
import styled from "styled-components";
import MoreOption from "../Navicons/MoreOption";
import Options from "./Options";
import PostSlider from "./PostSlider";

const PostPage = () => {
  return (
    <Post>
      <Header>
        <Userpart>
          <PostImg>
            <div>
              <img src="./img/user-story.jpg" alt="" />
            </div>
          </PostImg>
          <span>veve_zulfikar</span>
        </Userpart>
        <MoreOption />
      </Header>
      <PostSlider />
      <Options />

      <WhoLiked>
        <span>6546 Likes</span>
      </WhoLiked>
    </Post>
  );
};

const Post = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
`;

const Userpart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 14px;
    color: #111;
    margin-left: 10px;
  }
`;

const PostImg = styled.div`
  width: 45px;
  height: 45px;
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

const WhoLiked = styled.div`
  width: 100%;
  padding: 0 15px;
  span {
    font-size: 14px;
    color: #444;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default PostPage;
