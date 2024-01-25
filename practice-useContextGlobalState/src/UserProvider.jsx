import React from 'react'

const UserContext = React.createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = React.useState("Code");

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext);

export default UserProvider