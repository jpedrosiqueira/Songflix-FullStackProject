import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors} from '../../actions/session_actions';
import SignupSessionForm from './signup_session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'SIGN UP',
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoLogin: demoUser => dispatch(login(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);