import React from "react";
import {useUserContext} from '../UserProvider'


function ComponentA() {

    const {user} = useUserContext();

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
        </div>
    )
}

export default ComponentA