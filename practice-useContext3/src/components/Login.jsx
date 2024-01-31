import React, { useContext } from "react";
import {AppContext} from '../App.jsx';

const Login = () => {

    const {username,setUsername} = useContext(AppContext);

    return(
        <div>
            <input 
            value={username}
            type="text" 
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
            />
        </div>
    )
}

export default Login;