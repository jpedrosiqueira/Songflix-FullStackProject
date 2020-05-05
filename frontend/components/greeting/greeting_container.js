import { connect } from 'react-redux';
import { logout, login } from "../../actions/session_actions"
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities: { users } }) => ({    // map slice of state to props object
    currentUser: users[session.id]   // getting current user's information from our state
});           

const mapDispatchToProps = (dispatch, ownProps) => {
    return {       
    logout: () => dispatch(logout()),
        demoLogin: () => dispatch(login({email: 'demouser@songflix.com',
            password: 'password'}))
}};

export default connect (mapStateToProps, mapDispatchToProps)(Greeting)