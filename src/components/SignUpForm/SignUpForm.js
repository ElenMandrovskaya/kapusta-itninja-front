import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';

import { AuthGoogleDescription } from '../SignInForm/SignInForm.styled';
import { AuthGoogleBtn } from '../SignInForm/SignInForm.styled';
import { SpanTextWrapper } from '../SignInForm/SignInForm.styled';
import { OtherDescriptionToSignUp } from '../SignInForm/SignInForm.styled';

import { SignInFormWrapper } from '../SignInForm/SignInForm.styled';
import { LabelInputForm } from '../SignInForm/SignInForm.styled';
import { FormInputDescription } from '../SignInForm/SignInForm.styled';
import { FormInput } from '../SignInForm/SignInForm.styled';
import { FormBtn } from '../SignInForm/SignInForm.styled';

function SignUpForm() {
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

      <LabelInputForm>
        <FormInputDescription>Введите имя и фамилию:</FormInputDescription>
        <FormInput
          placeholder={'Barry Donatello'}
          type="name"
          name="name"
          // onChange={handleChange}
          // value={email}
        />
      </LabelInputForm>

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

        <FormBtn type="button" marginRigth15>
          Войти
        </FormBtn>
        <a href="/" alt="Sign in with Google">
          <FormBtn type="submit" submitBtn>
            Регистрация
          </FormBtn>
        </a>
      </SignInFormWrapper>
    </Fragment>
  );
}

// SignInForm.propTypes = {};

export default SignUpForm;
