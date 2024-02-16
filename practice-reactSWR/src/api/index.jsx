// importing our axios
// this file will be updated from using axios to utilize our fetch api
// to using swr as our backend endpoint
import axios from "axios";

const delay = () => new Promise (res => setTimeout(()=> res(), 800) )

// Our crud operation 

// our api file where we will create our functions that will interact with our application. All of it will be stored and created in this file
// for organization. 

// Axios create set a baselineURL directory
const todosApi = axios.create({
    baseURL: "http://localhost:2500"
});

// add our end point as a variable
export const todosUrlEndpoint = '/todos';

// for our gettodos we just want to get our api and retrieve all our data from the database
export const getTodos = async() => {
    await delay();
    const response = await todosApi.get(todosUrlEndpoint);
    // return data
    return response.data;
}

// add todo function takes in our userId, Title, and Completed values that we will pass on from our todos component
export const addTodo = async({ userId, title, completed}) => {
    await delay();
    if (Math.random()<0.5) throw new Error('Failed to add new item!');
    // all passed values are plugged into our axios api and sends a post request to the server. 
    // the server creates a new id for the input and sets the new data.
    const response = await todosApi.post(todosUrlEndpoint, { userId, title, completed })
    console.log("addTodo(response): ",response);
    return response.data
}

// update todo sends a patch to our end point that updates our data
export const updateTodo = async (todo) => {
    await delay();
    // patch just makes sure we are targeting the correct endpoint by making sure we have the right id and directory and then just replaces
    // all the data with the new todo. 
    const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo);
    // return our data
    return response.data
}

// delete todo function
// takes in an id so that we can dynamically change our end point. Once we have the correct end point we specify we want to delete that id by passing the id. 
export const deleteTodo = async ({id}) => {
    await delay();
    return await todosApi.delete(`${todosUrlEndpoint}/${id}`, id);
}