import React from 'react'
import { TodoActions } from '../../model';
import "./styles.css"
// our input field defines our props that are being passed
type InputFieldProps = {
    todo: string,
    setTodo:React.Dispatch<TodoActions>
    handleAdd: () => void;
}

// our input field
const InputField = ({todo, setTodo,handleAdd}:InputFieldProps) => {

    // create a ref that is used to keep track of our input so that we can change focus and blur
    const inputRef = React.useRef<HTMLInputElement | never>(null);

  return (
    // Our form jsx
    <form 
    // class name
    className='input' 
    // onsubmit function that triggers when our form senses it have been triggers
    onSubmit={(event)=> {
        // runs prevent default
        event.preventDefault();
        // trigges our function we passed down that adds our todo to the todos state
        handleAdd()
        // targets our ref and triggers the blur function to remove the box shadow we set that covers the screen with the the input form is targeted
        inputRef.current?.blur();
    }}>
        {/* our input ref */}
        <input 
        // our ref
        ref={inputRef}
        type="input" 
        value={todo}
        // our on change
        onChange={
            // pass our eventn and trigger our dispatcher which has been renamed to set todo. we trigger our type to new set and pass our paload as our input value which becomes the todo name
            (e) => setTodo({type:"newSet", payload:e.target.value })
        }
        // 
        placeholder='Enter a task' className='input__box'/>
        {/* our button triggers our submit */}
        <button type='submit' className='input_submit'>
            GO
        </button>
    </form>
  )
}

export default InputField