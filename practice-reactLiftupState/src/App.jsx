import React from 'react'
import TodoList from './components/TodoList'

function App() {
// our main app we create an App diiv and then put our h2 and load our todo list
  return (
    <React.Fragment>
      {/* our app */}
      <div className='App'>
        <h2>Todo List</h2>
        <TodoList />
      </div>
    </React.Fragment>
  )
}

export default App
