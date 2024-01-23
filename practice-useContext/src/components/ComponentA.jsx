//useContext() = React hook that allows you to share values
//               between multiple levels of components
//               without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContent = createContext();
// 3. <MyContext.Provider value={value}>
//          <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react'
//    import (MyContext) from './ComponentA.jsx';
// 2. const value = userContext(MyContext);


import React, { useState,createContext } from "react";
// react insert useState and create context to export the states into our react components
import ComponentB from "./ComponentB";
// userContext create a useContext
export const UserContext = createContext();

function ComponentA() {
// component function
    // Creates a user state
    const [user, setUser] = useState("Code");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            {/* we rap our component with the userContext to let the framework know to allow access to this state to any 
            child component within the tag */}
            <UserContext.Provider value={user}>
                <ComponentB></ComponentB>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;