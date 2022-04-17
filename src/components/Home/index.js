import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import PostPage from "./post/PostPage";
import StorySlider from "./StorySlider";

const index = () => {
  return (
    <Home>
      <Navbar />
      <MainContainer>
        <CardSection>
          <Card>
            <StorySlider />
          </Card>
          <Card>
            <PostPage />
          </Card>
        </CardSection>
        <UserSection>
          <LoginUser>
            <Link to="/">
              <img src="./img/user-img.jpg" alt="" />
            </Link>
            <div>
              <h4>developer_yeasin</h4>
              <p>Yeasin Arafat</p>
            </div>
            <button>Switch</button>
          </LoginUser>
        </UserSection>
      </MainContainer>
    </Home>
  );
};

const Home = styled.div``;
const MainContainer = styled.div`
  width: 100%;
  max-width: 975px;
  padding: 0 20px;
  margin: auto;
  margin-top: 90px !important;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 100%;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 0 2px 0 #11111159;
  margin-bottom: 28px;
`;

const CardSection = styled.div`
  width: 65%;
`;

const UserSection = styled.div`
  width: 100%;
  max-width: 293px;
  position: fixed;
  top: 22%;
  left: 64%;
`;

const LoginUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  a {
    width: 56px;
    height: 56px;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  div {
    width: 55%;
    h4 {
      font-size: 15px;
      color: #383838;
      margin: 2px 0;
    }
    p {
      font-size: 13px;
      color: #b7b7b7;
      font-weight: 500;
    }
  }
  button {
    color: #0095f6;
    background: transparent;
    border: none;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

export default index;
