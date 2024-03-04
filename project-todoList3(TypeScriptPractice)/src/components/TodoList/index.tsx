import React from 'react'
import { TodoActions, TodoInterface } from '../../model'
import SingleTodo from '../SingleTodo';
import './styles.css'
import { Droppable } from "react-beautiful-dnd";

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
    <div className='container'>
      <Droppable droppableId="TodosList">
        {(provided,snapshot) => (
            <div className='todos'
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
              <span className={`todos__heading ${snapshot.isDraggingOver ? 'dragactive': ''}`}>
                Active Tasks
              </span>
              {todos?.map((todo,index)=> (
                  <SingleTodo 
                    index = {index}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                  />
                ))}
              {provided.placeholder}
            </div>
        )}
      </Droppable>
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