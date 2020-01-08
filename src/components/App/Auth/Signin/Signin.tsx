import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { Form } from "react-final-form";
import SignupInput from '../../../../HOC/AuthHOC/SignupInputHOC';
import { required, email, password, composeValidators } from '../validation';
import { SigninInterface } from "./Interfaces/SignInInterface";
import { InitialStateInterface } from "../../../../store/auth/initialStateInterface";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Tabs,
  Tab
} from "@material-ui/core";
import styled from "styled-components";
import { signInUser, signOutUser } from "../../../../store/auth/actionCreators";
import { connect } from "react-redux";
import { UserForm } from "@components/App/Auth/Signin/Interfaces/UserFormInterface";

const CloseIcon = styled.i`
  position: absolute;
  color: #9ba6b2;
  font-size: 24px;
  right: 0;
  top: 0;
  padding: 10px;
  &:hover {
    color: #20233f;
  }
`;

const SigninForm = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
`;

const initialValues: UserForm = {
  email: "",
  password: ""
};

const SignIn = ({ uid, signOutUser, signInUser }: SigninInterface) => {
  const [isOpen, setOpen] = useState(true);
  const [value, setValue] = useState(0);

  const handleFormSubmit = (formObj: UserForm) => {
    signInUser(formObj.email, formObj.password);
  };

  const handleSignOut = (e: React.ChangeEvent<{}>) => {
    e.preventDefault();
    signOutUser();
  };

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>Current user: {uid}</div>
      <button className="signIn" onClick={() => setOpen(true)}>
        Sign in
      </button>
      <button className="signOut" onClick={handleSignOut}>
        Sign out
      </button>
      <Dialog open={isOpen}>
        <Tabs
          onChange={handleChange}
          value={value}
          indicatorColor="primary"
          textColor="secondary"
          centered
        >
          <Tab label="SIGN IN" />
          <Tab label="SIGN UP" />
        </Tabs>
        <Form
          onSubmit={formObj => {
            handleFormSubmit(formObj);
          }}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <SigninForm
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <DialogContent>
                <SignupInput
                    id="EmailSignup"
                    label="Email"
                    variant="outlined"
                    validate={composeValidators(required, email)}
                    type="email"
                    fieldName="email"
                />
                <SignupInput
                    id="PasswordSignup"
                    label="Password"
                    variant="outlined"
                    validate={composeValidators(required, password)}
                    type="password"
                    fieldName="password"
                />
              </DialogContent>
              <DialogActions>
                <Button
                  className="submit"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </DialogActions>
            </SigninForm>
          )}
        />
        <CloseIcon className="fas fa-times" onClick={() => setOpen(false)} />
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ signInUser, signOutUser }, dispatch);
};

const mapStateToProps = (state: InitialStateInterface) => {
  return {
    uid: state.userReducer.uid
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
