import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import {TodoContext} from '../provider/TodoProvider'
// this is a tasks detail page that will display information about our task when we click details
// This part of the module more exists to practice nested routes and params.

const TaskDetails = () => {

    // import our server connection to check if we are connected 
    const {connectedToServer} = React.useContext(TodoContext);

    // creates to handel our data nd data display for our module
    // Loading will handle the module display and give us a loading message while our app is retrieving data
    const [loading, setLoading] = React.useState(true);
    // task holds our data from our tasks
    const [task, setTask] = React.useState({});
    // error checks to see if we run into any issues incase if we do we display an error message
    const [error, setError] = React.useState(null);

    // useParams is a router hook that allows us to grab parameters within our route which we often label with :
    const params = useParams();

    // use navigate is a react hook that lets us redirect our page if we ever run into any issues
    const navigate = useNavigate();
    
    // our use location lets us grab our path name allowing us to make changes depending on recognizable changes in our url
    // or in this case just to display it
    const { pathname} = useLocation();

    // effect hook that runs code at the start of our program
    React.useEffect(()=> {
        // fetch task function that grabs our data since we dont have a unique function in our api file
        const fetchTask = async () => {
            if (connectedToServer) {
                // if we are connected to the server we fetch tasks at our id param we pass
                const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
                const data = await res.json();
                
                // if we run into an issue we redirect to the home page
                console.log(data);
                if (res.status === 404){
                    navigate('/')
                }
        
                // set that data
                setTask(data);
                // change our loading state so we display our data instead of a loading screen
                setLoading(false);
            } else {
                try{
                // code to run if we cant connect to the server
                
                // grab our data from our local storage if server is not available 
                // if this fails as well then we redirect our user to the home page
                let tasks = await JSON.parse(localStorage.getItem("todoListReact"))
                
                const newT = await tasks.filter((task)=> task.id == params.id)

                console.log(newT);

                if (!newT) {
                    navigate('/')
                }

                setTask(newT[0]);
                setLoading(false);
                } catch (error) {
                    navigate('/');
                }
            }

        }

        // run our function in use effect
        fetchTask();
    },[])

    return loading ? (
        // our loading screen
        <h3>Loading ...</h3>
    ) : (
        <div>
            {/* display our data */}
            <p>{pathname}</p>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <button onClick={()=> navigate('/')} text='Go Back' > Go Back </button>
        </div>
    )
}

export default TaskDetails;