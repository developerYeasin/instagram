import React from "react";
import styled from "styled-components";
import SaveIcon from "../Navicons/SaveIcon";
import NotificationIcon from "../Navicons/NotificationIcon";
import Comment from "../Navicons/Comment";
import InboxIcon from "../Navicons/InboxIcon";

const Options = () => {
  return (
    <Option>
      <LikeOption>
        <NotificationIcon />
        <Comment />
        <InboxIcon />
      </LikeOption>
      <SaveIcon />
    </Option>
  );
};
const Option = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const LikeOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;

export default Options;
