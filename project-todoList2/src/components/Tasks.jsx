import React from "react";
import Task from "./Task";
import {TodoContext} from '../provider/TodoProvider'

// Task component that takes our array passed down from app jsx in task and uses our map function to loop through our array
// Our map function returns our task object and index 
// After returning our task we pass it down again into our task component as a task property and assign a key that is marked using our id
// after which we pass down our onDelete and onToggle properties again

// Deconstruct our props and take out our tasks onDelete onToggle
const Tasks = () =>{

    const {tasks} = React.useContext(TodoContext);

    return(
        <div>
            {/* Map function */}
            {tasks.map((task, index)=> (
                // Task Component prop drilling our functions
                <Task key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default Tasks;