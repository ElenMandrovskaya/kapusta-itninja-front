// import { render } from '@testing-library/react';
import React from 'react';
// import TransactionsPage from '../../pages/TransactionsPage/TransactionsPage';
import { Img, Title } from './GoBackHomeButton.styled';
import { Link, NavLink } from 'react-router-dom';
// import arrowButton from '../../images/arrow-back.svg';

const GoBackHomeBtn = () => {
  return (
    <NavLink to="/main">
      <Img />
      <Title>Вернутся на главную</Title>
    </NavLink>
  );
};

export default GoBackHomeBtn;
