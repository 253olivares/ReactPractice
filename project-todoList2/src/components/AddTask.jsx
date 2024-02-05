import React from "react";
import {TodoContext} from '../provider/TodoProvider'

// Add Tasks component

const AddTask = ()=> {
    // Create states that are going to be used to keep track of user input of the task values 
    // we set each of these values using our onchange attribute that detects inputs and runs a function that sets our states with our
    // target values

    const {addTask} = React.useContext(TodoContext);

    // Ideal set up would to use useRef instead of useState for these values since its refreshing the page everytime our input changes
    const [text,setText] = React.useState('');
    const [day,setDay] = React.useState('');
    const [reminder,setReminder] = React.useState(false);

    // onsubmit function takes our event
    const onSubmit = (e)=>{
        // First prevent our form from reloading the page
        e.preventDefault();

        // holder checks to to see if we have a text and day return from our form
        if(!text){
            alert('Please add a task');
            return
        }
        if(!day){
            alert('Please add a day!');
            return
        }
        // We run our function that was passed down from the parent component 
        // our onAdd prop carries our function that runs set task in the parent component
        // We pass our text day and reminder states so we can then add it to our task state that 
        // Keeps track of all our tasks in a state

        addTask({text,day,reminder});

        // Reset our states so that our input values blank after we successfully submit our task
        setText('');
        setDay('');
        setReminder(false)
    }

    return(
        // Our form that is being constructed in this component
        // give an onSubmit attribute with a onsubmit function
        <form className="add-form" onSubmit={onSubmit}>
            {/* our first form element with a label to say task and a input that that is bind to our text state with a onchange attribute to runs a function 
            within that sets our text with our e.target value*/}
            <div className="form-control">
                <label>Tasks</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            {/* Our second form input to type in our day and time 
            Functions similarly to our task input where we bind our day state and then run our onChange attribute that sets our day state */}
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            {/* Third form which is a check box we since our reminder is already a bool value of true and false then all we have to do is set our
            check and value attributes to reminder
            Then with our onchange attribute we run a function to runs set reminder to set our target to checked attribute which will be true or false */}
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            {/* input button that submits our form */}
            <input type="submit" value='Save Task' className="btn btn-block" />
        </form>
    )
}

export default AddTask;