// import prop types from our proptypes module to help check for correct value types and as well
// utilize default props for when no values are passed 
import PropTypes from 'prop-types'

// defining our prop function to create react fragments where were gonna make a turnery to return diff fragments 
// depending on if our prop is true or not 
function UserGreeting(props){
// Welcome message will be our elements returned if true
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}!</h2>;
// Login prompt will be our elements if false 
    const loginPrompt = <h2 className="login-prompt">Please login to continue!</h2>;
// Returning our fragment depending on what our prop passes from parent component 
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

// Define our props value types to avoid passing incorrect values
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
// We create default values incase nothing has been received from our props 
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}


export default UserGreeting;