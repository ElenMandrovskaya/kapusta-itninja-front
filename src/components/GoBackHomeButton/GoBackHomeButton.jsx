// import { render } from '@testing-library/react';
import React from 'react';
// import TransactionsPage from '../../pages/TransactionsPage/TransactionsPage';
import { Img, Link, Title } from './GoBackHomeButton.styled';
// import arrowButton from '../../images/arrow-back.svg';

const GoBackHomeBtn = () => {
  return (
    <Link to="/transactions">
      <Img />
      <Title>Вернутся на главную</Title>
    </Link>
  );
};

export default GoBackHomeBtn;
