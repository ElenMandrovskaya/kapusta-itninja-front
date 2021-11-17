import React, { Fragment } from 'react';
// import GoogleLogin from 'react-google-login';
import GoogleAuthButton from './GoogleAuthButton';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';

// import { googleAuth } from '../../redux/auth/auth-operations';
// import {
//   setName,
//   setEmail,
//   setToken,
//   setisLoggedIn,
// } from '../../redux/auth/auth-slice';

// const GoogleAuth = () => {
//   const dispatch = useDispatch();

//   const successLogin = async data => {
//     // const { email, name } = profileObj;
//     // const newUser = {
//     //   email,
//     //   name,
//     // };
//     // const isLoggedIn = true;
//     // dispatch(setName({ name }));
//     // dispatch(setEmail({ email }));
//     // dispatch(setToken({ tokenId }));
//     // dispatch(setisLoggedIn({ isLoggedIn }));
//     // console.log(newUser);
//     // console.log(tokenId);
//     // console.log(login);
//     dispatch(googleAuth(data));
//   };
//   return (
//     <Fragment>
//       <GoogleLogin
//         clientId="769668687456-qcpstj8cu5ci8i65gr2uu0osnf0ukg22.apps.googleusercontent.com"
//         render={({ onClick, disabled }) => (
//           <GoogleAuthButton onClick={onClick} disabled={disabled} />
//         )}
//         onSuccess={successLogin}
//         cookiePolicy={'single_host_origin'}
//       />
//     </Fragment>
//   );
// };

// export default GoogleAuth;

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const OnGoogleLoginBtn = evt => {
    const data = dispatch(authOperations.googleAuth());
    // console.log(data);
    return data;
  };

  // const data = dispatch(authOperations.googleAuth());
  // console.log(data);
  return (
    <Fragment>
      <GoogleAuthButton onClick={OnGoogleLoginBtn} />
    </Fragment>
  );
};

export default GoogleAuth;
