import styled from "@emotion/styled";

export const AuthGoogleDescription = styled.p`
  font-family: Roboto, sant-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.176;
  letter-spacing: 0.04em;
  color: var(--main-text-color);

  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AuthGoogleBtn = styled.button`
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
  cursor: pointer;
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
  width: 265px;
`;
export const LabelInputForm = styled.label`
  display: block;
  margin-bottom: ${props => (props.marginBTM ? `40px` : `30px`)};
  cursor: pointer;
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
  width: 265px;
  height: 52px;
  border: 0px solid transparent;
  border-radius: 30px;
  background-color: #f6f7fb;
  padding: 17px 20px;

  font-family: ${props =>
    props.password ? `Montserrat` : `Roboto, sant-serif`};
  font-size: ${props => (props.password ? `44px` : `14px`)};
  font-weight: ${props => (props.password ? `400` : `500`)};
  line-height: ${props => (props.password ? `1.23` : `1.167`)};
  letter-spacing: ${props => (props.password ? `0em` : `0.04em`)};
  color: #000;
  outline: none;

  ::placeholder {
    color: ${props => (props.password ? `#000` : `#A6ABB9`)};
    font-size: ${props => (props.password ? `44px` : `14px`)};
  }
  /* @media (max-width: 1279px) {
    ::placeholder {
      color: #a6abb9;
      font-size: 14px;
      font-weight: 400px;
      letter-spacing: 0.04em;
      line-height: 1.167;
    }
  } */

  /* :focus,
  :hover {
    outline: 1px solid var(--accent-color);
  } */
`;

export const FormBtn = styled.button`
  width: 125px;
  height: 44px;

  border: 0px solid transparent;
  border-radius: 16px;
  margin-right: ${props => (props.marginRigth15 ? "15px" : "0px")};
  background-color: ${props =>
    props.submitBtn ? `var(--accent-color)` : `#f6f7fb`};
  cursor: pointer;

  text-transform: uppercase;
  font-family: Roboto, sant-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  color: ${props => (props.submitBtn ? `#fff` : `var(--main-text-color)`)};
  filter: ${props =>
    props.submitBtn
      ? ` drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));`
      : `drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));`};
`;

/** @jsx jsx */
// import { jsx, css } from "@emotion/react";

// const pinkInput = css`
//   background-color: pink;
// `;
// const RedPasswordInput = props => (
//   <input
//     type="password"
//     css={css`
//       background-color: red;
//       display: block;
//     `}
//     {...props}
//   />
// );

// render(
//   <div>
//     <RedPasswordInput placeholder="red" />
//     <RedPasswordInput placeholder="pink" css={pinkInput} />
//   </div>,
// );
