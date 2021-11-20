import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mobile, Default } from "../../utils/mediaQuery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Balance from "../../components/Balance/Balance";
import GoToStatementsButton from "../../components/GoToStatementsButton/GoToStatementsButton"
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm";
import TransactionsExpense from "../../components/TransactionsExpense/TransactionsExpense";
import TransactionsIncome from "../../components/TransactionsIncome/TransactionsIncome";
import TransactionsIncForm from "../../components/TransactionsIncForm/TransactionsIncForm";
import { AppWrap, BalannceTab } from "../../app/App.styled";

const TransactionsPage = () => {
    // const [transactions, setTransactions] = useState("");
    // const onSubmit = ({typeTransaction, date, category, description, value, categoryId }) => {
    //     const newTransactons = {
    //         typeTransaction,
    //         date,
    //         description,
    //         category,
    //         value,
    //         categoryId
    // }
    //     setTransactions((transactions) => [ newTransactons, ...transactions]);
    // }
    // console.log(transactions)
    return (
        <AppWrap>
<<<<<<< HEAD
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
                        <TransactionsExpForm/>
                        <TransactionsExpense />
                    </TabPanel>
                     <TabPanel>
                        <TransactionsIncForm />
                        <TransactionsIncome />
                    </TabPanel>
                </Tabs>
            </AppWrap> 
=======
            <Default>
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
            </Default>

            <Mobile>
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
                            <NavLink to="/transactions_expenses_form" className="Add_button">
                                Добавить
                            </NavLink>
                            <TransactionsExpense transactions={transactions}/>
                        </TabPanel>
                        <TabPanel>
                            <NavLink to="/transactions_incomes_form" className="Add_button">
                                Добавить
                            </NavLink>
                            <TransactionsIncome transactions={transactions}/>
                        </TabPanel>
                    </Tabs>
                </AppWrap>
            </Mobile>
>>>>>>> bedb7111e17afdfd5aa63a1cf6786d3fab93a78f
        </AppWrap>
    );
};

export default TransactionsPage;
