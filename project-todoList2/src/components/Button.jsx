import React from "react"
import PropTypes from 'prop-types'
import {TodoContext} from '../provider/TodoProvider'


// our button component that is housed on our header
// Takes in color text and onclick props
// Color and text will change based on our turnery and onclickfn is a function being prop drilled 
// from app that triggers our toggle state in app that shows and adds our add task
function Button ({color,text}) {

    const {changeToggle} = React.useContext(TodoContext);

    return (
        // Button element that makes up our button component
        <button
        // set our onclick to our function thats been passed 
        onClick={changeToggle}
        // set our value to our text prop passed
        value={text}
        // set our style and change its color based on the color prop that is passed
        style={{backgroundColor : color}}
        className="btn">
            {/* put our text in the value */}
            {text}
        </button>
    )
}

// create default props incase nothing is passed for color or text
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add Task'
}

// check our prop types to make sure text and color are always a string and onclickFn is always a function
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button