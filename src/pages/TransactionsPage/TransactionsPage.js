import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Balance from "../../components/Balance/Balance";
import GoToStatementsButton from "../../components/GoToStatementsButton/GoToStatementsButton"
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm";
import TransactionsExpense from "../../components/TransactionsExpense/TransactionsExpense";
import TransactionsIncome from "../../components/TransactionsIncome/TransactionsIncome";
import TransactionsIncForm from "../../components/TransactionsIncForm/TransactionsIncForm";
import { AppWrap, BalannceTab } from "../../app/App.styled";
import * as authOperations from "../../redux/auth/auth-operations"
const TransactionsPage = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(authOperations.getCurrentUser());
    }, [dispatch]);
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
        </AppWrap>
    );
};

export default TransactionsPage;
