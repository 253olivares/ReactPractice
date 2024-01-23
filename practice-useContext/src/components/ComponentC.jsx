import React, {useContext} from 'react';
import { UserContext } from './ComponentA';
import ComponentD from "./ComponentD";

function ComponentC() {
    // we call our context and then use user down in our fragment
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD></ComponentD>
        </div>
    )
}

export default ComponentC;