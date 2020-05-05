import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, demoLogin }) => {

    const sessionLinks = () => (        // linking the user to sessions if they're not logged in
        <nav className="login-buttons">
            <div className="btn-demo">
                <p onClick={demoLogin} >Free Demo</p>
            </div>
            <div className="btn-login">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            </div>
        </nav>
    );

    const personalGreeting = () => (    // if the user is signed in, render that page
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <img src="https://i.imgur.com/S48zVd3.png" alt="netflix-font" border="0" style={{ cursor: "pointer"}} />
                    <p className="nav-bar-left-home">Home</p>
                    <p className="nav-bar-left-genres">Genres</p>
                    <p className="nav-bar-left-list">My List</p>
                </div>
                <div className="nav-bar-right">
                    <p className="nav-bar-right-search"><i className="fa fa-search"></i></p>
                <p className="nav-bar-right-logout" onClick={logout}>Logout </p>

                </div>
            </div>
    );
    return currentUser ? personalGreeting() : sessionLinks() // Checking if the user is logged in or not
}

export default Greeting;