import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, redirectedTo = '/', ...routeProps }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return <Route {...routeProps}>
        {isLoggedIn ? children : <Redirect to={redirectedTo}/>}
    </Route>;
};