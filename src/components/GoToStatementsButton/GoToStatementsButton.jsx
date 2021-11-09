import React from 'react';
import {
  Link,
  Span,
  Img,
} from '../GoToStatementsButton/GoToStatementsButton.styled';
import reportIcon from '../../images/report-icon.svg';

const StatementBtn = () => {
  return (
    <Link>
      <Span>Перейти к отчетам</Span>
      <Img src={reportIcon} alt="report link" />
    </Link>
  );
};
export default StatementBtn;
