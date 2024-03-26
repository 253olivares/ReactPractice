export interface TodoInterface {
    id: number;
    todo:string;
    isDone:boolean;
}

type PayloadEdit = {
    editTodo:string,
    id:number
}

export type TodoActions = 
| {type:'add', payload:string}
| {type:'remove',payload:number}
| {type:'done',payload:number}
| {type:'edit',payload:PayloadEdit}
| {type:'newSet',payload:string}
| {type: "newTodos" , payload: Array<TodoInterface>}
| {type: "newCompletedTodos" , payload: Array<TodoInterface>}
| {type: "completeDone" , payload:number}
| {type: "completeRemove" , payload:number}



// Reducer
// that will be used to replace our current state logic

// import React from 'react'

// set our action types
// type Actions = 
//     | {type:'add',payload:string}
//     | {type:'remove',payload:number}
//     | {type:'done',payload:number};

// our state and our actions which will be accompanied with a type and payload of data we want to pass
// const TodoReducer = (state:Todo[], action: Actions)=> {
    // perform the action       
//     switch(action.type) {
//         case "add":
//             return[
//                 ...state,
//                 {id: Date.now(), todo:action.payload, isDone:false}
//             ];
//         case 'remove':
//             return state.filter( todo => todo.id !== action.payload);
//         case 'done':
//             return state.map(todo=> 
//             todo.id !== action.payload ? {...todo, isDone: !todo.isDone}  : todo 
//             );
//         default:
//             return state;
//     }
// }

// const index = () => {
//     const [state,dispatch] = React.useReducer(TodoReducer,[])
//   return (
//     <div>index</div>
//   )
// }

// export default index