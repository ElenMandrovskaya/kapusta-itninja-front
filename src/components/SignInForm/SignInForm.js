import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';

import { AuthGoogleDescription } from './SignInForm.styled';
import { AuthGoogleBtn } from './SignInForm.styled';
import { SpanTextWrapper } from './SignInForm.styled';
import { OtherDescriptionToSignUp } from './SignInForm.styled';

import { SignInFormWrapper } from './SignInForm.styled';
import { LabelInputForm } from './SignInForm.styled';
import { FormInputDescription } from './SignInForm.styled';
import { FormInput } from './SignInForm.styled';
import { FormBtn } from './SignInForm.styled';

function SignInForm() {
  return (
    <Fragment>
      <AuthGoogleDescription>
        Вы можете авторизоваться с помощью Google Account:
      </AuthGoogleDescription>

      <AuthGoogleBtn type="button">
        <FcGoogle size={18} />
        <SpanTextWrapper>Google</SpanTextWrapper>
      </AuthGoogleBtn>

      <OtherDescriptionToSignUp>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </OtherDescriptionToSignUp>

      <SignInFormWrapper>
        <LabelInputForm>
          <FormInputDescription>Электронная почта:</FormInputDescription>
          <FormInput
            placeholder={'your@email.com'}
            type="email"
            name="email"
            // onChange={handleChange}
            // value={email}
          />
        </LabelInputForm>

        <LabelInputForm marginBTM>
          <FormInputDescription>Пароль:</FormInputDescription>
          <FormInput
            password
            placeholder={'········'}
            type="password"
            name="password"
            // onChange={handleChange}
            // value={password}
          />
        </LabelInputForm>

        <FormBtn type="submit" marginRigth15 accentBGColor whiteColor>
          Войти
        </FormBtn>
        <a href="/" alt="Sign in with Google">
          <FormBtn type="button">Регистрация</FormBtn>
        </a>
      </SignInFormWrapper>
    </Fragment>
  );
}

// SignInForm.propTypes = {};

export default SignInForm;
