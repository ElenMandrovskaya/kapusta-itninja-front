// import { render } from "@testing-library/react";
import React from "react";
// import TransactionsPage from "../../pages/TransactionsPage/TransactionsPage";
import { Img, Title } from "./GoBackHomeButton.styled";
import { NavLink } from "react-router-dom";
// import arrowButton from "../../images/arrow-back.svg";

const GoBackHomeBtn = () => {
  return (
    <NavLink
      to="/transactions"
      style={isActive => ({
        color: "rgba(82, 85, 95, 0.7)",
        display: "flex",

        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "14px",
        letterSpacing: "0.04em",
        alignItems: "center",
        textAlign: "center",
      })}
    >
      <Img />
      <Title>Вернутся на главную</Title>
    </NavLink>
  );
};

export default GoBackHomeBtn;
