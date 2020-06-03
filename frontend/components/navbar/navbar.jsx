import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, demoLogin }) => {

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

    const personalNavBar = () => (    // if the user is signed in, render that page
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <Link to="/browse">
                        <img src="https://i.imgur.com/S48zVd3.png" alt="netflix-font" border="0" style={{ cursor: "pointer"}} />
                    </Link>
                    <Link to="/browse" style={{ textDecoration: "none" }}>
                        <p className="nav-bar-left-home">Home</p>
                    </Link>
                    {/* <p className="nav-bar-left-genres">Genres</p> */}


                    <div class="dropdown">
                        <button class="dropbtn-genres">Genres</button>
                        <div class="dropdown-content">
                            <Link to="/genres/rock" className="item-content">Rock</Link>
                            <Link to="/genres/alternative" className="item-content">Alternative</Link>
                            <Link to="/genres/pop" className="item-content">Pop</Link>
                        </div>
                    </div>


                    <p className="nav-bar-left-list">My List</p>
                </div>
            
                <div className="nav-bar-right">
                    <Link to="/search">
                        <div className="nav-bar-right-search"><i style={{ zIndex:"300" }} className="fa fa-search"></i></div>
                    </Link>
                    <p className="nav-bar-right-logout" onClick={logout}>Logout</p>

                </div>
            </div>
    );
    return currentUser ? personalNavBar() : sessionLinks() // Checking if the user is logged in or not
}

export default NavBar;