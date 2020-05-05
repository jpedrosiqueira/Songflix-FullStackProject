import React from "react";
import GreetingContainer from "../greeting/greeting_container";

class Browse extends React.Component {
    render() {
        return (
            <div>
                <header className="signup-header">
                    <GreetingContainer />
                </header>
            </div>
        )
    }
}

export default Browse;