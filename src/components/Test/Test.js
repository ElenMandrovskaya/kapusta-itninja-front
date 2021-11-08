import React from 'react';
import { Example, Image, Section } from './Test.styled';
import Donatello from '../../images/donatello.jpg';
import FormContainer from '../FormContainer';
import SignInForm from '../SignInForm';

export function Test() {
  return (
    <Section>
      <Example>Just for test, Good Luck, ItNinja!!!</Example>
      <Image src={Donatello} />
      <FormContainer>
        <SignInForm></SignInForm>
      </FormContainer>
    </Section>
  );
}
