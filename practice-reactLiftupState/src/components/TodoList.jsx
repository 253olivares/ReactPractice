import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

    // this is where we practice state lifting
    // originally select value existed as a state within todo items.
    // originally we could just toggle the state change and it would change each component individually since they each existing in their own
    // component instance.
    
    // but since we wanted to add the functionally to delete our items we needed to move our select state upwards so we can keep track of the value along side the todo states
    // By lifting our select state and combining it with our todos we pass both our todo and select down
    // then we pass a fucntion down that the child component refrences

    // when activated using our child component our function in the parent runs changing our select
    // after our state mutates our react component rerenders with the changes select showing it as chosen to the end user
    const [todos,setTodos] = React.useState([
        {title:'exercise',selected:false, id: 0},
        {title:'laundry',selected:false, id: 1},
        {title:'dishes',selected:false, id: 2},
        {title:'study',selected:false, id: 3},
    ])

    // this is the function we pass down to change our select
    // we pass back the id of the component we are clicking on
    function onTodoItemCLicked(id) {
        // create a new todo by spreading our existing todos
        const newTodos = [...todos];
        // use find to locate the state object where our state id matches with passed id
        const todo = newTodos.find((todo)=> todo.id === id);
        // change the todo select value
        todo.selected = !todo.selected
        // pass the new state to replace our todos
        setTodos(newTodos);
    }

    // delete selected grabs our todos and uses filter to create a new todo array that throws out any todos that returned false
    // in this case if they were set to true
    function deleteSelected() {
        const newTodos = todos.filter((todo)=> todo.selected === false);
        // set as new todo
        setTodos(newTodos);
    }

    return (
        <div className="TodoListContainer">
            {
                todos.map(todo=> (
                    // passing down our todo and function that changes our state in the parent component
                    <TodoItem todo={todo} key={todo.id} onClick={onTodoItemCLicked} />
                ))
            }
            <div className="DeleteButton" onClick={deleteSelected}>
                <p>delete</p>
            </div>
        </div>
    )
}

