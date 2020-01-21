import React from "react";
import { connect } from "react-redux";
import { authSignup } from "../../../../store/auth/actionCreators";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { SignupInterface } from "./SignupInterface";
import { Form } from "react-final-form";
import InputValidate from "../../../../HOC/AuthHOC/InputValidateHOC";
import { required, email, password, composeValidators } from "../validation";
import FileUpload from "../../../../components/FileUpload/FileUpload";
import { putFile } from "../../../../api/profile/ProfileApi";

const SignupForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

interface Props {
  authSignup: (userData: SignupInterface) => void;
}

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  group: ""
};

const Signup: React.FC<Props> = props => {

  const {
    authSignup
  } = props;

  const onSubmitForm = (form: any) => {
    const userData: SignupInterface = {
      email: form.email,
      password: form.password,
      name: form.name,
      group: form.group,
    };
    authSignup(userData);
  };

  return (
    <div>
      <FileUpload 
        putFile={putFile}
        path="avatars"
      />
      <Form
        onSubmit={formObj => {
          onSubmitForm(formObj);
        }}
        initialValues={initialValues}
        validate={values => {
          const errors: any = {};
          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords must match!";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <SignupForm
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputValidate
              id="EmailSignup"
              label="Email"
              variant="outlined"
              validate={composeValidators(required, email)}
              type="email"
              fieldName="email"
            />
            <InputValidate
              id="PasswordSignup"
              label="Password"
              variant="outlined"
              validate={composeValidators(required, password)}
              type="password"
              fieldName="password"
            />
            <InputValidate
              id="ConfirmPasswordSignup"
              label="Confirm password"
              variant="outlined"
              validate={composeValidators(required)}
              type="password"
              fieldName="confirmPassword"
            />
            <InputValidate
              id="NameSignup"
              label="Name"
              variant="outlined"
              validate={composeValidators(required)}
              type="text"
              fieldName="name"
            />
            <InputValidate
              id="GroupSignup"
              label="Group"
              variant="outlined"
              validate={composeValidators(required)}
              type="text"
              fieldName="group"
            />
            <Button variant="contained" color="primary" type="submit">
              SIGNUP
            </Button>
          </SignupForm>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  uid: state.authReducer.uid
})

export default connect(mapStateToProps, { authSignup })(Signup);
