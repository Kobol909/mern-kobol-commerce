/**
 * Sign in form component
 * ======================
 *
 * This component is used to display the sign in form
 *
 */
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormInput from '../form-input/FormInput.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';

import { SignInContainer, ButtonsContainer } from './SignInForm.styles';
import {
  googleSignInPassportStart,
  googleSignInFirebaseStart,
  emailSignInStart
} from '../../store/user/user.actions';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleGoogle = async (e) => {
    e.preventDefault();

    dispatch(googleSignInFirebaseStart());

    // TODO: add passport sign in

    // dispatch(googleSignInPassportStart());
    navigate('/dashboard', { replace: true });
  };

  return (
    <SignInContainer>
      {/* // TODO: Create styled component for this form  */}
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={handleGoogle}>
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
