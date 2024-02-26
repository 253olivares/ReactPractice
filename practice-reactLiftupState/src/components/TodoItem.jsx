import React from "react";



export default function TodoItem({todo, onClick}) {

    // our function class changes the classes being displayed everytime our page renders
    // if selected is true we provide our selected class otherwise no selected class
    function getClassName(selected) {
        if(selected) {
            return 'TodoItemContainer selected'
        } else {
            return 'TodoItemContainer'
        }
    }

    return (
        <div className={getClassName(todo.selected)} onClick={()=>onClick(todo.id)}>
            <p className="TodoTitle"> {todo.title}</p>
        </div>
    )
}