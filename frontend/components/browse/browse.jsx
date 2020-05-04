import React from "react";

class Browse extends React.Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    
                    <div className="nav-bar-left">
                        <img src="https://i.imgur.com/S48zVd3.png" alt="netflix-font" border="0" />
                        <p className="nav-bar-left-home">Home</p>
                        <p className="nav-bar-left-genres">Genres</p>
                        <p className="nav-bar-left-list">My List</p>
                    </div>
                    <div className="nav-bar-right">
                        <p className="nav-bar-right-search"><i className="fa fa-search"></i></p>
                        <p className="nav-bar-right-logout">Logout</p>
                    </div>
                </header>

            </div>
        )
    }
}

export default Browse;