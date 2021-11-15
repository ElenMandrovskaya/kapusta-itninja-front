import React, { Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleAuthButton from './GoogleAuthButton';
import { useDispatch } from 'react-redux';

import { signIn } from '../../redux/auth/auth-operations';
import {
  setName,
  setEmail,
  setToken,
  setisLoggedIn,
} from '../../redux/auth/auth-slice';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const successLogin = async ({ tokenId, profileObj }) => {
    const { email, name } = profileObj;
    const newUser = {
      email,
      name,
    };
    const isLoggedIn = true;
    dispatch(setName({ name }));
    dispatch(setEmail({ email }));
    dispatch(setToken({ tokenId }));
    dispatch(setisLoggedIn({ isLoggedIn }));
    // console.log(newUser);
    // console.log(tokenId);
    // console.log(login);
    // dispatch(signIn(newUser));
  };
  return (
    <Fragment>
      <GoogleLogin
        clientId="769668687456-qcpstj8cu5ci8i65gr2uu0osnf0ukg22.apps.googleusercontent.com"
        render={({ onClick, disabled }) => (
          <GoogleAuthButton onClick={onClick} disabled={disabled} />
        )}
        onSuccess={successLogin}
        cookiePolicy={'single_host_origin'}
      />
    </Fragment>
  );
};

export default GoogleAuth;
