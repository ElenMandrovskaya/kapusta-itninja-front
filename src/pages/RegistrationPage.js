import React from 'react';
import HeroTitle from '../components/HeroTitle/HeroTitle';
import FormContainer from '../components/FormContainer';
// import SignInForm from '../components/SignInForm/SignInForm';
import AuthForm from '../components/SignInForm/authForm';
import RegistrationPageContainer from '../components/RegistrationPageContainer';

export default function RegistrationPage() {
  return (
    <RegistrationPageContainer>
      <HeroTitle />
      <FormContainer>
        {/* <SignInForm /> */}
        <AuthForm />
      </FormContainer>
    </RegistrationPageContainer>
  );
}
