import React, {useState, useEffect} from "react";
import { Summary, Title, SummaryList, SummaryItem  } from "./TransactionMonthSummary.styled"
import {getSummaryExpense, getSummaryIncome} from "../../api/summaryApi"

const TransactionMonthSummary = () => {
    const [summary, setSummary] = useState("");

    useEffect(() => {
        async function SumExp() {
    try {
        const summary = await getSummaryExpense();
        setSummary(summary)
      } catch (error) {
        console.log(error);
      }
    }
    SumExp()
}, [])
console.log(summary)
    return (
        <Summary>
            <Title>Сводка</Title>
            {summary && summary.map(({month, value}) =>
            <SummaryList>
                    <SummaryItem >
                        <span>{month}</span>
                        <span>{value}</span>
                    </SummaryItem>                
            </SummaryList>)}
        </Summary>
    );
};

export default TransactionMonthSummary;