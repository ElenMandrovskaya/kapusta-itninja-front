import React from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';

import TransactionPage from '../pages/TransactionsPage/TransactionsPage';
import RegistrationPage from '../pages/RegistrationPage';
import { ReportsPage } from '../pages/ReportsPage/ReportsPage';

import PrivateRoute from '../routers/PrivateRouter';
import PublicRoute from '../routers/PublicRouter';

import * as authOperations from '../redux/auth/auth-operations';
import { authSelectors } from '../redux/auth/auth-selectors'
import { BgGrey } from './App.styled';
import { BgUnAuth } from '../components/BgUnAuth/BgUnAuth';
import { BgAuth } from '../components/BgAuth/BgAuth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn)
  return (
    <>
      <BgGrey />
      {isLoggedIn ? <BgAuth/> : <BgUnAuth />}
      {/* <Suspense fallback={<Spinner/>}> */}
      <Switch>
        <PublicRoute exact path="/" edirectTo="/transactions" restricted>
          <RegistrationPage />
        </PublicRoute>

        <PrivateRoute exact path="/transactions"  >
          <TransactionPage />
        </PrivateRoute>

        <PrivateRoute exact path="/reports" >
          <ReportsPage />
        </PrivateRoute>
      </Switch>
        // {/* </Suspense> */}
      </>
  );
}
