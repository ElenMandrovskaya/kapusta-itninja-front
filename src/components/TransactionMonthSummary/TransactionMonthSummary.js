import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "moment/locale/ru";
import moment from "moment";
import { Summary, Title, SummaryList, SummaryItem  } from "./TransactionMonthSummary.styled";
import * as transactionsOperations from "../../redux/transactions/transactions-ops";

const TransactionMonthSummary = ({summary, type}) => {

    const summaryExp = useSelector(state => state.transactions.monthlyExp);
    const summaryInc = useSelector(state => state.transactions.monthlyInc);

    const dispatch = useDispatch();
    const date = useSelector(state => state.transactions.startDate)
    const year = date.getFullYear()

    useEffect( () => {
        type === 'Expenses' ? 
        dispatch(transactionsOperations.getSummaryExp(year)) :
        dispatch(transactionsOperations.getSummaryInc(year))
    }, [dispatch, year, type])

    return (
        <Summary>
            <Title>Сводка</Title>
            { type === 'Expenses' ? 
            (summaryExp && [...summaryExp].sort((prev, next) => next.month - prev.month).map(({month, value}) =>
            <SummaryList key={month}>
                    <SummaryItem >
                        <span>{moment(month).format("MMMM")}</span>
                        <span>{value}</span>
                    </SummaryItem>                
            </SummaryList>)) :
            (summaryInc && [...summaryInc].sort((prev, next) => next.month - prev.month).map(({month, value}) =>
            <SummaryList key={month}>
                    <SummaryItem >
                        <span>{moment(month).format("MMMM")}</span>
                        <span>{value}</span>
                    </SummaryItem>                
            </SummaryList>))
        }
        </Summary>
    );
};

export default TransactionMonthSummary;