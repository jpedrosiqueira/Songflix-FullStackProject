import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'SIGN IN',
    navLink: <Link to="/" style={{ textDecoration: "none", color: "red"}}>Sign Up</Link>
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);