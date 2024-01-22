import PropTypes from 'prop-types';
// Import pop types to declare prop value types and create defaults for incase any props are missing the framework will declare default values to avoid the code from breaking
function Students (props){
    // Create functions and declaring props being passed through
    return (
        // Take those props and display them in our div
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "yes": "No"}</p>
        </div>
    );
}
// Declare prop types
Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    
}
// Create default prop values incase we are missing any when creating our component
Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Students