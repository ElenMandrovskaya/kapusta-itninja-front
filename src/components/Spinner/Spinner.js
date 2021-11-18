import { useState } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  position: fixed;
  left: 40%;
  top: 20%;
`;

export default function Spinner() {
  return (
      <CircleLoader color="#FF751D" loading={useState(true)} css={override} size={180} />
  );
}