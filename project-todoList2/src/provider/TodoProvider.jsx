import React from "react";

// Out back end here we will be reaching out to our server to see if we can connect if we can then we use the json back end to make adjustments
// to our database otherwise if nothing is found that we resort to loading in the db fresh and storing it in local storage.

// With local storage user will be responsible for holding in their own data and will update every time the server is disconnected 
// and the user changes anything outside of these two requirements local storage is not used and user will be interacting
// using the rest api if it is running and loaded

// Create context that will hold our values we want to pass so we can call them in our child elements
export const TodoContext = React.createContext(null);

// Our provider component that will take the children that exist in our component when react is creating our object
export const TodoProvider = ({children}) => {
  // Key for our localStorage
  const key = "todoListReact"

  // Creating States for our todo projects
  // Server state to that we can use to keep track of if our server is up.
  // This is so that we can default to a different line of code. Still in testing so may not be used currently
  const [connectedToServer, setConnectedToServer] = React.useState(false);
  
  // State that will keep track of our connect 
  // mostly to keep track of if our server is trying to connect to the server or if it has already failed
  const [connecting, setConnecting] = React.useState(false);

  // Toggle State to keep track of if our add task toggle is true or false
  const [toggle,setToggle]  = React.useState(false);

  // Task state that we will use to keep track of all out tasks.
  const [tasks,setTasks] = React.useState([]);

  // useLayoutEffect -- Reason for using a layout effect vs useEffect is that I want this code run before use effect on initial run to avoid
  // creating an issues where it whips the task array in our localstorage when the server is not connect
  // otherwise our app wont work
  // the layout then checks to make sure that the server fail to connect to make sure that we arnt still connecting
  // once bother conditions are met we allow the layouteffect run every time our tasks state changes
  React.useLayoutEffect(()=> {
    if (!connectedToServer && connecting){
      //== should be removing and setting new state
      localStorage.setItem(key, JSON.stringify(tasks));
    }
  },[tasks])

  // useEffect -- utilizing this hook to fetch our server at the start of the apps commencement. 
  // we are fetching the server end data and setting it in out task state
  // Here when im ready to adjust the code to work without server is where I am going to add a conditional that if our server returns 404 we are
  // going to use a storage item server resolution. 
  React.useEffect(()=> {
    // Create our function in the effect
    const getTasks = async()=> {
      const tasksFromServer = await fetchTasks();
      console.log("Information from our get Tasks:" , tasksFromServer);
      setTasks(tasksFromServer);
      console.log(connectedToServer);
    }
    // run our function in effect
    getTasks();
  },[])

  //Fetch Tasks function we are using this to call our data from our api endpoint
  const fetchTasks = async () => {
    // we set up a try and catch to check for the server existence if it doesnt exist in this case we want to use our back up
    // solution of using localstorage
    // once our try fails we go to our catch
    // return our error display so we know the issue is that we cant connect
    // and then we let the app know its no longer connecting to the server and tell it that it failed by changing our connecting and connected status states
    try {
        const res = await fetch(`http://localhost:5000/tasks`)
        console.log("Information from our fetch tasks try:",res);
      // network error in the 4xx–5xx range
      if (res.ok) {
        const data = await res.json();
        console.log("Information from our fetchtasks try / if:",data)
        setConnectedToServer(true);
        setConnecting(true);
        return data;
      }
      throw new Error(`${res.status} ${res.statusText}`);
    } catch (error) {
      // backup of our server doesn't exist then we will rely on localStorage to create a fake server
      // This server will entirely depend on the user messing with their local storage
      setConnectedToServer(false);
      setConnecting(true);
      if(localStorage.getItem(key)){
        // if local storage exists with our key then we grab data
        const data = await JSON.parse(localStorage.getItem(key))
        console.log("Information from fetchtask when server not found and data is fetched from localstorage:", data);
        return data;
      } else {
        // if local storage doesnt exist with our data then we want to fetch our data from db json file and set it
        const backupData = await fetch('../../db.json');
        const results = await backupData.json()
        const data = await results.tasks
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Information from fetchtasks when error is found:",results);
        console.log("Information from fetchtasks when error is found:",test);
        console.log("Information from fetchtasks when error is found:",error);
        return data;
      }
    }
  }

  // fetch task with id params
  // This function is being utilized to grab information of specific tasks id
  // Mostly being using in our update reminder function to allow the todo app change the datas reminder. 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();

    return data;
  }

  // Add Task function takes in our task object from our add Task form and adds it to our task array
  const addTask = async (task) => {

    let data;
    // check for connection if we are connected then we use our fetch api
    if(connectedToServer) {
      // const id = Math.floor(Math.random() * 10000 + 1);
      // Fetch function making at connection to our end point and sending data using the post method and passing our data in body : Json Stringify
      const res = await fetch(`http://localhost:5000/tasks`, 
      {
        method:'POST',
        header:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      // create a data variable to hold our result which will be the new task that we sent in. fortunately with our end point it will return
      // with a new id so we can just plug it into our tasks state by just spreading our previous task and appending it to the end. 
      data = await res.json();
    } else {
      // if we are not connected to the server we create an id since we dont have a fetch api to create one for us
      const id = Math.floor(Math.random() * 10000 + 1);
      console.log(id)
      // create our task object with new id
      data = {id: id, ...task }
    }
    // Set tasks state 
    setTasks(prevTask => [...prevTask,data]); 
  }

  // Change Reminder async function 
  // Takes in id so we can pass it to our fetch task function to grab information of our task data from the database
  const changeReminder = async (id) => {
    // check for server
    if(connectedToServer) { 
      // Call the fetch task function
      const taskToToggle = await fetchTask(id);

      // we spread our object and make changer to reminder.  Then we store as a new variable which is our updated function with changed
      // reminder that will show on our react application
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      // Make a connection to our fake database using the put method
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask)
      })

      // Get the result of our updated task by returning it data
      const data = await res.json();
    }

    // After which we set it in our task array but looping through our array using the map function
    // The map function takes each object in task and checks to see if any object id matches our id from earlier if it does
    // we use map to replace the data at the selected object where the id is true
    // if it is not true then we put the task back without changing anything
    // but if it is we appended the new data reminder which should be the opposite of what it was recently
    setTasks(
      tasks.map((task)=> 
      task.id == id ? {...task, reminder: !task.reminder} 
      : task
      )
    )
    // end of our function
  }

  // delete task function that takes in the ide and removes our task from our fake backend and then removes it from our task 
  // state using the filter function
  const deleteTask = async (id) => {
    // check for server
    if(connectedToServer)  {
      // fun fetch api if we are connected
      await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    }

    // Set Tasks function
    // task filter function finds the id that matches our id param and ejects it from our array
    setTasks(tasks.filter((task)=> task.id !== id));
  }

  // Change Toggle function
  const changeToggle = () => {
    // changes our toggle state to show and not show add table
    setToggle(!toggle);
  }

  const providerValues = {connectedToServer,toggle,tasks,connecting,fetchTasks,addTask,changeReminder,deleteTask,changeToggle}

    // our context provider where we put in all our states and functions we want to run throughout our applications
    return <TodoContext.Provider value={providerValues} >
      {children}
      </TodoContext.Provider>
}

