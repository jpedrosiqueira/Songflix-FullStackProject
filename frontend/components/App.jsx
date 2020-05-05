import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Browse from "./browse/browse";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/browse" component={Browse} />
        </Switch>
    </div>
);

export default App;