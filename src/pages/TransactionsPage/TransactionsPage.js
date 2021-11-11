import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm";
import TransactionsExpense from "../../components/TransactionsExpense/TransactionsExpense";
import TransactionsIncome from "../../components/TransactionsIncome/TransactionsIncome";
import TransactionsIncForm from "../../components/TransactionsIncForm/TransactionsIncForm";

const TransactionsPage = () => {
    return (
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
    );
};

export default TransactionsPage;