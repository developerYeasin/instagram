import React from "react";
import styled from "styled-components";

const Loginbutton = ({ text }) => {
  return <Button>{text}</Button>;
};

const Button = styled.button`
  width: 81%;
  border: none;
  font-size: 15px;
  font-weight: 600;
  background: #0095f6;
  color: #fff;
  padding: 7px 0;
  margin-top: 11px;
  border-radius: 3px;
  cursor: pointer;
`;

export default Loginbutton;
