// import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { authSelectors } from "../redux/auth/auth-selectors";

export default function PrivateRoute({ children, redirectedTo = '/', ...routeProps }) {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return <Route {...routeProps}>
        {isLoggedIn ? children : <Redirect to={redirectedTo}/>}
    </Route>;
};