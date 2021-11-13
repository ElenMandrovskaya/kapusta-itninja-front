import React, { useState } from 'react';
import { BgGrey, Container } from '../app/App.styled';
import { Header } from '../components/Header/Header';
import { BgUnAuth } from '../components/BgUnAuth/BgUnAuth';
import { HeroTitle } from '../components/HeroTitle/HeroTitle';
import FormContainer from '../components/FormContainer';
// import SignInForm from '../components/SignInForm';
import AuthForm from '../components/SignInForm/authForm';
import RegistrationPageContainer from '../components/RegistrationPageContainer';

export default function RegistrationPage() {
  return (
    <div>
      <BgGrey />
      <Header />
      <BgUnAuth />
      <Container>
        <RegistrationPageContainer>
          <HeroTitle />
          <FormContainer>
            {/* <SignInForm /> */}
            <AuthForm />
          </FormContainer>
        </RegistrationPageContainer>
      </Container>
    </div>
  );
}
