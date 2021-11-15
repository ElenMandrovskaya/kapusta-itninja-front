import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthGoogleBtn } from '../SignInForm/SignInForm.styled';
import { SpanTextWrapper } from '../SignInForm/SignInForm.styled';

function GoogleAuthButton({ onClick, disabled }) {
  return (
    <AuthGoogleBtn type="button" onClick={onClick} disabled={disabled}>
      <FcGoogle size={18} />
      <SpanTextWrapper>Google</SpanTextWrapper>
    </AuthGoogleBtn>
  );
}

export default GoogleAuthButton;
