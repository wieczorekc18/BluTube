import React from 'react'

import MainApp from './main_app';
import { HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/auth/route_util'
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <Switch> */}
                <MainApp />
                <AuthRoute path="/login" component={LoginContainer} />
                <AuthRoute path="/signup" component={SignupContainer} />
            {/* </Switch> */}
        </HashRouter>
    </Provider>
);

export default Root;