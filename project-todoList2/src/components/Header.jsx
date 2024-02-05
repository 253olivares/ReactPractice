import React from "react";
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom";
import {TodoContext} from '../provider/TodoProvider'

// header component
function Header ({title}){

    const {toggle,connecting} = React.useContext(TodoContext);
    
    // Variable that uses the useLocation hook available in react router dom extension
    const location = useLocation();

    return (
        // React Fragment
        <React.Fragment>
            {/* Header */}
            <header className="header">
                {/* Display our title prop passed down from app */}
                <h1>{title}</h1>
                {/* The useLocation hook listens and reads our route from the parent component to check and see where we are take
                in this case we are calling our pathname so we can check and see if we are on the home page or not
                if it is then we render our button that adds task
                
                Our button component uses a turnery for our color attribute that checks to see if our add task is exposed. if it is then ser our button red and pass the remove add task as our text props
                Otherwise if hidden then we want to set the color to be green and pass the text add task
                
                Just like before we have another nested turnery that hides our button in its entirety when we are trying to connect
                to the server to avoid letting the user interact with it
                */}
                { connecting &&  location.pathname === '/'&& <Button color={toggle ? 'red' : 'green'} text={toggle ? 'Remove Add Task' : 'Add Task'}/> }
            </header>
        </React.Fragment>
    )
}

// Proptypes to set our value types for our props so title will always be a string when passed
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// if no title is passed default to task tracker
Header.defaultProps = {
    title:'Task Tracker'
}

// css styling in react
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header;