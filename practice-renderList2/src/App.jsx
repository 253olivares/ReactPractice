import React,
{
  useState
}
from "react"

import ToDo from "./component/ToDo";

export default function App() {

  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createdAt: '18:00'
    },
    {
      id: 'todo2',
      createdAt: '20:30'
    }
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  console.log(todos);

  return (
    <React.Fragment>
      <div>
        <button onClick={reverseOrder}>Reverse</button> 
        <table>
          <tbody>
            {todos.map((todo,index) => <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />)}
          </tbody>
        </table>
        
        {/* {todos.map((todo,index) => <p key={index} valueid={todo.id} valuecreatedat={todo.createdAt}>{todo.id} : {todo.createdAt}</p>)} */}

        {/* I couldnt figure it out but the bottom for some reason just did not display */}
        {/* <table>
          <tbody>
            {todos.map((todo,index)=> {
              console.log(todo.id);
              console.log(todo.createdAt);
              console.log(index);
              <p key={index}>{todo.id}</p>
              // <p key={index}>{todo[index].id} : {todo[index].createdAt}</p>
              // <tr key={index}>
              //   <td>{todo.id}</td>
              //   <input />
              //   <td>{todo.createdAt}</td>
              // </tr>
            })}
          </tbody>
        </table> */}
      </div>
    </React.Fragment>
  )
}
