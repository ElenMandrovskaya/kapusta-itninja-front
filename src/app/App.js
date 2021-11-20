import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import PrivateRoute from '../routers/PrivateRouter';
import PublicRoute from '../routers/PublicRouter';

import { authSelectors } from '../redux/auth/auth-selectors';
import { BgGrey, AppWrap, Container } from './App.styled';
import BgUnAuth from '../components/BgUnAuth/BgUnAuth';
import BgAuth from '../components/BgAuth/BgAuth';
import Header from '../components/Header/Header';
import Spinner from '../components/Spinner/Spinner';
import * as authOperations from '../redux/auth/auth-operations';

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const TransactionPage = lazy(() => import('../pages/TransactionsPage/TransactionsPage'));
const ReportsPage = lazy(() => import('../pages/ReportsPage/ReportsPage'));
const ExpensesFormPage = lazy(() => import('../pages/ExpensesIncomeFormPage/ExpensesFormPage'));
const IncomesFormPage = lazy(() => import('../pages/ExpensesIncomeFormPage/IncomesFormPage'));
const GoogleRedirect = lazy(() => import('../pages/GoogleRedirect/GoogleRedirect'));

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
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <PublicRoute exact path="/" redirectTo="/transactions" restricted>
                            <RegistrationPage />
                        </PublicRoute>
                        <PublicRoute path="/google-redirect" redirectTo="/transactions" restricted>
                            <GoogleRedirect />
                        </PublicRoute>
                        <PrivateRoute exact path="/transactions">
                            <TransactionPage />
                        </PrivateRoute>
                        <PrivateRoute path="/reports">
                            <ReportsPage />
                        </PrivateRoute>
                        <PrivateRoute path="/transactions_expenses_form">
                            <ExpensesFormPage />
                        </PrivateRoute>
                        <PrivateRoute path="/transactions_incomes_form">
                            <IncomesFormPage />
                        </PrivateRoute>
                    </Switch>
                </Suspense>
            </Container>
            <ToastContainer />
        </AppWrap>
    );
}