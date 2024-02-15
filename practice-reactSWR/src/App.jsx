import React from 'react'
import TodoList from './components/todos'

function App() {

  // nothing special is going on in this document just importing our todo so that it will load when we start our application.

  return (
    <React.Fragment>
      <TodoList />
    </React.Fragment>
  )
}

export default App
