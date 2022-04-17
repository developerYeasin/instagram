import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Loginbutton from "./Loginbutton";

const LoginCard = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  return (
    <>
      <Card>
        <CardLogo src="./img/login-logo.png"></CardLogo>
        <InputGroup>
          <Input
            inputValue={inputEmail}
            setInputValue={setInputEmail}
            placeholder={"Phone number, username or email"}
          />
          <Input
            inputValue={password}
            setInputValue={setPassword}
            placeholder={"Password"}
            type={type}
            setType={setType}
          />
          <Loginbutton text={"Log In"} />
        </InputGroup>

        <OrLineBreck>
          <div>or</div>
        </OrLineBreck>
        <FacebookSignIn>
          <span></span>
          <p>Log In With Facebook</p>
        </FacebookSignIn>
        <ForgetPassword>ForGot Password?</ForgetPassword>
      </Card>
      <SignUPCard>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </SignUPCard>
      <GetApp>
        <p>Get the app.</p>
        <img src="./img/apple-store.png" alt="" />
        <img src="./img/play-store.png" alt="" />
      </GetApp>
    </>
  );
};

const Card = styled.div`
  background: #fff;
  padding: 26px 0px;
  box-shadow: 0 0 2px 0 #1111117a;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CardLogo = styled.img``;

const InputGroup = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OrLineBreck = styled.div`
  width: 81%;
  background: #bbbbbb;
  margin-top: 30px;
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    text-transform: uppercase;
    background: #fff;
    width: 21%;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    color: #8d8d8d;
  }
`;
const FacebookSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  span {
    background-image: url("./img/icons.png");
    height: 16px;
    width: 22px;
    background-position: 101% 67%;
    background-repeat: no-repeat;
  }
  p {
    color: #385185;
    font-size: 14px;
    font-weight: 700;
  }
`;
const ForgetPassword = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #385185bf;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUPCard = styled(Card)`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  span {
    color: #0095f6;
  }
`;

const GetApp = styled.div`
  p {
    font-size: 14px;
    width: 100%;
    text-align: center;
    margin: 12px 0;
  }
  img {
    width: 50%;
  }
`;

export default LoginCard;
