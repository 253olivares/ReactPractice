import React from 'react'

// Create our context and name is usercontext
const UserContext = React.createContext();

const UserProvider = ({children}) => {
    // Create a provider that we will export and use to wrap around our child components
    // That we are calling within our props and list in our return so that react knows this component is suppose to carry
    // child components

    // Create our global state
    const [user, setUser] = React.useState("Code");

    return (
        // UserContext provider that will wrap and carry the users in it
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}
// our useUserContext is create so that we can call our user context when needed in receiver components
export const useUserContext = () => React.useContext(UserContext);

export default UserProvider