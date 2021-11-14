import React from 'react';
import {
  Span,
  Img,
} from './GoToStatementsButton.styled';
import { NavLink } from 'react-router-dom';
import reportIcon from '../../images/report-icon.svg';
// import TransactionsPage from '../../pages/TransactionsPage/TransactionsPage';

const StatementBtn = () => {
  return (
    // <Link>
    <NavLink
      to="/reports"
      // style={isActive => ({
      //   color: isActive ? 'green' : 'blue',
      // })}
      // component={TransactionsPage}
    >
      <Span>Перейти к отчетам</Span>
      <Img src={reportIcon} alt="report link" />
    </NavLink>
    /* </Link> */
  );
};
export default StatementBtn;
