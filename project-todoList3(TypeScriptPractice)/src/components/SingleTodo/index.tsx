import React from 'react'
import { TodoActions, TodoInterface } from '../../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

type SingleTodoType = {
    index: number;
    todo: TodoInterface;
    todos: TodoInterface[];
    setTodos?: React.Dispatch<TodoActions>;
    setCompletedTodos?: React.Dispatch<TodoActions>;
};

const SingleTodo = ({index,todo,todos,setTodos,setCompletedTodos}:SingleTodoType) => {
    const [edit,setEdit] = React.useState<boolean>(false);
    const [editTodo,setEditTodo] = React.useState<string>(todo.todo);

    const inputRef = React.useRef<HTMLInputElement | never>(null);

    React.useEffect (()=> {
        inputRef.current?.focus();
    },[edit]);

    const handleEdit =( id:number):void => {
        // setTodos(todos.map(todo => 
        //     todo.id === id ? {...todo,todo:editTodo} : todo
        // ))

        setTodos && setTodos({type: "edit", payload: {editTodo, id}});

        setEdit(false);
    }

    const handleDone = (id:number, ):void => {

        setTodos && setTodos({type:"done", payload:id});
      
        setCompletedTodos && setCompletedTodos({type:"completeDone", payload:id});

    }
    
    const handleDelete = (id:number):void => {

        setTodos && setTodos({type:"remove", payload:id});

        setCompletedTodos && setCompletedTodos({type:"completeRemove",payload: id});

    }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided,snapshot) => (
                <form 
                    className={`todos__single ${snapshot.isDragging ? "drag": ""}`}
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleEdit(todo.id)
                    }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {  edit ? (
                            <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className='todos__single--text' />
                        ) : (
                            todo.isDone ? (
                                <s className='todos__single--text'>{todo.todo}</s>
                            ) : (
                                <span className='todos__single--text'>{todo.todo}</span>
                            )
                        )}
                    <div>
                        <span className={`icon`} style={setCompletedTodos &&  {color:"rgba(0,0,0,.25)"}} onClick={()=> {
                            if(!edit && !todo.isDone) {
                                setEdit(!edit);
                            } else if (edit && !todo.isDone) {
                                setEdit(!edit);
                            }
                        }}>
                            <AiFillEdit />
                        </span>
                        <span className='icon' onClick={()=> handleDelete(todo.id)}>
                            <AiFillDelete />
                        </span>
                        <span className='icon' onClick={() => handleDone(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
    </Draggable>
  )};

export default SingleTodo