import React from 'react';
import {
  Div,
  Title,
  ProfitSpan,
  Vl,
  CostSpan,
} from './StatisticAmounts.styled';
// import { Costs, P, Profit, Vl, Span } from './StatisticAmounts.styled';

const StatisticAmounts = () => {
  return (
    <Div>
      <Title>Расходы: {<CostSpan> - 5 555 грн.</CostSpan>} </Title>
      <Vl />
      <Title>Доходы:{<ProfitSpan> + 7 777 грн.</ProfitSpan>} </Title>
    </Div>
  );
};

export default StatisticAmounts;
