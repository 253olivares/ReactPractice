// // Setting the data type for all our variables
// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies:string[];
// // Tupple
// // set array with a registered length that we want and values for those spots
// let role:[string,number,string,string]

// // without the object chaining marker then both values would be required when calling our object.
// // otherwise our code will return an error
// // type Person = {
// //   name: string;
// //   age?:number;
// // }

// // calling our Person object and created a object based on those restrictions
// // let person: Person = {
// //   name: "Piyush"
// // };

// // void returns undefinied never returns nothing
// // let printName2: (name:string) => never;

// // takes in a variable called name and we declare it as a string
// // then we tell typescript that our function will return void
// // function printName(name:string):void {
// //   console.log(name);
// // }

// //Our :JSX.Element declares what our function will return.
// // in this case the jsxElement

// // defining person as interface
// interface Person {
//   name:string;
//   age?: number;
// }

// // extending a interface like type below is the same as extending 
// // class objects
// interface Guy extends Person {
//   profession:string;
// }

// type X = {
//   a: string;
//   b: number;
// }

// type Y = X & {
//   c:string;
//   d:number;
// }

// // we extend our X type into Y and then just call Y below to se params for our abc&d
// let y: Y = {
//   a:"sds",
//   b: 32,
//   c:'edas',
//   d: 32,
// }

// these are basics of type scripts
import React from "react"
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import './App.css'

import {TodoActions, TodoInterface} from "./model";
import { DragDropContext, DropResult} from "react-beautiful-dnd";

type TodoStateType = {
  todo: string,
  todos: TodoInterface[],
  completedTodos: TodoInterface[]
}

const TodoReducer = (state:TodoStateType, action:TodoActions) => {
  switch(action.type) {
    case "add":
      return {...state, todos:[...state.todos, {id: Date.now(), todo:action.payload, isDone:false}]}
    case "remove":
      return {...state, todos:[...state.todos.filter(todo=> todo.id!==action.payload)]}
    case "done":
      let newCompleteTodo={id: 0, todo:"holder", isDone:false};
      state.todos.map((todo):void => {
        if(todo.id === action.payload) {
          newCompleteTodo = todo;
        }
      })
      //{...state, todos:[...state.todos.map(todo=> todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo)]}
      return {...state, todos:[...state.todos.filter(todo=> todo.id !== action.payload)], completedTodos:[...state.completedTodos,{...newCompleteTodo,isDone:true}]}
    case "edit":
      return {...state, todos:[...state.todos.map(todo=> todo.id === action.payload.id ? {...todo, todo:action.payload.editTodo} : todo)]}
    case "newSet":
      return {...state, todo: action.payload}
    case "newTodos":
      return {...state, todos: action.payload}
    case "newCompletedTodos":;
      return {...state, completedTodos: action.payload}
    case "completeDone": 
      let newTodo = {id: 0, todo:"holder", isDone:false}; 
      state.completedTodos.map((todo):void=> {
        if(todo.id === action.payload){
           newTodo = todo;
        }
      })
      //{...state, completedTodos:[...state.completedTodos.map(todo => todo.id === action.payload ? {...todo, isDone:!todo.isDone}: todo )]}
      return{...state, todos:[...state.todos,{...newTodo, isDone:false}], completedTodos: [...state.completedTodos.filter(todo=> todo.id !== action.payload)]}
    case "completeRemove": 
      return{...state, completedTodos:[...state.completedTodos.filter(todo=> todo.id !== action.payload)]} 
    default:
      return state;
  }
}

const App:React.FC = () => {
  // const [todo,setTodo] = React.useState<string>("");
  // const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  const [state, dispatch] = React.useReducer(TodoReducer,{todo:"", todos:[], completedTodos:[]});

  // const [completedTodos,setCompletedTodos] = React.useState<TodoInterface[]>([]);

  const handleAdd = () => {
  
    if(state.todo) {
      dispatch({type:"add",payload:state.todo})
      dispatch({type:"newSet",payload:""})
    }
  };
  
  // console.log(todo);

  const onDragEnd = (result:DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add, 
        active = state.todos, 
        complete = state.completedTodos;
    
    if(source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index]
      complete.splice(source.index,1);
    }

    if(destination.droppableId === "TodosList") {
      add = {...add, isDone:false}
      active.splice(destination.index, 0, add);
    } else {
      add = {...add, isDone:true}
      complete.splice(destination.index, 0 ,add);
    }

    console.log(active);

    // setCompletedTodos(complete);
    dispatch({type: "newTodos" , payload: active});
    dispatch({type: "newCompletedTodos" , payload: complete})
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="app">
          <span className="heading">Taskify</span>
          <InputField todo={state.todo} setTodo={dispatch} handleAdd={handleAdd}></InputField>
          <TodoList todos={state.todos} setTodos={dispatch}
          completedTodos = {state.completedTodos}
          // setCompletedTodos = {dispatch}
          />
        </div>
      </DragDropContext>
  )
}

export default App
