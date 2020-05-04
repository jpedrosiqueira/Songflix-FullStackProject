import React from 'react';


// The SessionForm component should be responsible for a number of tasks:

class LoginSessionForm extends React.Component {

    // Render a controlled component with state governed by user interface.
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
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
                    <header>
                        <div className="logo">
                            <img src="https://fontmeme.com/permalink/200430/13edf491132c318b676c6df48723cb83.png" alt="netflix-font" border="0" />
                        </div>
                    </header>
                <div className="showcase" >
                    <div className="login-form-container">

                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <br />
                            <h1>Sign in</h1>
                            <div className="login-form">
                                <br />
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="E-mail"
                                    className="login-input"
                                />
                                <br />
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    className="login-input"
                                />
                            </div>
                            <div className="display-errors">
                                {this.renderErrors()}
                            </div>
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            <div className="signup-message">
                                New to SongFlix? {this.props.navLink} instead.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default LoginSessionForm;