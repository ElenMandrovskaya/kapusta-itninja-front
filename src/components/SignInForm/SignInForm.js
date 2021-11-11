import React, { Fragment, useState } from 'react';
// import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { css } from '@emotion/react';

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
  const [isRegistration, setRegistration] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeForm = e => {
    e.preventDefault();
    setRegistration(!isRegistration);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleChangeName = e => {
    setName(e.target.value);
    console.log(name);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleSubmitSignup = e => {
    e.preventDefault();
    const submitForm = {
      name,
      email,
      password,
    };

    console.log(submitForm);
  };

  const handleSubmitSignin = e => {
    e.preventDefault();
    const submitForm = {
      email,
      password,
    };

    console.log(submitForm);
  };

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

      {isRegistration ? (
        <LabelInputForm>
          <FormInputDescription>Введите имя и фамилию:</FormInputDescription>
          <FormInput
            placeholder={'Barry Donatello'}
            type="name"
            name="name"
            onChange={handleChangeName}
            value={name}
          />
        </LabelInputForm>
      ) : null}

      <SignInFormWrapper>
        <LabelInputForm>
          <FormInputDescription>Электронная почта:</FormInputDescription>
          <FormInput
            placeholder={'your@email.com'}
            type="email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
          />
        </LabelInputForm>

        <LabelInputForm marginBTM>
          <FormInputDescription>Пароль:</FormInputDescription>
          <FormInput
            // desktopInputPassword
            password
            placeholder={'········'}
            type="password"
            name="password"
            onChange={handleChangePassword}
            value={password}
          />
        </LabelInputForm>

        {isRegistration ? (
          <Fragment>
            <FormBtn type="button" marginRigth15 onClick={handleChangeForm}>
              Войти
            </FormBtn>
            <FormBtn type="submit" submitBtn onClick={handleSubmitSignup}>
              Регистрация
            </FormBtn>
          </Fragment>
        ) : (
          <Fragment>
            <FormBtn
              type="submit"
              marginRigth15
              submitBtn
              onClick={handleSubmitSignin}
            >
              Войти
            </FormBtn>
            <FormBtn type="button" onClick={handleChangeForm}>
              Регистрация
            </FormBtn>
          </Fragment>
        )}
      </SignInFormWrapper>
    </Fragment>
  );
}

// SignInForm.propTypes = {};

export default SignInForm;
