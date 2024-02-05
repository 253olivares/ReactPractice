import React from "react"
import Login from './components/Login'
import User from './components/User'

export const AppContext = React.createContext(null);

function App() {

  const [username,setUsername] = React.useState("");

  const changeUser = (e)=> {
    setUsername(e.target.value);
  }

  return (
    <React.Fragment>
      <AppContext.Provider value={{username, changeUser}}>
        <Login />
        <User />
      </AppContext.Provider>
    </React.Fragment>
  )
}

export default App
