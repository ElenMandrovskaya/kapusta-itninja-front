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
    // const [type, setType] = useState("Expenses");
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
    // const typeIncome = () => { setType("Incomes")}
    // console.log(transactions)
    return (
        <AppWrap>
            <BalannceTab> 
                <Balance />
                <GoToStatementsButton />
            </BalannceTab>
            <AppWrap>
                <Tabs>
                    <TabList>
                        <Tab
                            // onClick={() => { setType("Expenses") }}
                        >Расход</Tab>
                        <Tab
                            // onClick={() => { setType("Incomes") }}
                        >Доход</Tab>
                    </TabList>
                    <TabPanel>
                        <TransactionsExpForm
                            onSubmit={onSubmit}
                        // type={type}
                        />
                        <TransactionsExpense
                            transactions={transactions}
                            // type={type}
                        />
                    </TabPanel>
                     <TabPanel 
                    //  onClick={typeIncome}
                     >
                        <TransactionsIncForm
                            onSubmit={onSubmit}
                            // type={type}
                        />
                        <TransactionsIncome
                            transactions={transactions}
                            // type={type}
                        />
                    </TabPanel>
                </Tabs>
            </AppWrap> 
        </AppWrap>
    );
};

export default TransactionsPage;
