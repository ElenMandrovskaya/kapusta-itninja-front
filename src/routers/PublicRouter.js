import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ children, restricted = false, redirectedTo = '/transactions', ...routeProps }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    // console.log(shouldRedirect)
    return <Route {...routeProps}>
        {shouldRedirect ? <Redirect to={redirectedTo} /> : children }
        </Route>
};