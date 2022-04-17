import React from "react";
import styled from "styled-components";

const Input = ({ inputValue, setInputValue, placeholder, type, setType }) => {
  
  return (
    <InputBox>
      {inputValue && <Label>{placeholder}</Label>}
      <CardInput
        type={type ? type : "text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />

      {type === "password" && (
        <ShowBtn onClick={() => setType("text")}>Show</ShowBtn>
      )}
      {type === "text" && (
        <ShowBtn onClick={() => setType("password")}>Hide</ShowBtn>
      )}
    </InputBox>
  );
};

const InputBox = styled.div`
  width: 81%;
  margin: auto;
  border: 1px solid #1111115c;
  height: 40px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin: 8px 0;
  position: relative;
`;
const CardInput = styled.input`
  height: 53%;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  background: transparent;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  font-size: 12px;
  color: #726c6c;
  margin-left: 7px;
`;

const ShowBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  font-size: 12px;
  color: #111111b8;
  cursor: pointer;
`;

export default Input;
