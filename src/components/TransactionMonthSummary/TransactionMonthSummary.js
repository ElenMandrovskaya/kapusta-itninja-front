import React, {useState, useEffect} from "react";
import { Summary, Title, SummaryList, SummaryItem  } from "./TransactionMonthSummary.styled"
import {getSummaryExpense, getSummaryIncome} from "../../api/summaryApi"
import getStoredState from "redux-persist/es/getStoredState";

const TransactionMonthSummary = () => {
    // const expenseSummary = getSummaryExpense();
//     const [month, setMonth] = useState("");
//     const [amount, setAmount] = useState("");
//     useEffect(() => {
//         async function SumExp() {
//     try {
//         const data = await getSummaryExpense();
//         setMonth
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     SumExp()
// })
//     console.log()
    return (
        <Summary>
            <Title>Сводка</Title>
            <SummaryList>
                    <SummaryItem >
                        <span>{month}</span>
                        <span>{amount}</span>
                    </SummaryItem>                
            </SummaryList>
        </Summary>
    );
};

export default TransactionMonthSummary;