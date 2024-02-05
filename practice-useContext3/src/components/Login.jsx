import React, { useContext } from "react";
import {AppContext} from '../App.jsx';

const Login = () => {

    const {username,changeUser} = useContext(AppContext);

    return(
        <div>
            <input 
            value={username}
            type="text" 
            onChange={changeUser}
            />
        </div>
    )
}

export default Login;