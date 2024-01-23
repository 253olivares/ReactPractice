import React, {useContext} from 'react';
import { UserContext } from './ComponentA';

function ComponentD() {
// we can do this again in our D component as long as we call useContext
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComponentD;