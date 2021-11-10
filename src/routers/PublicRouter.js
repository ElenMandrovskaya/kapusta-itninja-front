// import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { authSelectors } from "../redux/auth/auth-selectors";

export default function PublicRoute({ children, restricted = false, redirectedTo = '/', ...routeProps }) {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // const shouldRedirect = isLoggedIn && restricted;
    // console.log(shouldRedirect)
    return <Route {...routeProps}>
        {shouldRedirect ? <Redirect to={redirectedTo} /> : children }
        </Route>
};