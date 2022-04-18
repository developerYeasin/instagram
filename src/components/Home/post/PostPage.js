import React, { useState } from "react";
import styled from "styled-components";
import MoreOption from "../Navicons/MoreOption";
import Options from "./Options";
import PostSlider from "./PostSlider";
import CommentIcon from "../Navicons/CommentIcon";

const PostPage = () => {
  const [comment, setComment] = useState("");
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
      <WhoComment>
        <p>veve_zulfikar Relate banget nih sama kehidupan !!... more </p>
      </WhoComment>
      <Description>
        <p>
          View all 65 comments sitimaisaroh_79 Bagus banget ya Allah 😢 jadi
          pengin beli . Ka veve boleh spil harganya 🙏 veve_zulfikar
          @sitimaisaroh_79 haloo kkk langsung tanya ke @zhifa.co.id yaa😍
        </p>
      </Description>
      <PostDate>
        <p>2 DAYS AGO</p>
      </PostDate>
      <DoComment>
        <CommentIcon />
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          placeholder="Add a comment"
        />
        {comment ? (
          <button>Post</button>
        ) : (
          <button disabled className="disabled">
            Post
          </button>
        )}
      </DoComment>
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

const WhoComment = styled(WhoLiked)`
  p {
    font-size: 13px;
    color: #1c1c1c;
    font-weight: 500;
    line-height: 20px;
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 0 15px;
  p {
    font-size: 13px;
    color: #1c1c1c;
    font-weight: 500;
    line-height: 20px;
  }
`;

const PostDate = styled.div`
  width: 100%;
  padding: 15px;
  p {
    font-size: 11px;
    font-weight: 700;
    color: #9d9d9d;
  }
`;

const DoComment = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 84%;
    border: none;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
  button {
    background: transparent;
    color: #0095f6;
    border: none;
    font-size: 14px;
    font-weight: 700;
    &:disabled {
      opacity: 0.4 !important;
    }
  }
`;

export default PostPage;
