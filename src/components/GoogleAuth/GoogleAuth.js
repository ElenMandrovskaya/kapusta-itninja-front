import React, { Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleAuthButton from './GoogleAuthButton';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';
const GoogleAuth = () => {
  const dispatch = useDispatch();

  const successLogin = async ({ tokenId, profileObj }) => {
    const { email, name } = profileObj;
    const newUser = {
      email,
      name,
    };
    const tokenID = tokenId;
    console.log(newUser);
    console.log(tokenID);
    dispatch(signIn(newUser));
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
