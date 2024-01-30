import { createContext, useState, useContext } from "react";

// create a global context
// userContext
const UserContext = createContext(undefined);
// our userProvider that we will call in app to wrap our application
// Deconstruct the child element 
export const UserProvider = ({children}) => {
    // User State
    const [user,setUser]= useState({
        name: "John",
        email: "john@example.com",
        dob: "01/01/2000"
    });
    // Return our provider and value letting react know our gloabl state is going to be user and we want to place our child elements in between
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
};

// Use User will allow us to call our state in the child elements 
export const useUser = () => useContext(UserContext)