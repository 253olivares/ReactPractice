// Our todo list 
import React from 'react'
// our interfaces
import { TodoActions, TodoInterface } from '../../model'
// import our single todo
import SingleTodo from '../SingleTodo';
// our style sheet
import './styles.css'
// import our droppable that lets our application know where the divs we want our draggable components 
// to be intractable with
import { Droppable } from "react-beautiful-dnd";

// interface for our props we are passing so our fc knows what is going to be recieved
interface TodoListInterface {
    todos:TodoInterface[],
    setTodos: React.Dispatch<TodoActions>,
    completedTodos: TodoInterface[],
    // setCompletedTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

const TodoList: React.FC<TodoListInterface> = ({
  todos, 
  setTodos,
  completedTodos,
  // setCompletedTodos
}) => {
  return (
    // <div className='todos'>
    //     {
    //         todos.map(todo=> (
    //             <SingleTodo 
    //             todo={todo} 
    //             key={todo.id} 
    //             todos={todos} 
    //             setTodos={setTodos}/>
    //         ))
    //     }
    // </div>
    // container to house our droppable components
    <div className='container'>
      {/* first droppable todolist */}
      <Droppable droppableId="TodosList">
        {/* create a function that monitors the div */}
        {(provided,snapshot) => (
            <div className='todos'
            // target our div
            ref={provided.innerRef}
            // spread our droppableProps
            {...provided.droppableProps}
            >
              {/* create a dynamic class name that disables dragactive if snapshot isdraggable is true */}
              <span className={`todos__heading ${snapshot.isDraggingOver ? 'dragactive': ''}`}>
                Active Tasks
              </span>
              {/* map our todos and render our single todos for each todo */}
              {todos?.map((todo,index)=> (
                  <SingleTodo 
                  // pass information for each todo like its index
                  // todo information
                  // todos array
                  // dispatch function as set todos
                  // set out key as per rules of using map
                    index = {index}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                  />
                ))}
                {/* this makes sure our div doesnt collapse when we remove our div from its orginal div during hover*/}
              {provided.placeholder}
            </div>
        )}
      </Droppable>
      {/* second droppable for our todos remove list */}
      {/* same code as above */}
      <Droppable droppableId="TodosRemove">
        {(provided,snapshot) => (
            <div className='todos remove'
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
              <span className={`todos__heading ${snapshot.isDraggingOver ? 'dragcomplete': ''}`}>
                Completed Tasks
              </span>
              {completedTodos?.map((todo, index)=> (
                  <SingleTodo 
                    index = {index}
                    todo={todo}
                    todos={completedTodos}
                    setCompletedTodos={setTodos}
                    key={todo.id}
                  />
              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
    </div>
  )
}

export default TodoList