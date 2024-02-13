import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import Home from "./home";
import Login from "../login";

const Dashboard = () => {

    const [user, setUser] = React.useState(null);
    const auth = getAuth();

    React.useEffect(()=> {

        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    },[])

    return (
        <div>
            {
                user ? 
                <Home />
                :
                <Login />
            }
        </div>
    )
}

export default Dashboard;