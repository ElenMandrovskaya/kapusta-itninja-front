import React from 'react';
import { Div } from '../StatisticAmounts/StatisticAmounts.styled';
import { Costs, P, Profit, Vl } from './StatisticAmounts.styled';

const StatisticAmounts = () => {
  return (
    <Div>
      <P>Расходы: {<Costs> - 5 555 грн.</Costs>} </P>
      <Vl />
      <P>Доходы:{<Profit> + 7 777 грн.</Profit>} </P>
    </Div>
  );
};

export default StatisticAmounts;
