import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
// importing react icons

import {TodoContext} from '../provider/TodoProvider'
import React from 'react';

const Task = ({task}) => {

    const {changeReminder,deleteTask} = React.useContext(TodoContext);

    return (
        // Constructing our task component
        // div where we create our className using a turnery to determine what classes we want to attach. If true add a reminder class
        // Then create a doubleClick attribute where we create a function that runs on Toggle to pass our task id to our parent component to change our
        // tasks reminder
        
        <div className={`task ${task.reminder && 'reminder'}`}  onDoubleClick={()=> changeReminder(task.id)}>
            {/* our task display put down our task text and then render a times symbol with styles
            onclick of our on delete prop that is being passed from the parent component */}
            <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={()=>deleteTask(task.id)} /></h3>
            {/* Display our day in our p tag */}
            <p>{task.day}</p>
            <p><Link to={`/task/${task.id}`}>View Details</Link></p>
        </div>
    )
}

export default Task