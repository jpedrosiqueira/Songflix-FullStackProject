import React from 'react';
import GreetingContainer from "../greeting/greeting_container"

 
// The SessionForm component should be responsible for a number of tasks:

class SignupSessionForm extends React.Component {

    // Render a controlled component with state governed by user interface.
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    //Invoke the processForm prop when the 'Submit' button is clicked.
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoLogin(e) {
        e.preventDefault();
        this.setState({
            email: 'demouser@songflix.com',
            password: 'password'
        })
    }

    handleClearErrors(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    // Render a list of error messages if any are present.
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    // Render a "Log in" or "Sign up" header based on the formType prop.
    render() {
        return (
            <div>
                    <header className="signup-header">
                        <div className="logo">
                            <img src="https://fontmeme.com/permalink/200430/13edf491132c318b676c6df48723cb83.png" alt="netflix-font" border="0" />
                        </div>
                    <GreetingContainer />
                    </header>
                <div className="showcase" >
                    <div className="signup-form-container">

                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            <h1 id="form-title">Unlimited music videos, concerts, and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <br/>
                            {/* Please {this.props.formType} or {this.props.navLink} */}
                            <div className="signup-form">
                                <br/>
                                    <input 
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="E-mail"
                                        className="signup-input"
                                    />
                                <br/>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                        className="signup-input"
                                    />
                            </div>
                                <div className="display-errors">
                                    {this.renderErrors()}
                                </div>
                                <input className="session-submit" type="submit" value={this.props.formType} />
                        </form>
                    </div>
                </div>
            </div>

        )
    }
};

export default SignupSessionForm;