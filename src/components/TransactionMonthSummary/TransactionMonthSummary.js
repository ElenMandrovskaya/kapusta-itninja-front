import React from "react";

import { Summary, Title, SummaryList, SummaryItem  } from "./TransactionMonthSummary.styled"

const TransactionMonthSummary = () => {
    
    return (
        <Summary>
            <Title>Сводка</Title>
            <SummaryList>
                    <SummaryItem  >
                        <span>месяц</span>
                        <span>сумма</span>
                    </SummaryItem>                
            </SummaryList>
        </Summary>
    );
};

export default TransactionMonthSummary;