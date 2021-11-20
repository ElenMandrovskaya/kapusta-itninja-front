import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "../routers/PrivateRouter";
import PublicRoute from "../routers/PublicRouter";

import { authSelectors } from "../redux/auth/auth-selectors";
import { BgGrey, AppWrap, Container } from "./App.styled";
import BgUnAuth from "../components/BgUnAuth/BgUnAuth";
import BgAuth from "../components/BgAuth/BgAuth";
import Header from "../components/Header/Header";
import Spinner from "../components/Spinner/Spinner";
import * as authOperations from "../redux/auth/auth-operations";

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const TransactionPage = lazy(() => import('../pages/TransactionsPage/TransactionsPage'));
const ReportsPage = lazy(() => import('../pages/ReportsPage/ReportsPage'));

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
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <PublicRoute exact path="/" edirectTo="/transactions" restricted>
            <RegistrationPage />
          </PublicRoute>
          <PrivateRoute exact path="/transactions">
            <TransactionPage />
          </PrivateRoute>
          <PrivateRoute path="/reports">
            <ReportsPage />
          </PrivateRoute>
        </Switch>
        </Suspense>
      </Container>
      <ToastContainer />
    </AppWrap>
  );
}


