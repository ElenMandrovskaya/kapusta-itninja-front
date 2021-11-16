import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Balance from "../../components/Balance/Balance";
import GoToStatementsButton from "../../components/GoToStatementsButton/GoToStatementsButton"
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm";
import TransactionsExpense from "../../components/TransactionsExpense/TransactionsExpense";
import TransactionsIncome from "../../components/TransactionsIncome/TransactionsIncome";
import TransactionsIncForm from "../../components/TransactionsIncForm/TransactionsIncForm";
import { AppWrap, BalannceTab } from "../../app/App.styled";

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState('');
    const onSubmit = ({typeTransaction, date, category, description, amount, categoryId }) => {
        const newTransactons = {
            typeTransaction,
            date,
            description,
            category,
            amount,
            categoryId
    }
        setTransactions((transactions) => [ newTransactons, ...transactions]);
    }
    console.log(transactions)
    return (
        <AppWrap>
            <BalannceTab> 
                <Balance />
                <GoToStatementsButton />
            </BalannceTab>
            <AppWrap>
                <Tabs>
                    <TabList>
                        <Tab>Расход</Tab>
                        <Tab>Доход</Tab>
                    </TabList>
                    <TabPanel>
                        <TransactionsExpForm onSubmit={onSubmit}/>
                        <TransactionsExpense transactions={transactions}/>
                    </TabPanel>
                     <TabPanel>
                        <TransactionsIncForm onSubmit={onSubmit}/>
                        <TransactionsIncome transactions={transactions}/>
                    </TabPanel>
                </Tabs>
            </AppWrap> 
        </AppWrap>
    );
};

export default TransactionsPage;
