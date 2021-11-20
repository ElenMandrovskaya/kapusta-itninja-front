import React from 'react';

import { Div, Title, ProfitSpan, Vl, CostSpan } from './StatisticAmounts.styled';

const StatisticAmounts = ({ categoriesCosts, categoriesIncome, hasError }) => {
    let totalCosts = 0;
    let totalIncome = 0;

    if (categoriesCosts) {
        const sum = categoriesCosts.reduce((acc, amount) => {
            return acc + amount.total;
        }, 0);
        totalCosts = sum.toLocaleString();
    }

    if (categoriesIncome) {
        const sum = categoriesIncome.reduce((acc, amount) => {
            return acc + amount.total;
        }, 0);
        totalIncome = sum.toLocaleString();
    }

    if (hasError) {
        totalCosts = 0;
        totalIncome = 0;
    }

    return (
        <Div>
            <Title>Расходы:{<CostSpan>- {totalCosts}.00 грн.</CostSpan>} </Title>
            <Vl />
            <Title>Доходы:{<ProfitSpan>+ {totalIncome}.00 грн.</ProfitSpan>} </Title>
        </Div>
    );
};

export default StatisticAmounts;
