import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import PostPage from "./post/PostPage";
import StorySlider from "./StorySlider";
import Slider from "react-slick";
import { stories } from "../../utils/stories";

const index = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <Home>
      <Navbar />
      <MainContainer>
        <CardSection>
          <Card>
            <Slider {...settings}>
              {stories.map((story) => (
                <StorySlider story={story} />
              ))}
            </Slider>
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
          <SeeAll>
            <p>Suggestions For You</p>
            <span>See All</span>
          </SeeAll>
          <FollowItems>
            <FollowItem>
              <Link to="/">
                <img src="./img/user-img.jpg" alt="" />
              </Link>
              <div>
                <h4>developer_yeasin</h4>
                <p>Followed by akash___bhuiyan</p>
              </div>
              <button>Follow</button>
            </FollowItem>
            <FollowItem>
              <Link to="/">
                <img src="./img/user-img.jpg" alt="" />
              </Link>
              <div>
                <h4>developer_yeasin</h4>
                <p>Followed by akash___bhuiyan</p>
              </div>
              <button>Follow</button>
            </FollowItem>
            <FollowItem>
              <Link to="/">
                <img src="./img/user-img.jpg" alt="" />
              </Link>
              <div>
                <h4>developer_yeasin</h4>
                <p>Followed by akash___bhuiyan</p>
              </div>
              <button>Follow</button>
            </FollowItem>
          </FollowItems>
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UserSection = styled.div`
  width: 100%;
  max-width: 293px;
  position: fixed;
  top: 22%;
  left: 64%;
  @media (max-width: 768px) {
    display: none;
  }
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

const SeeAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  p {
    color: #979797;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  span {
    color: #111;
    font-size: 13px;
  }
`;

const FollowItems = styled.div`
  margin-top: 20px;
`;

const FollowItem = styled(LoginUser)`
  margin: 10px 0;
  a {
    width: 33px;
    height: 33px;
  }
  div {
    width: 65%;
    h4 {
      font-size: 13px;
      margin: 2px 0;
    }
    p {
      font-size: 12px;
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
