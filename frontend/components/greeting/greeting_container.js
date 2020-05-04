import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions"
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities: { users } }) => ({    // map slice of state to props object
    currentUser: users[session.id]   // getting current user's information from our state
});           

const mapDispatchToProps = dispatch => ({       // create action dispatcher
    logout: () => dispatch(logout())
});

export default connect (mapStateToProps, mapDispatchToProps)(Greeting)