import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Balance from "../../components/Balance/Balance";
import GoToStatementsButton from "../../components/GoToStatementsButton/GoToStatementsButton.jsx"
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm";
import TransactionsExpense from "../../components/TransactionsExpense/TransactionsExpense";
import TransactionsIncome from "../../components/TransactionsIncome/TransactionsIncome";
import TransactionsIncForm from "../../components/TransactionsIncForm/TransactionsIncForm";
import { Container } from "../../app/App.styled";

const TransactionsPage = () => {
    return (
        <Container>
            {/* <Balance /> */}
            <GoToStatementsButton />
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Расход</Tab>
                        <Tab>Доход</Tab>
                    </TabList>
                    <TabPanel>
                        <TransactionsExpForm />
                        <TransactionsExpense />
                    </TabPanel>
                    <TabPanel>
                        <TransactionsIncForm />
                        <TransactionsIncome />
                    </TabPanel>
                </Tabs>
            </div> 
        </Container>
    );
};

export default TransactionsPage;