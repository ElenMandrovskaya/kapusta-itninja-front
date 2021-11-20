import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { googleAuth } from '../../redux/auth/auth-slice';
import * as authOperations from '../../redux/auth/auth-operations';

function GoogleRedirect() {
    const dispatch = useDispatch();
    const location = useLocation();

    const email = new URLSearchParams(location.search).get('email'); //отримав зі строки емайл
    console.log(email);
    dispatch(authOperations.googleAuth(email));

    // dispatch(googleAuth(email));
    return (
        <section>
            <div>
                <h2>Redirecting...</h2>
            </div>
        </section>
    );
}

export default GoogleRedirect;
