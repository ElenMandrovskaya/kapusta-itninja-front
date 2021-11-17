import { useState } from "react";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Spinner() {
  return (
      <GridLoader color="#ff0d82" loading={useState(true)} css={override} size={80} />
  );
}