import React, { Fragment, useState } from 'react';
// import PropTypes from "prop-types";
import { FcGoogle } from 'react-icons/fc';
// import { css } from "@emotion/react";
import { useDispatch } from 'react-redux';

import * as authOperations from '../../redux/auth/auth-operations';

import { AuthGoogleDescription } from './SignInForm.styled';
// import { AuthGoogleBtn } from "./SignInForm.styled";
// import { SpanTextWrapper } from "./SignInForm.styled";
import { OtherDescriptionToSignUp } from './SignInForm.styled';

import { SignInFormWrapper } from './SignInForm.styled';
import { LabelInputForm } from './SignInForm.styled';
import { FormInputDescription } from './SignInForm.styled';
import { FormInput } from './SignInForm.styled';
import { FormBtn } from './SignInForm.styled';
import { SpanTextWrapper, AuthGoogleBtn } from './AuthForm.styled';

function SignInForm() {
    const dispatch = useDispatch();

    const [isRegistration, setRegistration] = useState(false);
    // const state = useSelector(state => console.log(state));
    // let name = useSelector(state => state.auth.user.name);
    // console.log(name)

    // let email = useSelector(state => state.auth.user.email);

    const [nameLocal, setNameLocal] = useState('');
    const [emailLocal, setEmailLocal] = useState('');

    const [password, setPassword] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);

    const [emailError, setEmailError] = useState('Это обязательное поле');
    const [passwordError, setPasswordError] = useState('Это обязательное поле');
    const [nameError, setNameError] = useState('Это обязательное поле');

    const [errorSymbol, _setErrorSymbol] = useState('*');

    const blurHandler = e => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;

            default:
                return;
        }
    };

    //   const handleChange = e => {
    //   const { name, value } = e.currentTarget;
    //   switch (name) {
    //     case "name":
    //       setName(value);
    //       break;
    //     case "email":
    //       setEmail(value);
    //       break;
    //     case "password":
    //       setPassword(value);
    //       break;

    //     default:
    //       return;
    //   }
    // };

    const handleChangeForm = e => {
        e.preventDefault();
        setRegistration(!isRegistration);
    };

    const handleChangePassword = e => {
        setPassword(e.target.value);
        // dispatch(setName(e.target.value));
        // console.log(password);
        if (e.target.value.length < 6) {
            setPasswordError('Пароль должен быть не меньше 6 символов');
            if (!e.target.value) {
                setPasswordError('Это обязательное поле');
            }
        } else {
            setPasswordError('');
        }
    };

    const handleChangeName = e => {
        // dispatch(setName(e.target.value));
        setNameLocal(e.target.value);
        // console.log(nameLocal);
        const re = /^[A-Za-zА-Яа-яЁё" "\-()0-9]{3,30}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Некорректное имя');
            if (!e.target.value) {
                setNameError('это обязательное поле');
            }
        } else {
            setNameError('');
        }
    };

    const handleChangeEmail = e => {
        // dispatch(setEmail(e.target.value));
        console.log(e.target.value);
        setEmailLocal(e.target.value);
        // console.log(email);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл');
            if (!e.target.value) {
                setEmailError('Это обязательное поле');
            }
        } else {
            setEmailError('');
        }
    };

    const resetInputs = () => {
        setEmailLocal('');
        setPassword('');
        setNameLocal('');
    };

    // const handleSubmit = e => {
    //   e.preventDefault();
    //   if (name === "") {
    //     dispatch(signIn({ email, password }));
    //   } else {
    //     dispatch(signUp({ email, password, name }));
    //   }

    //   resetInputs({});
    // };

    const OnSubmitRegBtn = evt => {
        evt.preventDefault();
        if (!nameLocal || !emailLocal || !password) {
            // toast.info("Fill in all the fields")
            alert('Fill in all the fields');
            return;
        }
        console.log(nameLocal);
        console.log(emailLocal);
        console.log(password);
        //  console.log(nameLocal)

        // The rest of the code
        dispatch(authOperations.signUp({ name: nameLocal, email: emailLocal, password }));

        resetInputs();
    };

    const OnSubmitSignInBtn = evt => {
        evt.preventDefault();
        if (!emailLocal || !password) {
            // toast.info("Fill in all the fields")
            alert('Fill in all the fields');
            return;
        }
        dispatch(authOperations.signIn({ email: emailLocal, password }));
        resetInputs();
    };

    return (
        <Fragment>
            {/* 
      <AuthGoogleBtn type="button">
        <FcGoogle size={18} />
        <SpanTextWrapper>Google</SpanTextWrapper>
      </AuthGoogleBtn> */}
            {isRegistration ? null : (
                <Fragment>
                    <AuthGoogleDescription>
                        Вы можете авторизоваться с помощью Google Account:
                    </AuthGoogleDescription>
                    <a
                        href="https://kapusta-finance-tracker.herokuapp.com/api/user/google"
                        alt="GoogleAuth"
                    >
                        <AuthGoogleBtn type="button">
                            <FcGoogle size={18} />
                            <SpanTextWrapper>Google</SpanTextWrapper>
                        </AuthGoogleBtn>
                    </a>
                </Fragment>
            )}

            <OtherDescriptionToSignUp>
                Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
            </OtherDescriptionToSignUp>

            <SignInFormWrapper autoComplete="on">
                {isRegistration ? (
                    <LabelInputForm>
                        {nameDirty && nameError && (
                            <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {errorSymbol}{' '}
                            </span>
                        )}
                        <FormInputDescription>Введите имя:</FormInputDescription>
                        <FormInput
                            onBlur={blurHandler}
                            placeholder={'Barry Donatello'}
                            type="name"
                            name="name"
                            onChange={handleChangeName}
                            value={nameLocal}
                            pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
                            title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
                            required
                        />
                        {nameDirty && nameError && (
                            <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                                {emailError}{' '}
                            </div>
                        )}
                    </LabelInputForm>
                ) : null}

                <LabelInputForm>
                    {emailDirty && emailError && (
                        <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                            {errorSymbol}{' '}
                        </span>
                    )}
                    <FormInputDescription>Электронная почта:</FormInputDescription>
                    <FormInput
                        onBlur={blurHandler}
                        placeholder={'your@email.com'}
                        type="email"
                        name="email"
                        onChange={handleChangeEmail}
                        value={emailLocal}
                        pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
                        title="Email может, сoстоять из букв цифр и обязательного символа @"
                        required
                    />
                    {emailDirty && emailError && (
                        <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                            {emailError}{' '}
                        </div>
                    )}
                </LabelInputForm>

                <LabelInputForm marginBTM>
                    {passwordDirty && passwordError && (
                        <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                            {errorSymbol}{' '}
                        </span>
                    )}
                    <FormInputDescription>Пароль:</FormInputDescription>
                    <FormInput
                        onBlur={blurHandler}
                        password
                        placeholder={'········'}
                        type="password"
                        name="password"
                        onChange={handleChangePassword}
                        value={password}
                        pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
                        title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
                        required
                    />
                    {passwordDirty && passwordError && (
                        <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                            {passwordError}{' '}
                        </div>
                    )}
                </LabelInputForm>

                {isRegistration ? (
                    <Fragment>
                        <FormBtn type="button" marginRigth15 onClick={handleChangeForm}>
                            Войти
                        </FormBtn>
                        <FormBtn type="submit" submitBtn onClick={OnSubmitRegBtn}>
                            Регистрация
                        </FormBtn>
                    </Fragment>
                ) : (
                    <Fragment>
                        <FormBtn type="submit" marginRigth15 submitBtn onClick={OnSubmitSignInBtn}>
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
