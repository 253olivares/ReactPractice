import React from 'react'
import { TodoActions, TodoInterface } from '../../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

// Interface that marks our props
type SingleTodoType = {
    index: number;
    todo: TodoInterface;
    // both of these functions that are recieved in our prop are set to be optional as our component is being used to display
    // bother todo tasks and completed tasks. only one or the other will pass so the app knows which this component is suppose to be.
    setTodos?: React.Dispatch<TodoActions>;
    setCompletedTodos?: React.Dispatch<TodoActions>;
};

// single todo component
const SingleTodo = ({index,todo,setTodos,setCompletedTodos}:SingleTodoType) => {
    // an edit state for when the user wants to edit the todo
    // if true then we display the edit jsx elements to allow the user to change the todo entry
    const [edit,setEdit] = React.useState<boolean>(false);
    // set our edit todo to whatever our current todo already is. 
    const [editTodo,setEditTodo] = React.useState<string>(todo.todo);

    // create a ref that will be user to focus our input when it is being rendered
    const inputRef = React.useRef<HTMLInputElement | never>(null);

    // set in a usereffect that will run everytime edit changes
    // if our edit jsx element is rendered then our edit input will focus
    React.useEffect (()=> {
        inputRef.current?.focus();
    },[edit]);

    // handle edit function
    const handleEdit = (id:number):void => {
        // setTodos(todos.map(todo => 
        //     todo.id === id ? {...todo,todo:editTodo} : todo
        // ))


        setTodos && setTodos({type: "edit", payload: {editTodo, id}});

        setEdit(false);
    }

    // handle done function will cause our todo to be marked if it has the value of true in isDone
    const handleDone = (id:number, ):void => {
        // runs this dispatch if set todos exists
        setTodos && setTodos({type:"done", payload:id});
        // otherwise this if setcompleted todos exist
        setCompletedTodos && setCompletedTodos({type:"completeDone", payload:id});

    }
    
    // handleDelete function
    const handleDelete = (id:number):void => {
        // if handle delete we take our id and then run our dispatch if our component has a set todo function
        setTodos && setTodos({type:"remove", payload:id});
        // otherwise if it has set completed todos function that it runs a diffrent dispatch
        setCompletedTodos && setCompletedTodos({type:"completeRemove",payload: id});

    }

  return (
    // set our todo component to the draggable component
    // creates a id that the dnd library needs to keep track of each draggable component
    // set an index for our component
    <Draggable draggableId={todo.id.toString()} index={index}>
        {/* within we put our form that can be clicked on and hovered */}
        {(provided,snapshot) => (
                <form 
                // class name that will put the class drag when snapshotisDragging is true
                    className={`todos__single ${snapshot.isDragging ? "drag": ""}`}
                    // runs on submit when we click enter when editing
                    onSubmit={(event) => {
                        // pass our event 
                        // prevent default
                        event.preventDefault();
                        // pass our id to our edit function
                        handleEdit(todo.id)
                    }}
                    // spread some draggable props that dnd needs
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // set our ref to target the form
                    ref={provided.innerRef}
                >
                    {/* checks if edit is true if it is then we display our input that can be modified */}
                    {  edit ? (
                        // bind our ref so that we can target it to focus on the edit form
                        // bind our value to our edit todo
                        // run a onchange function that changes our edit todo value which is going to be passed to our reducer later to change our todo state
                            <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className='todos__single--text' />
                        ) : (
                            // if edit is false we run another turnery to see if the task is marked as completed 
                            // if it is then we strike through the todo name
                            // else we display like normal
                            todo.isDone ? (
                                <s className='todos__single--text'>{todo.todo}</s>
                            ) : (
                                <span className='todos__single--text'>{todo.todo}</span>
                            )
                        )}
                    <div>
                        {/* our buttons */}
                        {/* first icon is our edit icon that we will disable if our todo is marked as completed 
                        we will also display our icon so the user knows its disabled. */}
                        <span className={`icon`} style={setCompletedTodos &&  {color:"rgba(0,0,0,.25)"}} onClick={()=> {
                            if(!edit && !todo.isDone) {
                                setEdit(!edit);
                            } else if (edit && !todo.isDone) {
                                setEdit(!edit);
                            }
                        }}>
                            <AiFillEdit />
                        </span>
                        {/* our delete icon that runs handle delete when triggered and passes our id */}
                        <span className='icon' onClick={()=> handleDelete(todo.id)}>
                            <AiFillDelete />
                        </span>
                        {/* handle done function that changes our isdoe value to true or false depending on what it currently is */}
                        <span className='icon' onClick={() => handleDone(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
    </Draggable>
  )};

export default SingleTodo