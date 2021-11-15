import React, { useEffect } from 'react';
// lazy, Suspense,
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TransactionPage from '../pages/TransactionsPage/TransactionsPage';
import RegistrationPage from '../pages/RegistrationPage';
import ReportsPage from '../pages/ReportsPage/ReportsPage';

import PrivateRoute from '../routers/PrivateRouter';
import PublicRoute from '../routers/PublicRouter';

import * as authOperations from '../redux/auth/auth-operations';
import { authSelectors } from '../redux/auth/auth-selectors';
import { BgGrey, AppWrap, Container } from './App.styled';
import BgUnAuth from '../components/BgUnAuth/BgUnAuth';
import BgAuth from '../components/BgAuth/BgAuth';
import Header from '../components/Header/Header';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppWrap>
      <BgGrey />
      {isLoggedIn ? <BgAuth /> : <BgUnAuth />}
      <Header />
      <Container>
        {/* <Suspense fallback={<Spinner/>}> */}
        <Switch>
          <PublicRoute exact path="/" edirectTo="/transactions" restricted>
            <RegistrationPage />
          </PublicRoute>

          <PrivateRoute exact path="/transactions">
            <TransactionPage />
          </PrivateRoute>

          <PrivateRoute exact path="/reports">
            <ReportsPage />
          </PrivateRoute>
        </Switch>
      </Container>
      {/* </Suspense> */}
      <ToastContainer />
    </AppWrap>
  );
}
