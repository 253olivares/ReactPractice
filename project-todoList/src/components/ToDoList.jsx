import React, {useState} from 'react'
// Import React and use State 

function ToDoList() {
    // todo list component

    // create task state this will keep track of our task array. Every time we make a change we will be mutating this array and having react rerender our dom
    // to reflect the change
    const [tasks,setTasks] = useState(["Eat Breakfast","Take a shower","Walk the dog"]);
    // New task will be our task within our input
    const [newTask, setNewTask] = useState("");
    // function to change our new task and set the input value 
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    // function that if our new task is not an empty string adds to our existing array at the very start
    function addTask() {
// Trim gets rid of any blank space
        if(newTask.trim()!== ""){
            // set tasks adds our new task to our existing array by spreading out our current tasks and appending the new one to the end
            setTasks((prevTasks)=>[...prevTasks, newTask]);
            // Clear our new task so our input is blank
            setNewTask("");
        }
    }
    // Delete tasks takes the index of the item in the array when it was renders and filters it out of the array with the i === index
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_,i)=> i!==index);
        setTasks(updatedTasks);
    }
    //  Move task up checks to make sure our index is greater than 0 if so we create a new const called task. We spread our current
    // task array creating a duplicate.
    // that we deconstruct the duplicated array 
    // Our task becomes the task the was one index below ours and the index that was below us becomes what our previous task index was.
    // This new task array is then set to replace our previous array
    // Page then updates and rerenders our array showing the change
    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    // Same as moveTaskUp but in reverse
    function moveTaskDown(index) {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return (
        <React.Fragment>
            {/* our Todo List */}
        <div className='to-do-list'>
            <h1>
                To-Do-List
            </h1>
            {/* This div is where we will be be using to create a new task
            we bind our task state to the value and create an onchange listener to run handle Input change every time our dom detects
            input*/}
            <div>
                <input 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange} />
                {/* Button Adds task to our array */}
                <button
                className='add-button'
                onClick={addTask}>
                    Add
                </button>
            </div>
            {/* Order list that maps our task when it detects a change in the state and rerenders new list with any changes to teh array.
            Alongside the new array we create an index that we use to keep track or todo listings */}
            <ol>
                {tasks.map((task,index)=> 
                <li
                key={index}
                >
                    {/* every rerender we add some additional on click listeners and buttons that keep track of the todos index and runs functions that
                    either deletes our todo moves it up or down */}
                    <span className='task'>{task}</span>
                    <button
                    className='delete-button'
                    onClick={()=> deleteTask(index)}>
                        Delete
                    </button>
                    <button
                    className='move-button'
                    onClick={()=> moveTaskUp(index)}>
                        ☝️
                    </button>
                    <button
                    className='move-button'
                    onClick={()=> moveTaskDown(index)}>
                        👇
                    </button>
                </li>)}
            </ol>
        </div>
        </React.Fragment>
    )
}
export default ToDoList