import React from "react";
import styled from "styled-components";
import LoginCard from "./LoginCard";
import LoginSlider from "./LoginSlider";

const Login = () => {
  return (
    <div>
      <Container>
        <Loginbg>
          <LoginSlider></LoginSlider>
        </Loginbg>
        <RightSite>
          <LoginCard></LoginCard>
        </RightSite>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  margin: 32px auto 0;
  max-width: 935px;
  padding-bottom: 32px;
  width: 100%;
`;
const Loginbg = styled.div`
  background-image: url(./img/login-silder-bg.png);
  background-repeat: no-repeat;
  background-position: -46px 0;
  background-size: 468.32px 634.15px;
  flex-basis: 380.32px;
  height: 581.15px;
  margin-bottom: 12px;
  margin-right: 32px;
`;
const RightSite = styled.div`
  max-width: 350px;
  width: 350px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Login;
