import React from 'react'
import { TodoActions } from '../../model';
import "./styles.css"

type InputFieldProps = {
    todo: string,
    setTodo:React.Dispatch<TodoActions>
    handleAdd: () => void;
}

const InputField = ({todo, setTodo,handleAdd}:InputFieldProps) => {

    const inputRef = React.useRef<HTMLInputElement | never>(null);

  return (
    <form 
    className='input' 
    onSubmit={(event)=> {
        event.preventDefault();
        handleAdd()
        inputRef.current?.blur();
    }}>
        <input 
        ref={inputRef}
        type="input" 
        value={todo}
        onChange={
            (e) => setTodo({type:"newSet", payload:e.target.value })
        }
        placeholder='Enter a task' className='input__box'/>
        <button type='submit' className='input_submit'>
            GO
        </button>
    </form>
  )
}

export default InputField