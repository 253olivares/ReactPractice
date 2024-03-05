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
// Our main app
// will be a bit message since we are housing our reducer on the main app page instead of a separate state manager lik redux or context
import React from "react"
// import input field
import InputField from "./components/InputField";
// Todo list component
import TodoList from "./components/TodoList";
// our css
import './App.css'

// import our type interface for our reducer action and reducer state from model
import {TodoActions, TodoInterface} from "./model";
// import drag ad drop features from react beautiful dnd
import { DragDropContext, DropResult} from "react-beautiful-dnd";

// this is our state type interface
type TodoStateType = {
  todo: string,
  todos: TodoInterface[],
  completedTodos: TodoInterface[]
}

// our reducer that houses all our state mutations
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

// our main react app component
const App:React.FC = () => {
  // const [todo,setTodo] = React.useState<string>("");
  // const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  // create our reducer set our state and a dispatch function that will be used to update our state
  // our dispatch takes in a type and action with type being the function we want to run and action being 
  // the data being passed
  
  // we pass our todo reducer which houses our switch logic that checks to see with functions we want to run to modify the state
  // then pass an array of our state that we will be managing in our reducer
  const [state, dispatch] = React.useReducer(TodoReducer,{todo:"", todos:[], completedTodos:[]});

  // const [completedTodos,setCompletedTodos] = React.useState<TodoInterface[]>([]);

  // HandleAdd function that is responsible to create a new todo 
  const handleAdd = () => {
    // of state todo exists 
    if(state.todo) {
      // run our dispatch passing our type and then a payload of what we want changed in our todo. In this case append it to the end
      dispatch({type:"add",payload:state.todo})
      dispatch({type:"newSet",payload:""})
    }
  };
  
  // console.log(todo);

  // on Drag function that will trigger when dnd experiences that end of a users dragging and dropping a dom
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
    // we create a drag and drop context
    <DragDropContext onDragEnd={onDragEnd}>
      {/* inside we place our application any time it detects this happening it triggers the function within */}
        <div className="app">
          {/* name of todo */}
          <span className="heading">Taskify</span>
          {/* input field that takes our todo state that keeps track of the new todo we are adding
          passes our dispatch that lets us run our function to set our todo in our input field
          we pass our handle add function so we can trigger it in our child component */}
          <InputField todo={state.todo} setTodo={dispatch} handleAdd={handleAdd}></InputField>
          {/* our todo list component that takes our todos state that keeps track of our list
          our set todos passes our dispatch function
          // completed todos passes another todo state that keeps track of each todo array so we can drag and drop between both and show our update */}
          <TodoList todos={state.todos} setTodos={dispatch}
          completedTodos = {state.completedTodos}
          // setCompletedTodos = {dispatch}
          />
        </div>
      </DragDropContext>
  )
}

export default App
