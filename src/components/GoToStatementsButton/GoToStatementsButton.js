import React from 'react';
import { Span, Img } from './GoToStatementsButton.styled';
import { NavLink } from 'react-router-dom';
import reportIcon from '../../images/report-icon.svg';

const StatementBtn = () => {
  return (
    <NavLink
      to="/reports/costs"
      style={isActive => ({
        color: 'rgba(82, 85, 95, 0.7)',
        display: 'flex',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.04em',
        alignItems: 'center',
        textAlign: 'center',
      })}
    >
      <Span>Перейти к отчетам</Span>
      <Img src={reportIcon} alt="report link" />
    </NavLink>
  );
};
export default StatementBtn;
