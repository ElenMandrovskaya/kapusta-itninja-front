import styled from '@emotion/styled';

export const AuthGoogleDescription = styled.p`
  font-family: Roboto, sant-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.176;
  letter-spacing: 0.04em;
  color: var(--main-text-color);

  margin-bottom: 20px;
`;

export const AuthGoogleButton = styled.button`
  width: 122px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20.22px;

  background-color: #f6f7fb;
  border: 0px solid transparent;
  border-radius: 26px;
`;

export const SpanTextWrapper = styled.span`
  margin-left: 9.76px;

  font-family: Roboto, sant-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.02em;
`;

export const OtherDescriptionToSignUp = styled.p`
  font-family: Roboto, sant-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.176;
  letter-spacing: 0.04em;
  color: var(--main-text-color);

  margin-bottom: 20px;
`;

export const SignInFormWrapper = styled.form`
  align-items: left;
`;
export const LabelInputForm = styled.label`
  display: block;
  margin-bottom: 30px;
`;
export const FormInputDescription = styled.span`
  font-family: Roboto, sant-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.176;
  letter-spacing: 0.04em;
  color: #000;
  display: inline-block;
  text-align: left;
  margin-bottom: 10px;
`;
export const FormInput = styled.input`
  display: block;
  width: 265px;
  height: 52px;
  border: 0px solid transparent;
  border-radius: 30px;
  background-color: #f6f7fb;
  padding: 17px 20px;

  font-family: Roboto, sant-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.04em;
`;
export const FormBtn = styled.button`
  width: 125px;
  height: 44px;
  border: 0px solid transparent;
  border-radius: 16px;
  margin-right: ${props => (props.marginRigth15 ? '15px' : '0px')};
  background-color: ${props =>
    props.accentBGColor ? `var(--accent-color)` : `#f6f7fb`};
  text-transform: uppercase;
  font-family: Roboto, sant-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  color: ${props => (props.whiteColor ? `#fff` : `var(--main-text-color)`)};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
