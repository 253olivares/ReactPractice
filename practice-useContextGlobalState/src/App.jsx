import React from "react"
import ComponentA from './components/ComponentA'
import UserProvider from './UserProvider'

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <ComponentA />
      </UserProvider>
    </React.Fragment>
  )
}

export default App
