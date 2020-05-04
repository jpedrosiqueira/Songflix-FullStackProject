import React from 'react';
import { Link } from 'react-router-dom';
import Browse from '../browse/browse'

const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => (        // linking the user to sessions if they're not logged in
        <nav className="login-buttons">
            <div className="btn-demo">
                <Link to="/browse" style={{ textDecoration: 'none', color: 'white' }}>Free Demo</Link>
            </div>
            <div className="btn-login">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            </div>
        </nav>
    );

    const personalGreeting = () => (    // if the user is signed in, render that page
            <div>
                <Link to="/browse" />
                <button className="btn-login" onClick={logout}>Log Out</button>
            </div>
    );
    return currentUser ? personalGreeting() : sessionLinks() // Checking if the user is logged in or not
}

export default Greeting;