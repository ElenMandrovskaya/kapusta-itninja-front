import React from 'react';
import { Img, Link, Span } from './GoBackHomeButton.styled';
import arrowButton from '../../images/arrow-back.svg';

const GoBackHomeBtn = () => {
  return (
    <Link>
      <Img src={arrowButton} alt="" />
      <Span>Вернутся на главную</Span>
    </Link>
  );
};

export default GoBackHomeBtn;
