import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Balance from "../../components/Balance/Balance";
import GoToStatementsButton from "../../components/GoToStatementsButton/GoToStatementsButton"
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm";
import TransactionsExpense from "../../components/TransactionsExpense/TransactionsExpense";
import TransactionsIncome from "../../components/TransactionsIncome/TransactionsIncome";
import TransactionsIncForm from "../../components/TransactionsIncForm/TransactionsIncForm";
import { AppWrap } from "../../app/App.styled";

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState();
    const onSubmit = ({ date, category, description, amount }) => {
        const newTransactons = {
            date,
            description,
            category,
            amount
        }
        setTransactions(newTransactons);
    }

    return (
        <AppWrap>
            <Balance />
            <GoToStatementsButton />
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
                        <TransactionsIncForm />
                        <TransactionsIncome />
                    </TabPanel>
                </Tabs>
            </AppWrap> 
        </AppWrap>
    );
};

export default TransactionsPage;