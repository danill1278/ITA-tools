import React from "react";
import styled from "styled-components";
import TabButtons from "./Tabs";
import SoftServeBG from '../../../assets/images/softserve.jpg';

const AuthSide = styled.div`
  width: 60%;
  height: 100vh;
  color: #fff;
  padding: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 40px;
  font-weight: 700;
  background-image: url(${SoftServeBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -200px 0px;
  box-shadow: rgba(36,195,249, .4) 0 0 0 100vw inset;

  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const AuthSideTitle = styled.p`
  padding: 0px 0px;
  margin: 0;
  font-weight: 400;
`;
const AuthSideH3 = styled.h3`
  font-size: 60px;
  padding: 0px 0px;
  margin: 0;
`;

const AuthForm = styled.div`
  height: 100vh;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <AuthForm>
        <TabButtons />
      </AuthForm>
      <AuthSide>
        <div>
          <AuthSideH3>ITA Tools</AuthSideH3>
          <AuthSideTitle>Your first step</AuthSideTitle>
        </div>
      </AuthSide>
    </AuthContainer>
  );
};

export default Auth;
