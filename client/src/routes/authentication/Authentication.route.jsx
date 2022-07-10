/**
 * Authentication routes
 * =====================
 *
 * Authentication routes are used to sign in and sign up users
 *
 */
import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInForm from '../../components/sign-in-form/SignInForm.component';

import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
  return (
    <>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </>
  );
};

export default Authentication;
