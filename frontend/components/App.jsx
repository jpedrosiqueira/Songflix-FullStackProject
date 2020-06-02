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
import BrowseContainer from "./browse/browse_container";
import PlayVideoContainer from "./play_video/play_video_container";
import CatalogContainer from "./catalog/catalog_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/browse" component={BrowseContainer} />
            <ProtectedRoute path="/videos/:videoId" component={PlayVideoContainer} />
            <ProtectedRoute path="/search" component={CatalogContainer} />
        </Switch>
    </div>
);

export default App;