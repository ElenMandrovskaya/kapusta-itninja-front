import React, { useState } from 'react';
import { BgGrey, Container } from '../app/App.styled';
import { Header } from '../components/Header/Header';
import { BgAuth } from '../components/BgAuth/BgAuth';
import { HeroTitle } from '../components/HeroTitle/HeroTitle';
import FormContainer from '../components/FormContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import RegistrationPageContainer from '../components/RegistrationPageContainer';

export default function RegistrationPage() {
  const [isRegistration, setIsRegistration] = useState(false);
  return (
    <div>
      <BgGrey />
      <Header />
      <BgAuth />
      <Container>
        <RegistrationPageContainer>
          <HeroTitle />

          <FormContainer>
            {isRegistration === false ? <SignUpForm /> : <SignInForm />}
          </FormContainer>
        </RegistrationPageContainer>
      </Container>
    </div>
  );
}
