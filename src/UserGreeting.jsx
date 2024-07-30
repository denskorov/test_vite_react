import PropTypes from "prop-types";

function UserGreeting(props) {

    const {isLoggedIn} = props;

    return isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>

}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool.isRequired,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting
