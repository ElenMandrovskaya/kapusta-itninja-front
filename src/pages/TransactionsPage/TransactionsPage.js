import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Balance from '../../components/Balance/Balance';
import GoToStatementsButton from '../../components/GoToStatementsButton/GoToStatementsButton';
import TransactionsExpForm from '../../components/TransactionsExpForm/TransactionsExpForm';
import TransactionsExpense from '../../components/TransactionsExpense/TransactionsExpense';
import TransactionsIncome from '../../components/TransactionsIncome/TransactionsIncome';
import TransactionsIncForm from '../../components/TransactionsIncForm/TransactionsIncForm';
import { AppWrap, BalannceTab } from '../../app/App.styled';

const TransactionsPage = () => {
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
            <TransactionsExpForm />
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
