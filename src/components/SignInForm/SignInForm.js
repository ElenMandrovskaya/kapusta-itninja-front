import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';

import { AuthGoogleDescription } from './SignInForm.styled';
import { AuthGoogleButton } from './SignInForm.styled';
import { SpanTextWrapper } from './SignInForm.styled';
import { OtherDescriptionToSignUp } from './SignInForm.styled';

import { SignInFormWrapper } from './SignInForm.styled';
import { LabelInputForm } from './SignInForm.styled';
import { FormInputDescription } from './SignInForm.styled';
import { FormInput } from './SignInForm.styled';
import { FormBtn } from './SignInForm.styled';
import { ButtonContainer } from './SignInForm.styled';

function SignInForm() {
  return (
    <Fragment>
      <AuthGoogleDescription>
        Вы можете авторизоваться с помощью Google Account:
      </AuthGoogleDescription>

      <AuthGoogleButton>
        <FcGoogle size={18} />
        <SpanTextWrapper>Google</SpanTextWrapper>
      </AuthGoogleButton>

      <OtherDescriptionToSignUp>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </OtherDescriptionToSignUp>

      <SignInFormWrapper>
        <LabelInputForm>
          <FormInputDescription>Электронная почта:</FormInputDescription>
          <FormInput placeholder={'your@email.com'} />
        </LabelInputForm>

        <LabelInputForm>
          <FormInputDescription>Пароль:</FormInputDescription>
          <FormInput />
        </LabelInputForm>

        <ButtonContainer>
          <FormBtn marginRigth15 accentBGColor whiteColor>
            Войти
          </FormBtn>
          <FormBtn>Регистрация</FormBtn>
        </ButtonContainer>
      </SignInFormWrapper>
    </Fragment>
  );
}

SignInForm.propTypes = {};

export default SignInForm;
