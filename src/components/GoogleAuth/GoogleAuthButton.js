import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SpanTextWrapper, AuthGoogleBtn } from "../SignInForm/AuthForm.styled";

function GoogleAuthButton({ onClick, disabled }) {
  return (
    <AuthGoogleBtn type="button" onClick={onClick} disabled={disabled}>
      <FcGoogle size={18} />
      <SpanTextWrapper>Google</SpanTextWrapper>
    </AuthGoogleBtn>
  );
}

export default GoogleAuthButton;
