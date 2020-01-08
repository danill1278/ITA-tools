import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import styled from 'styled-components';
import Signup from '../Auth/Signup/Signup';
import { connect } from 'react-redux';
import ProtectedRoute from '../../../HOC/ProtectedRoute';

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 40px 0px;
`;

const StyledModalTest = styled.div`
  margin-top: 100px;
`;

const ContentWrapper = (props: any) => {
  return (
    <StyledContentWrapper>
      <StyledModalTest>
        <Signup />
      </StyledModalTest>
      <Switch>
        <Route path="/" exact component={ HomePage } />
<<<<<<< HEAD
        <Route path="/profile" component={ ProfilePage } />
=======
        <ProtectedRoute path="/profile" redirect="/" isAuth={props.isAuth}>
          <ProfilePage />
        </ProtectedRoute>
>>>>>>> 02b584595945d54b37ab271f1512364377aa2c09
      </Switch>
    </StyledContentWrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.isAuth,
    id: state.id
  }
}

export default connect(mapStateToProps, null)(ContentWrapper);