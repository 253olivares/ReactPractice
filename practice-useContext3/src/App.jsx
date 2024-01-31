import React from "react"
import Login from './components/Login'
import User from './components/User'

export const AppContext = React.createContext(null);

function App() {

  const [username,setUsername] = React.useState("");

  return (
    <React.Fragment>
      <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
      </AppContext.Provider>
    </React.Fragment>
  )
}

export default App
