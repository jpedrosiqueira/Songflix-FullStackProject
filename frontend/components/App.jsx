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
import SearchContainer from "./search/search_container";
import RockContainer from "./genres/rock_container";
import AlternativeContainer from "./genres/alternative_container";
import PopContainer from "./genres/pop_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/browse" component={BrowseContainer} />
            <ProtectedRoute path="/videos/:videoId" component={PlayVideoContainer} />
            <ProtectedRoute path="/search" component={SearchContainer} />
            <ProtectedRoute path="/genres/rock" component={RockContainer} />
            <ProtectedRoute path="/genres/alternative" component={AlternativeContainer} />
            <ProtectedRoute path="/genres/pop" component={PopContainer} />
        </Switch>
    </div>
);

export default App;