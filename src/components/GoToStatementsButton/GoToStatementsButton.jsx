import React from 'react';
import { Link } from '../GoBackHomeButton/GoBackHomeButton.styled';
import { Svg } from '../GoToStatementsButton/GoToStatementsButton.styled';
// import { Link } from 'react-router-dom';

const StatementBtn = () => {
  return (
    <Link>
      <span>Перейти к отчетам</span>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="5 5 14 14"
      >
        <path
          d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
          fill="#52555f"
        />
        <path />
      </Svg>
    </Link>
  );
};
export default StatementBtn;
